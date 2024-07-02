"use client";
import { useFilter } from "@/app/hooks/useFilter";
import {
  faChessKnight,
  faCoins,
  faCube,
  faGear,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const PluginFilter = styled.div<{ selected: boolean }>`
  width: 100%;
  padding: 16px 8px;
  margin-top: 8px;
  background-color: ${(props) =>
    props.selected ? "var(--draft-color-2)" : "var(--secondary-dark)"};
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.2s;
  &:hover {
    background-color: var(--draft-color);
  }

  svg {
    font-size: 1.5rem;
  }
`;

const FilterContainer = styled.div`
  width: 100%;
`;

export function PluginFilters() {
  const { filterTag, updateFilterTag } = useFilter();

  return (
    <FilterContainer>
      <PluginFilter
        selected={filterTag === 0}
        onClick={() => updateFilterTag(0)}
      >
        <FontAwesomeIcon icon={faCube} />
        <p>Geral</p>
      </PluginFilter>
      <PluginFilter
        selected={filterTag === 1}
        onClick={() => updateFilterTag(1)}
      >
        <FontAwesomeIcon icon={faCoins} />
        <p>Economia</p>
      </PluginFilter>
      <PluginFilter
        selected={filterTag === 2}
        onClick={() => updateFilterTag(2)}
      >
        <FontAwesomeIcon icon={faGear} />
        <p>Mecânica</p>
      </PluginFilter>
      <PluginFilter
        selected={filterTag === 3}
        onClick={() => updateFilterTag(3)}
      >
        <FontAwesomeIcon icon={faChessKnight} />
        <p>Factions</p>
      </PluginFilter>
      <PluginFilter
        selected={filterTag === 4}
        onClick={() => updateFilterTag(4)}
      >
        <FontAwesomeIcon icon={faTag} />
        <p>Opcionais</p>
      </PluginFilter>
    </FilterContainer>
  );
}
