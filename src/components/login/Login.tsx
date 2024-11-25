"use client";

import Image from "next/image";
import CustomButton from "../CustomButton";
import { Checkbox, Link } from "@nextui-org/react";
import { InputText } from "primereact/inputtext";
import { FormEvent, useContext, useState } from "react";
import AuthResource from "@/resources/auth";
import useFormError from "@/hooks/FormError";
import { useRouter, useSearchParams } from "next/navigation";
import _ from "lodash";
import { AuthContext } from "@/providers/AuthProvider";
import LoadingModal from "../loading/LoadingModal";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const formError = useFormError();
  const router = useRouter();
  const searchParams = useSearchParams();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);

    AuthResource.login(formData)
      .then((data) => {
        setUser(_.get(data, "user"));
        router.push(searchParams?.get("intended") || "/area-de-trabalho");
      })
      .catch((error) => {
        formError.showErrors(error.response?.data ?? error.response);
        setLoading(false);
      });
  }

  return (
    <>
      <div className="flex flex-wrap md:flex-row flex-col justify-center md:mb-32 mb-10 pt-28 md:px-5 gap-20">
        <div className="flex flex-col padding-y padding-x md:p-0 lg:w-5/12 md:w-11/12 w-full text-center lg:text-left gap-2 md:ml-14">
          {/* <div className="md:mb-5">
            <p className="text-sm text-gray-400 md:text-left text-center">
              Primeiro nível
              &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp; Segundo
              nível
            </p>
          </div> */}
          <h1 className="lg:text-4xl md:text-3xl text-2xl btn-text-navy font-bold md:mt-0 mt-2">
            Olá, bem-vindo de volta 👋
          </h1>
          <p className="text-sm text-gray-700 leading-7 md:w-11/12 md:mt-5 mt-2">
            Tenha acesso exclusivo aos melhores e mais requisitados
            empreendimentos imobiliários do país, com uma ampla seleção de
            propriedades de alta qualidade para atender às suas necessidades.
          </p>
          <div className="text-start flex flex-col justify-center items-center w-full">
            <div className="flex flex-row lg:justify-start justify-center items-center gap-5 mt-3">
              <div className="bg-homepotencialize rounded-full md:w-12 w-20 h-12 flex justify-center items-center">
                <Image
                  src="/ChatText.png"
                  alt="ChatText"
                  width={26}
                  height={26}
                />
              </div>
              <p className="text-sm text-gray-500 leading-7 lg:w-9/12 md:w-8/12">
                Monte sua equipe e trabalhe de maneira colaborativa para
                aumentar os seus ganhos e o do seu time.
              </p>
            </div>
            <div className="flex flex-row lg:justify-start justify-center items-center gap-5 mt-3">
              <div className="bg-homepotencialize rounded-full md:w-12 w-20 h-12 flex justify-center items-center">
                <Image
                  src="/ChatText.png"
                  alt="ChatText"
                  width={26}
                  height={26}
                />
              </div>
              <p className="text-sm text-gray-500 leading-7 lg:w-9/12 md:w-8/12">
                Agende visitas e encante o seu cliente com a realidade
                surpreendente de se viver em um Helbor.
              </p>
            </div>
            <div className="flex flex-row lg:justify-start justify-center items-center gap-5 mt-3">
              <div className="bg-homepotencialize rounded-full md:w-12 w-20 h-12 flex justify-center items-center">
                <Image
                  src="/ChatText.png"
                  alt="ChatText"
                  width={26}
                  height={26}
                />
              </div>
              <p className="text-sm text-gray-500 leading-7 lg:w-9/12 md:w-8/12">
                Acesse os empreendimentos Helbor e entenda todas as
                especificações dos produtos que você vai vender.
              </p>
            </div>
          </div>
          <div className="cadastro__shadow md:w-11/12 p-5 mt-10 relative">
            <Image
              src="/aspas.svg"
              alt="aspas"
              width={38}
              height={28}
              className="image-overlay-cadastro"
            />
            <p className="btn-text-navy pt-2">
              CorretorOn revolucionou minha carreira. Acesso a imóveis, agenda
              compartilhada e relatórios impulsionaram minha produtividade.
              Sucesso garantido!
            </p>
            <div className="flex flex-col gap-1 pt-5">
              <p className="btn-text-navy">Pedro Oliveira</p>
              <p className="text-sm text-gray-500">Corretor, ABC imob</p>
            </div>
          </div>
        </div>

        <div className="flex md:px-0 flex-col md:padding-y justify-center items-center gap-4 lg:w-5/12 md:w-11/12 w-full">
          <div className="md:w-full w-10/11 lg:pt-7 md:px-0 px-3 text-center lg:text-left flex flex-col justify-center lg:items-start items-center">
            <p className="text-2xl btn-text-navy font-medium">Login</p>
            <p className="text-lg text-gray-500 md:w-3/4">
              O portal de entrada para o seu sucesso imobiliário! Faça login
              para continuar
            </p>
          </div>
          <div className="w-full">
            <form
              className="flex flex-col justify-center lg:items-start items-center w-full"
              onSubmit={onSubmit}
            >
              {formError.ErrorMessage("email")}
              <label className="label__email">
                <InputText
                  type="email"
                  name="email"
                  className="cadastro__input cadastro__input__mobile"
                  placeholder="E-mail"
                />
              </label>

              {formError.ErrorMessage("password")}
              <label className="label__password">
                <InputText
                  type="password"
                  name="password"
                  className="cadastro__input cadastro__input__mobile"
                  placeholder="Senha"
                />
              </label>

              <Link href="/login/esqueci-senha">
                <p className="text-sm text-gray-700 mb-5">Esqueci a senha</p>
              </Link>
              <button
                type="submit"
                className="cadastro__submit text-white text-sm gap-3 hover:bg-blue-950"
              >
                Login
              </button>
            </form>
          </div>
          <div className="flex justify-center items-center pt-16">
            <p className="text-gray-500">
              Não tem uma conta?{" "}
              <Link href="/cadastro" className="btn-text-navy">
                Cadastrar
              </Link>
            </p>
          </div>
        </div>
      </div>
      <LoadingModal visible={loading} />
    </>
  );
};

export default Login;
