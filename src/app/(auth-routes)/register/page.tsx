"use client";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../../public/res/images/galaxy-logo.png";

import {
  faEnvelope,
  faLock,
  faMailBulk,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { ContentContainer } from "@/components/ContentContainer";
import FormComponent, {
  FormHeader,
  FormWrapper,
  Separator,
} from "@/components/plugin/FormContainer";
import PasswordInput from "@/components/PasswordInput";

export default function LoginPage() {
  return (
    <ContentContainer>
      <FormComponent>
        <FormHeader>
          <Image src={logo} alt="Logo" />
          <h1>Galaxy Store</h1>
          <p>Olá! é bom ter você aqui</p>
        </FormHeader>
        <form action="#">
          <FormWrapper>
            <FontAwesomeIcon icon={faUser} />
            <input type="text" placeholder="Seu usuário" />
          </FormWrapper>
          <FormWrapper>
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="text" placeholder="Seu email" />
          </FormWrapper>
          <FormWrapper>
            <FontAwesomeIcon icon={faLock} />
            <PasswordInput />
          </FormWrapper>
          <FormWrapper>
            <FontAwesomeIcon icon={faLock} />
            <input type="password" placeholder="Repita sua senha" />
          </FormWrapper>
          <FormWrapper>
            <label htmlFor="terms">
              Ao criar sua conta você declara que leu e aceitou os {""}
              <Link href="/termos" target="_blank">
                termos e condições.
              </Link>
            </label>
          </FormWrapper>

          <div>
            <div>
              <button type="submit">Criar minha conta</button>
            </div>
            <Separator></Separator>
            <div>
              <p>
                Já possuo conta, quero{" "}
                <Link href="/login">entrar em minha conta</Link>
              </p>
            </div>
          </div>
        </form>
      </FormComponent>
    </ContentContainer>
  );
}
