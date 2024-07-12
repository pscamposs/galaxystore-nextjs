"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../../public/res/images/galaxy-logo.png";
import { signIn } from "next-auth/react";

import {
  faEnvelope,
  faLock,
  faMailBulk,
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
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    let formData = new FormData(e.target as HTMLFormElement);

    let username = formData.get("username");
    let password = formData.get("password");

    signIn("credentials", {
      redirect: true,
      callbackUrl: "/profile",
      username,
      password,
    });
  };

  return (
    <ContentContainer>
      <FormComponent>
        <FormHeader>
          <Image src={logo} alt="Logo" />
          <h1>Galaxy Store</h1>
          <p>Seja bem-vindo, efetue o seu login</p>
        </FormHeader>
        <form onSubmit={handleLogin}>
          <FormWrapper>
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              type="text"
              placeholder="Nome de usuário ou email"
              name="username"
              required
            />
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
