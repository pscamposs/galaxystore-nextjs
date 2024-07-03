"use client";
import PluginInfoModal from "@/components/modal/PluginInfoModal";
import { FormWrapper } from "@/components/plugin/FormContainer";
import PluginBuilder from "@/components/pluginBuilder/PluginBuilder";
import PluginCard from "@/components/plugin/PluginCard";
import { Plugin } from "@/types/FilterTypes";
import {
  faCloudArrowDown,
  faCloudArrowUp,
  faCoins,
  faFont,
  faImage,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, {
  ButtonHTMLAttributes,
  SyntheticEvent,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

/* TODO: 
Create file uploader
separate the components
**/

const PluginContainer = styled.div`
  display: flex;
  width: 60%;
  padding: 2rem;
  gap: 12px;
  border-radius: 4rem;
  white-space: nowrap;
  overflow-x: auto;
  div {
    min-width: 300px;
  }
`;

const DashboardContainer = styled.div`
  padding: 0 2rem;

  main {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  header {
    display: flex;
    justify-content: space-between;

    li {
      list-style: none;
    }
    button {
      background-color: var(--draft-color-2);
      color: aliceblue;
      padding: 0.5rem 1rem;
      cursor: pointer;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: var(--draft-color);
        border-radius: 0.4rem;
        transition: all 0.2s;
      }
    }
  }
`;
const CardContainer = styled.div`
  box-shadow: 1px 2px 4px var(--secondary-dark);
  padding: 1rem 2rem;
  line-height: 200%;
  h3 {
    color: var(--draft-color-2);
    font-size: 1.5rem;
  }
  p {
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

const Panels = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  padding: 2rem 1rem;
`;

const PanelCard = ({ children }: { children: React.ReactNode }) => {
  return <CardContainer>{children}</CardContainer>;
};

const ClientListContainer = styled.div`
  border: 2px solid var(--secondary-dark);
  padding: 8px 2rem;
  li {
    list-style: none;
    margin-top: 8px;
  }
`;

const ClientCard = styled.div`
  display: flex;
  gap: 1rem;
`;

const ClientCardComponent = () => {
  return (
    <ClientCard>
      <div>
        <Image
          width={32}
          height={32}
          alt="icon"
          src={
            "https://s.namemc.com/2d/skin/face.png?id=649745daeb1a2498&scale=4"
          }
        />
      </div>
      <div>
        <h3>Drakiz</h3>
        <p>R$42,00</p>
      </div>
    </ClientCard>
  );
};

export default function AdminDashboard() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  return (
    <DashboardContainer>
      <PluginInfoModal />

      <header>
        <div>
          <h2>Seja bem vindo Patrick Soares</h2>
          <p>Configure e administre a loja em seu dashboard</p>
        </div>
        <ul>
          <li>
            <button onClick={() => setDialogOpen(true)}>+ Novo plugin</button>
          </li>
        </ul>
      </header>
      <Panels>
        <PanelCard>
          <h3>Plugins na loja</h3>
          <p>2</p>
        </PanelCard>
        <PanelCard>
          <h3>Total em compras</h3>
          <p>R$ 15,00</p>
        </PanelCard>
        <PanelCard>
          <h3>Clientes</h3>
          <p>0 </p>
        </PanelCard>
        <PanelCard>
          <h3>Tickets Abertos</h3>
          <p>0</p>
        </PanelCard>
      </Panels>
      <main>
        <PluginContainer>
          <PluginCard />
          <PluginCard />
          <PluginCard />
          <PluginCard />
          <PluginCard />
          <PluginCard />
          <PluginCard />
          <PluginCard />
          <PluginCard />
          <PluginCard />
        </PluginContainer>
        <ClientListContainer>
          <h2>Top compradores</h2>

          <ul>
            <li>
              <ClientCardComponent />
            </li>
          </ul>
        </ClientListContainer>
      </main>
      {isDialogOpen && <PluginBuilder setDialogOpen={setDialogOpen} />}
    </DashboardContainer>
  );
}
