"use client";

import Image from "next/image";
import { Checkbox, Link } from "@nextui-org/react";
import { cadastroEquipe } from "@/constants";
import { CustomButton } from "@/components";

const CadastroEquipe = () => {
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
          <div className="flex flex-col justify-center text-start items-start w-full pb-5 gap-4">
            <div className="flex flex-row justify-between w-full">
              <p className="text-2xl btn-text-navy font-bold mt-5 text-start">
                Equipe
              </p>
              <div className="flex flex-row gap-3">
                {" "}
                <label className="">
                  <input
                    type="search"
                    className="search-box-cadastro-equipe md:mt-0 mt-5"
                    placeholder="Quem você procura?"
                  />
                </label>
                <button className="btn-cadastro-equipe">
                  <Image src="/Plus.svg" alt="" width={18} height={18} />
                  Adicionar membro
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full gap-3">
              {cadastroEquipe.map((equipe) => (
                <div className="flex flex-row justify-between items-center container-cadastro-equipe px-5">
                  <div className="flex flex-row items-center justify-center">
                    <Image
                      src={equipe.foto}
                      alt="perfil"
                      width={89}
                      height={89}
                    />
                    <div className="flex flex-col text-base">
                      <h1 className="btn-text-navy">{equipe.nome}</h1>
                      {equipe.contato.map((contatos) => (
                        <div className="flex flex-row gap-4">
                          <div className="flex flex-row gap-1">
                            {" "}
                            <p className="mt-1 text-gray-600 text-sm">
                              {contatos.email}
                            </p>
                            <Link href="#">
                              <Image
                                src="/Copy.svg"
                                alt="copy"
                                width={16}
                                height={16}
                              />
                            </Link>
                          </div>
                          <div className="flex flex-row gap-1">
                            {" "}
                            <p className="mt-1 text-gray-600 text-sm">
                              {contatos.numero}
                            </p>
                            <Link href="#">
                              <Image
                                src="/Copy.svg"
                                alt="copy"
                                width={16}
                                height={16}
                              />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <Link href="#">
                      <div className="container-cadastro-equipe__buttons">
                        <Image
                          src="/Trash.svg"
                          alt="trash"
                          width={16}
                          height={16}
                        />
                      </div>
                    </Link>
                    <Link href="#">
                      <div className="container-cadastro-equipe__buttons">
                        <Image
                          src="/PencilSimpleLine.svg"
                          alt="trash"
                          width={16}
                          height={16}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CadastroEquipe;
