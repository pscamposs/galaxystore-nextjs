"use client";
import styled from "styled-components";
import { ContentContainer } from "../../components/ContentContainer";

import PluginInfoModal from "../../components/modal/PluginInfoModal";
import { PluginSearchWIcon } from "../../components/plugin/PluginSearchWIcon";
import { PluginFilters } from "../../components/plugin/PluginFilters";
import PluginCard from "../../components/plugin/PluginCard";

const PluginSection = styled.section`
  margin-top: 24px;
  padding: 64px 156px;
  width: 100%;
  > div {
    display: flex;
    flex-direction: row;
    gap: 32px;
  }

  @media (max-width: 768px) {
    > div {
      flex-direction: column;
    }
    padding: 16px;
  }
`;

const PluginsSection = styled.section`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: none;
  }
`;

export default function PluginsHome() {
  return (
    <ContentContainer>
      <PluginInfoModal />
      <PluginSection>
        <h2>Nossos Plugins</h2>
        <div>
          <div>
            <PluginSearchWIcon />
            <PluginFilters />
          </div>
          <PluginsSection>
            <PluginCard />
            <PluginCard />
          </PluginsSection>
        </div>
      </PluginSection>
    </ContentContainer>
  );
}
