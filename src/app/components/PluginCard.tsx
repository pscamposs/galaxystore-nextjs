import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import DefaultIcon from "./DefaultIcon";
import { ModalContext } from "../context/use-modal-context";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  padding: 12px 0;
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

export default function PluginCard({ plugin }: { plugin: any }) {
  const { toggleModal } = useContext(ModalContext);

  return (
    <CardContainer>
      <div>
        <img
          src="/res/images/Default.svg"
          alt=""
          onClick={() => toggleModal(plugin)}
        />
        <CardTag>Factions</CardTag>
        <CardTitle>GalaxyTheBridge</CardTitle>
        <CardPrice>R$ 60,00</CardPrice>
      </div>
      <div>
        <CardButton>
          <FontAwesomeIcon icon={faCartShopping} />
          Comprar
        </CardButton>
      </div>
    </CardContainer>
  );
}
