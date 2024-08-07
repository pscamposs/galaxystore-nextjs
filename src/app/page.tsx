"use client";

import styled from "styled-components";
import { ContentContainer } from "../components/ContentContainer";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";

const MainContent = styled.div`
  width: 80%;
  margin: 32px auto;
  display: flex;
  align-items: center;
  h2 {
    font-size: 2rem;
  }

  span {
    color: var(--draft-color);
  }

  p {
    color: var(--secondary-white);
    line-height: 150%;
  }
`;

const PosterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: var(--secondary-dark);
  min-height: 250px;
  padding: 8px 32px;
  max-width: 80%;
  margin: 0 auto;
  border-radius: 4px;

  h2 {
    font-size: 2.1rem;
  }

  a {
    display: inline-block;
    text-decoration: none;
    background-color: var(--draft-color-2);
    color: var(--primary-white);
    padding: 8px 4px;
    margin: 8px 4px;
    width: 100px;
    border-radius: 4px;
  }

  p {
    margin: 8px 0;
  }

  @media (max-width: 768px) {
    padding: 16px;
    max-width: 90%;
  }
`;

export default function Home() {
  return (
    <ContentContainer>
      <MainContent>
        <div>
          <h2>
            Os melhores plugins pelos melhores preços,{" "}
            <span>cresça seu servidor com qualidade!</span>
          </h2>
          <p>Nossa equipe conta com o melhores na área!</p>
        </div>
        <div>
          <img src="/res/images/floatinghouse.png" alt="FloatingHouse" />
        </div>
      </MainContent>
      <section>
        <PosterContainer>
          <h2>Conheça nossos plugins</h2>
          <p>Adquira plugins com a melhor qualidade e preço do mercado</p>
          <div>
            <Link href="/plugins">
              <FontAwesomeIcon icon={faShop} /> Loja
            </Link>
          </div>
        </PosterContainer>
      </section>
    </ContentContainer>
  );
}
