import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormWrapper } from "../plugin/FormContainer";
import {
  faCoins,
  faFont,
  faImage,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { Plugin } from "@/types/FilterTypes";

interface BuilderFormProps {
  setDialogOpen: any;
  setPlugin: (plugin: any) => void;
  setFile: (file: File | null) => void;
  plugin?: Plugin | any;
  file?: File | null;
}

export default function PluginBuilderForm({
  setDialogOpen,
  setPlugin,
  setFile,
  plugin,
  file,
}: BuilderFormProps) {
  const handleDialog = (e: React.SyntheticEvent) => {
    setDialogOpen((prev: boolean) => !prev);
    setPlugin({
      canEdit: true,
    });
    setFile(null);
  };

  const handlePluginForm = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPlugin((prevPlugin: Plugin) => ({
      ...prevPlugin,
      [event.target.name]: event.target.value,
    }));
  };

  const validatePlugin = () => {
    return plugin?.name && plugin.price && plugin.tag && file;
  };

  return (
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
        {validatePlugin() && <button id="submit">Enviar</button>}
        <button id="cancel" onClick={handleDialog} type="reset">
          Cancelar
        </button>
      </div>
    </form>
  );
}
