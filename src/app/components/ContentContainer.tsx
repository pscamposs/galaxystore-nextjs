"use client";

import styled from "styled-components";
import { FilterProvider } from "../context/use-filter-context";
import ModalContextProvider from "../context/use-modal-context";

const Container = styled.div`
  min-height: calc(100vh - 118px);
  transition: all 0.2s ease-in;
`;

export function ContentContainer({ children }: { children: React.ReactNode }) {
  return (
    <FilterProvider>
      <ModalContextProvider>
        <Container>{children}</Container>
      </ModalContextProvider>
    </FilterProvider>
  );
}
