"use client";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const PluginSearch = styled.input`
  width: 100%;
  border: none;
  background-color: var(--secondary-dark);
  outline: none;
  color: var(--primary-white);
  padding: 8px 32px;
  font-size: 14px;
`;

const PluginSearchComponent = () => {
  return <PluginSearch type="search" placeholder="Procurar plugin..." />;
};

const SearchContainer = styled.div`
  position: relative;
  padding: 8px 0;
  margin: 16px 0;
  svg {
    position: absolute;

    top: 8px;
    background-color: var(--secondary-dark);
    padding: inherit;
  }
`;

export function PluginSearchWIcon() {
  return (
    <SearchContainer>
      <FontAwesomeIcon icon={faSearch} />
      <PluginSearchComponent />
    </SearchContainer>
  );
}
