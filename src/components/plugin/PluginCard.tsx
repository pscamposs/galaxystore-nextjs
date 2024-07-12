import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faCartShopping,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import DefaultIcon from "./DefaultIcon";
import { ModalContext } from "@/context/use-modal-context";
import { Plugin } from "@/types/FilterTypes";
import Image from "next/image";
import useModal from "@/hooks/useModal";
import { centsToReal } from "@/utils/FormatUtils";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--secondary-dark);
  text-align: center;
  max-height: 340px;
  overflow: hidden;
  padding: 16px 32px;

  img {
    max-width: 128px;
    cursor: pointer;
  }

  &:hover {
    transform: scale(1.01);
    transition: 0.2s;
  }
`;

const CardTag = styled.p`
  background-color: var(--secondary-white);
  color: var(--primary-white);
  padding: 4px 2px;
  border-radius: 4px;
  margin: 4px auto;
  width: 100px;
  overflow: hidden;
`;

const CardTitle = styled.h2`
  margin: 8px 0;
`;

const CardPrice = styled.p`
  margin: 8px 0;

  font-size: 1.4rem;
`;

const CardButton = styled.button`
  background-color: var(--primary-dark);
  border: none;

  color: var(--primary-white);
  cursor: pointer;

  width: 100%;
  padding: 8px 32px;

  svg {
    margin-right: 5px;
  }
`;

export default function PluginCard({
  plugin,
  edit = false,
  setDialogOpen,
  setEditPlugin,
}: {
  plugin?: Plugin | null;
  edit?: boolean;
  setDialogOpen?: any;
  setEditPlugin?: any;
}) {
  const { data: session } = useSession();
  const { toggleModal } = useModal();
  const { addToCart } = useCart();

  const getPluginAction = () => {
    if (plugin?.purchased || ((plugin?.price ?? 0) <= 0 && !edit)) {
      return "Baixar";
    } else if (edit) {
      return "Editar";
    } else {
      return "Comprar";
    }
  };

  const getPluginIcon = () => {
    if (plugin?.purchased || ((plugin?.price ?? 0) && !edit)) {
      return faArrowDown;
    } else if (edit) {
      return faPen;
    } else {
      return faCartShopping;
    }
  };

  const downloadPlugin = async () => {
    try {
      const token = session?.user.accessToken;
      const response = await fetch(
        `${process.env.API_URL}/plugin/${plugin?._id}`,
        {
          method: "GET",
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Falha ao baixar o plugin");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = `${plugin?.name}.jar`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {}
  };

  const handlePluginButton = () => {
    if (plugin) {
      if (plugin.purchased) {
        downloadPlugin();
      } else if (edit) {
        setEditPlugin(plugin);
        setDialogOpen(true);
      } else {
        addToCart(plugin);
      }
    }
  };

  return (
    <CardContainer>
      <div>
        <Image
          src={plugin?.image || "/res/images/Default.svg"}
          alt="pluginIcon"
          onClick={() => toggleModal(plugin)}
          width={128}
          height={128}
        />
        <CardTag>{plugin?.category || "Exemplo"}</CardTag>
        <CardTitle>{plugin?.name || "Nome de exemplo"}</CardTitle>
        <CardPrice>{centsToReal(plugin?.price || 0) || "R$ 60,00"}</CardPrice>
      </div>
      <div
        style={{
          padding: 9,
        }}
      >
        <CardButton onClick={handlePluginButton}>
          <FontAwesomeIcon icon={getPluginIcon()} />
          {getPluginAction()}
        </CardButton>
      </div>
    </CardContainer>
  );
}
