"use client";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../../public/res/images/galaxy-logo.png";

import {
  faEnvelope,
  faLock,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { log } from "console";
import { ContentContainer } from "@/app/components/ContentContainer";
import FormComponent, {
  FormHeader,
  FormWrapper,
  Separator,
} from "@/app/components/FormContainer";
import PasswordInput from "@/app/components/PasswordInput";

export default function LoginPage() {
  return (
    <ContentContainer>
      <FormComponent>
        <FormHeader>
          <Image src={logo} alt="Logo" />
          <h1>Galaxy Store</h1>
          <p>Seja bem-vindo, efetue o seu login</p>
        </FormHeader>
        <form action="#">
          <FormWrapper>
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="text" placeholder="Nome de usuário ou email" />
          </FormWrapper>
          <FormWrapper>
            <FontAwesomeIcon icon={faLock} />
            <PasswordInput />
          </FormWrapper>
          <div>
            <Link href="/esqueci-a-senha">Esqueci minha senha</Link>
          </div>
          <div>
            <div>
              <button type="submit">Fazer Login</button>
            </div>
            <Separator></Separator>
            <div>
              <p>
                Não possuo conta, quero{" "}
                <Link href="/register">criar uma conta</Link>
              </p>
            </div>
          </div>
        </form>
      </FormComponent>
    </ContentContainer>
  );
}
