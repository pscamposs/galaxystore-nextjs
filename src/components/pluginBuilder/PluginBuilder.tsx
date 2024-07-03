import { useState } from "react";
import PluginBuilderForm from "./PluginBuilderForm";
import PluginCard from "../plugin/PluginCard";
import { Plugin } from "@/types/FilterTypes";
import styled from "styled-components";
import PluginFileDrag from "./PluginFileDrag";

const PluginDialog = styled.div`
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

export default function PluginBuilder({
  setDialogOpen,
}: {
  setDialogOpen: any;
}) {
  const [plugin, setPlugin] = useState<Plugin | null>({
    canEdit: true,
  });
  const [file, setFile] = useState<File | null>();

  return (
    <PluginDialog>
      <div>
        <section>
          <h2>Criar novo plugin</h2>
          <p>Adicione as informações necessárias</p>
          <div id="pluginForm">
            <PluginBuilderForm
              setDialogOpen={setDialogOpen}
              setPlugin={setPlugin}
              setFile={setFile}
              file={file}
              plugin={plugin}
            />
            <PluginFileDrag setFile={setFile} file={file} />
          </div>
        </section>
        <section>
          <PluginCard plugin={plugin} />
        </section>
      </div>
    </PluginDialog>
  );
}
