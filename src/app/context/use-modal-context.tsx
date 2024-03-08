import { createContext, useState } from "react";

interface ModalContextProps {
  isOpen: boolean;
  tab: string;
  toggleModal: (plugin: any) => void;
  toggleTab: (tab: string) => void;
}

const ModalContext = createContext({} as ModalContextProps);

export default function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [plugin, setPlugin] = useState({});
  const [tab, setTab] = useState("Geral");

  const toggleModal = (plugin: any) => {
    setPlugin(plugin);
    setIsOpen((value) => !value);
  };

  const toggleTab = (tab: string) => {
    setTab(tab);
  };

  return (
    <ModalContext.Provider
      value={{
        tab,
        isOpen,
        toggleModal,
        toggleTab,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export { ModalContext };
