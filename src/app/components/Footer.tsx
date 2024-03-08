"use client";

import Link from "next/link";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--secondary-dark);
  padding: 8px 16px;
  width: 80%;
  margin: 0 auto;
  text-align: center;

  color: aliceblue;
  border-radius: 8px;

  p {
    color: var(--secondary-white);
  }

  ul {
    list-style: none;
  }

  ul li {
    display: inline;
    margin-left: 8px;
  }

  ul li a {
    color: var(--primary-white);
    font-weight: 600;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <h4>Copyright © Galaxy Store - 2024</h4>
        <p> Este site não possui quaisquer vinculos com a Mojang AB.</p>
      </div>
      <ul>
        <li>
          <Link href="/termos">Termos de Uso</Link>
        </li>
        <li>
          <Link href="/sobre">Sobre</Link>
        </li>
        <li>
          <Link href="/suporte">Suporte</Link>
        </li>
      </ul>
    </FooterContainer>
  );
}
