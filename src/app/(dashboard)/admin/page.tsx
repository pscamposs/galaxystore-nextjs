"use client";
import PluginInfoModal from "@/app/components/modal/PluginInfoModal";
import { FormWrapper } from "@/app/components/plugin/FormContainer";
import PluginCard from "@/app/components/plugin/PluginCard";
import { Plugin } from "@/types/FilterTypes";
import {
  faCloudArrowDown,
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

const PluginDialog = styled.dialog`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: aliceblue;
  border: none;

  form {
    background-color: var(--primary-dark);
    padding: 16px 32px;
  }

  label {
    display: block;
    margin: 8px 0 0 0;
    font-weight: 600;
  }

  textarea {
    background-color: var(--secondary-dark);
    border: none;
    border-bottom: 1px solid var(--draft-color-2);
    color: var(--draft-color);
    width: 100%;
    border-radius: 8px;

    padding: 12px 4px;
    font-size: 1.1rem;
    outline: none;
    max-width: 500px;
    min-width: 500px;
    max-height: 200px;
  }

  button {
    padding: 8px 12px;
    border: none;
    margin: 4px;
    cursor: pointer;
    font-weight: medium;
    background-color: transparent;
    outline: none;
    &:hover {
      opacity: 0.8;
    }
  }

  #submit {
    color: #00ca60;
    border-bottom: 1px solid #00ca60;
  }
  #cancel {
    color: #fc7d75;
  }

  #pluginForm {
    display: flex;
    gap: 12px;
  }

  #pluginFileDialog {
    background-color: var(--primary-dark);
    display: flex;
    justify-content: center;
    flex-direction: column;
    line-height: 150%;
    color: var(--draft-color-2);

    padding: 16px;

    input {
      display: none;
    }

    button {
      color: #f2f2f2;
    }
  }
`;

export default function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(true);
  const [plugin, setPlugin] = useState<Plugin | undefined>({
    canEdit: true,
  });

  const handleDialog = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const handlePluginForm = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPlugin((prevPlugin) => ({
      ...prevPlugin,
      [event.target.name]: event.target.value,
    }));
  };

  const fileDialogRef = useRef<any>();

  const handleFileDialog = (e: SyntheticEvent) => {
    e.preventDefault();
    fileDialogRef.current.click();
  };

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
            <button onClick={handleDialog}>+ Novo plugin</button>
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
      {isOpen && (
        <PluginDialog>
          <div>
            <section>
              <h2>Criar novo plugin</h2>
              <p>Adicione as informações necessárias</p>
              <div id="pluginForm">
                <form>
                  <FormWrapper>
                    <FontAwesomeIcon icon={faFont} />
                    <input
                      type="text"
                      placeholder="Nome do Plugin"
                      required
                      name="name"
                      onChange={handlePluginForm}
                    />
                  </FormWrapper>
                  <FormWrapper>
                    <FontAwesomeIcon icon={faCoins} />
                    <input
                      type="number"
                      placeholder="Preço do Plugin (centavos)"
                      step={5}
                      required
                      name="price"
                      onChange={handlePluginForm}
                    />
                  </FormWrapper>
                  <FormWrapper>
                    <FontAwesomeIcon icon={faImage} />
                    <input
                      type="url"
                      placeholder="Icone do Plugin"
                      required
                      name="icon"
                      onChange={handlePluginForm}
                    />
                  </FormWrapper>
                  <FormWrapper>
                    <FontAwesomeIcon icon={faTag} />
                    <input
                      type="text"
                      placeholder="Tag do Plugin"
                      required
                      name="tag"
                      onChange={handlePluginForm}
                    />
                  </FormWrapper>
                  <div>
                    <label htmlFor="description">Descrição</label>
                    <textarea
                      id="description"
                      cols={10}
                      name="description"
                      onChange={handlePluginForm}
                    >
                      {" "}
                    </textarea>
                  </div>
                  <div>
                    <button id="submit">Concluir</button>
                    <button id="cancel" onClick={handleDialog}>
                      Cancelar
                    </button>
                  </div>
                </form>
                <div id="pluginFileDialog">
                  <input
                    type="file"
                    name="plugin"
                    id="plugin"
                    ref={fileDialogRef}
                  />
                  <FontAwesomeIcon icon={faCloudArrowDown} size="10x" />
                  <h3>Solte o arquivo do plugin</h3>
                  <p>ou</p>
                  <button onClick={handleFileDialog}>
                    Escolher um arquivo
                  </button>
                </div>
              </div>
            </section>
            <section>
              <PluginCard plugin={plugin} />
            </section>
          </div>
        </PluginDialog>
      )}
    </DashboardContainer>
  );
}
