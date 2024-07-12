"use client";
import styled from "styled-components";
import { ContentContainer } from "../../components/ContentContainer";

import PluginInfoModal from "../../components/modal/PluginInfoModal";
import { PluginSearchWIcon } from "../../components/plugin/PluginSearchWIcon";
import { PluginFilters } from "../../components/plugin/PluginFilters";
import PluginCard from "../../components/plugin/PluginCard";
import { useQuery } from "@tanstack/react-query";
import { FilterType, Plugin } from "@/types/FilterTypes";
import { use, useEffect, useState } from "react";
import { useFilter } from "@/hooks/useFilter";

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

const fetchPlugins = async () => {
  const response = await fetch(`${process.env.API_URL}/plugins`, {
    method: "POST",
  });
  const json = await response.json();
  return json;
};

export default function PluginsHome() {
  const query = useQuery({ queryKey: ["plugins"], queryFn: fetchPlugins });

  const { filterTag, filterName } = useFilter();

  const [plugins, setPlugins] = useState<Plugin[]>();
  useEffect(() => {
    if (filterTag !== 0) {
      let items = plugins;
      let tag = FilterType[filterTag];
      let filteredItems = items?.filter(
        (item) => item.category?.toLocaleLowerCase() === tag.toLocaleLowerCase()
      );
      setPlugins(filteredItems);
    } else {
      setPlugins(query.data);
    }

    if (filterName) {
      setPlugins((prev) =>
        prev?.filter((plugin) =>
          plugin?.name
            ?.toLocaleLowerCase()
            .includes(filterName?.toLocaleLowerCase())
        )
      );
    }
  }, [query.data, filterTag, filterName]);

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
            {plugins?.map((plugin: Plugin) => (
              <PluginCard key={plugin._id} plugin={plugin} />
            ))}{" "}
          </PluginsSection>
        </div>
      </PluginSection>
    </ContentContainer>
  );
}
