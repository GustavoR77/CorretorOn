"use client";

import Image from "next/image";
import { Checkbox, Link } from "@nextui-org/react";
import { atendimento } from "@/constants";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";

const EditarPerfil = () => {
  const {user} = useContext(AuthContext);

  return (
    <>
      <div className="flex flex-wrap md:flex-row flex-col justify-center items-center md:mb-32 mb-10 pt-28 md:px-10 gap-20">
        <div className="flex flex-col padding-y padding-x md:p-0 w-11/12 text-center gap-2 items-center">
          <div className="md:mb-5 w-full">
            <p className="text-sm text-gray-400 md:text-left text-center">
              Primeiro nível
              &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp; Segundo
              nível &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp;
              Terceiro nível
            </p>
          </div>
          <div className="flex flex-row justify-start gap-14">
            <div className="flex flex-col justify-start items-start pb-5 w-2/5 gap-5">
              <h1 className="text-2xl btn-text-navy font-bold md:mt-0 mt-2">
                Editar Perfil
              </h1>
              <div className="flex flex-row bg-editar-perfil-container justify-center items-center gap-2">
                <Image
                  src={user?.foto ?? '/User.svg'}
                  alt="profile"
                  width={120}
                  height={120}
                  className="bg-white rounded-full"
                />
                <div className="flex flex-col text-white text-start">
                  <h1 className="text-xl">{user?.name} {user?.sobrenome}</h1>
                  <p className="text-base font-normal text-gray-400">
                    {user?.email}
                  </p>
                </div>
              </div>
              <div className="flex flex-col text-start gap-4 pt-3">
                <h1 className="btn-text-navy font-semibold text-lg">
                  Conheça as nossa políticas de privacidade
                </h1>
                <p className="text-sm text-gray-500 leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                </p>
                <Link href="#">
                  <div className="flex flex-row gap-1">
                    <p className="btn-text-navy font-semibold text-base mt-1">
                      Saiba mais
                    </p>
                    <Image
                      src="/ArrowRight.svg"
                      alt="arrow"
                      width={16}
                      height={16}
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-between items-start pb-5">
              <div className="w-full">
                <h1 className="btn-text-navy font-semibold text-lg text-start">
                  Dados Cadastrados
                </h1>
                <form className="flex flex-col justify-center md:items-start items-center w-full pt-5">
                  <label className="label__name">
                    <input
                      type="text"
                      name="name"
                      className="editar-nome__input"
                      placeholder="Nome completo"
                    />
                  </label>
                  <div className="flex flex-row gap-5">
                    <label className="label__email">
                      <input
                        type="email"
                        name="email"
                        className="editar-email__input"
                        placeholder="E-mail"
                      />
                    </label>
                    <label className="label__cnpj-cpf">
                      <input
                        type="text"
                        name="cnpj-cpf"
                        className="editar-cpf__input"
                        placeholder="CNPJ ou CPF"
                      />
                    </label>
                  </div>
                  <label className="label__creci">
                    <input
                      type="text"
                      name="creci"
                      className="editar-creci__input"
                      placeholder="Creci"
                    />
                  </label>
                  <div className="flex w-full justify-start">
                    <button
                      type="submit"
                      className="editar__submit text-white text-sm gap-3"
                      disabled
                    >
                      Salvar alterações
                    </button>
                  </div>
                </form>
                <form className="flex flex-col justify-center md:items-start items-center w-full pt-5">
                  <h1 className="btn-text-navy font-semibold text-lg text-start mb-5">
                    Alterar senha
                  </h1>
                  <label className="label__password">
                    <input
                      type="password"
                      name="password"
                      className="atendimento__input"
                      placeholder="Senha"
                    />
                  </label>
                  <label className="label__password">
                    <input
                      type="password"
                      name="password"
                      className="atendimento__input"
                      placeholder="Confirmar nova senha"
                    />
                  </label>
                  <div className="flex w-full justify-start">
                    <button
                      type="submit"
                      className="editar__submit text-sm gap-3"
                      disabled
                    >
                      Alterar senha
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditarPerfil;
