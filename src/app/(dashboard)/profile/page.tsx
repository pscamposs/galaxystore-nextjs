"use client";

import ClientCardComponent from "@/components/ClientRanking";
import Loader from "@/components/Loader";
import Logout from "@/components/LogoutButton";
import PluginCard from "@/components/plugin/PluginCard";
import Plugins from "@/components/plugin/Plugins";
import { centsToReal } from "@/utils/FormatUtils";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PluginContainer = styled.div`
  display: flex;
  padding: 2rem;
  gap: 12px;
  border-radius: 4rem;
  white-space: nowrap;
  overflow-x: auto;
`;

const DashboardContainer = styled.div`
  padding: 0 2rem;

  main {
    display: flex;
    justify-content: center;

    flex-wrap: wrap;
  }
`;
const CardContainer = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  line-height: 200%;
  h3 {
    font-size: 1.6rem;
    font-weight: bold;
  }
  p {
    color: var(--draft-color-2);
    font-size: 1.5rem;
  }
`;

const Panels = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  padding: 2rem 1rem;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const PanelCard = ({ children }: { children: React.ReactNode }) => {
  return <CardContainer>{children}</CardContainer>;
};

const ClientListContainer = styled.div`
  padding: 8px 2rem;
  li {
    list-style: none;
    margin-top: 8px;
  }
`;

export default function UserDashboard() {
  const { data: session } = useSession();

  const fetchPlugins = async () => {
    const response = await fetch(`${process.env.API_URL}/user/plugins`, {
      method: "POST",
      headers: {
        Authorization: `${session?.user.accessToken}`,
      },
    });
    const json = await response.json();
    return json;
  };

  const fetchProfile = async () => {
    const response = await fetch(`${process.env.API_URL}/user/profile`, {
      headers: {
        Authorization: `${session?.user.accessToken}`,
      },
    });
    const json = await response.json();
    return json;
  };

  const query = useQuery({ queryKey: ["plugins"], queryFn: fetchPlugins });
  const queryProfile = useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  });

  const [profile, setProfile] = useState<UserProfile>();

  useEffect(() => {
    if (!queryProfile.data) return;
    setProfile(queryProfile.data.profile);
  }, [queryProfile.data]);

  if (queryProfile.isLoading) {
    return <Loader />;
  }

  return (
    <DashboardContainer>
      <h2>Seja bem vindo {profile?.username}</h2>
      <p>Configure, baixe plugins e solicite ajuda no seu dashboard</p>
      <Logout />
      <Panels>
        <PanelCard>
          <h3>{profile?.plugins.length}</h3>
          <p>Plugins ativos</p>
        </PanelCard>
        <PanelCard>
          <h3>{centsToReal(profile?.totalSpent)}</h3>
          <p>Total gasto</p>
        </PanelCard>
        <PanelCard>
          <h3>{centsToReal(profile?.credits)}</h3>
          <p>Créditos</p>
        </PanelCard>
        <PanelCard>
          <h3>{profile?.tickets}</h3>
          <p>Tickets Abertos</p>
        </PanelCard>
      </Panels>
      <main>
        <PluginContainer>
          <Plugins plugins={query?.data} />
        </PluginContainer>
        <ClientListContainer>
          <h2>Top compradores</h2>

          <ul>
            <li>
              {queryProfile?.data?.clientRanking.map(
                (client: ClientRanking) => {
                  return <ClientCardComponent user={client} key={0} />;
                }
              )}
            </li>
          </ul>
        </ClientListContainer>
      </main>
    </DashboardContainer>
  );
}
