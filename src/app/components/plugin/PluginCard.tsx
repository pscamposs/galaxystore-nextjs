import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import DefaultIcon from "./DefaultIcon";
import { ModalContext } from "@/app/context/use-modal-context";
import { Plugin } from "@/types/FilterTypes";
import Image from "next/image";
import useModal from "@/app/hooks/useModal";
import { centsToReal } from "@/utils/FormatUtils";

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
  font-weight: 500;
`;

const CardPrice = styled.p`
  margin: 8px 0;
  font-weight: 600;
  font-size: 1.4rem;
`;

const CardButton = styled.button`
  background-color: var(--primary-dark);
  border: none;
  width: 100%;
  padding: 16px;
  color: var(--primary-white);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--secondary-white);
    color: var(--primary-dark);
  }

  svg {
    margin-right: 5px;
  }
`;

export default function PluginCard({ plugin }: { plugin?: Plugin }) {
  const { toggleModal } = useModal();

  const getPluginAction = () => {
    if (plugin?.canEdit) return "Editar";
    else if (plugin?.purchased || plugin?.price || 0 <= 0) return "Baixar";
    else return "Comprar";
  };

  return (
    <CardContainer>
      <div>
        <Image
          src={plugin?.icon || "/res/images/Default.svg"}
          alt="pluginIcon"
          onClick={() => toggleModal(plugin)}
          width={128}
          height={128}
        />
        <CardTag>{plugin?.tag || "Exemplo"}</CardTag>
        <CardTitle>{plugin?.name || "Nome de exemplo"}</CardTitle>
        <CardPrice>{centsToReal(plugin?.price || 0) || "R$ 60,00"}</CardPrice>
      </div>
      <div>
        <CardButton>
          <FontAwesomeIcon icon={faCartShopping} />
          {getPluginAction()}
        </CardButton>
      </div>
    </CardContainer>
  );
}
