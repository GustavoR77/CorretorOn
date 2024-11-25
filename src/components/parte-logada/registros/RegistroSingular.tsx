"use client";

import Image from "next/image";
import { Checkbox, Link } from "@nextui-org/react";
import { vendaInformada } from "@/constants";
import { CustomButton, Gerente } from "@/components";

const RegistroSingular = () => {
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
          {vendaInformada.map((venda) => (
            <div className="flex flex-col justify-center text-start items-start w-full pb-5 gap-7">
              <div className="flex flex-row gap-2">
                {" "}
                <Image src="/User.svg" alt="user" width={28} height={28} />
                <p className="text-2xl btn-text-navy font-bold mt-1 text-start">
                  {venda.nome}
                </p>
              </div>
              <div className="flex flex-row w-full gap-7">
                <div className="flex flex-col flex-wrap w-4/12 gap-y-5">
                  <div className="flex flex-row w-full">
                    <div className="flex flex-col w-2/4">
                      <div className="flex flex-row gap-2">
                        <Image
                          src="/IdentificationCard.svg"
                          alt="rg"
                          width={22}
                          height={22}
                        />
                        <h1 className="mt-1 btn-text-navy text-sm">RG</h1>
                      </div>
                      <p className="text-lg text-gray-500">{venda.rg}</p>
                    </div>
                    <div className="flex flex-col w-2/4">
                      <div className="flex flex-row gap-2">
                        <Image
                          src="/User.svg"
                          alt="rg"
                          width={22}
                          height={22}
                        />
                        <h1 className="mt-1 btn-text-navy text-sm">
                          Estado Civil
                        </h1>
                      </div>
                      <p className="text-lg text-gray-500">
                        {venda.estadocivil}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row w-full">
                    <div className="flex flex-col w-2/4">
                      <div className="flex flex-row gap-2">
                        <Image
                          src="/IdentificationCard.svg"
                          alt="rg"
                          width={22}
                          height={22}
                        />
                        <h1 className="mt-1 btn-text-navy text-sm">CPF</h1>
                      </div>
                      <p className="text-lg text-gray-500">{venda.cpf}</p>
                    </div>
                    <div className="flex flex-col w-2/4">
                      <div className="flex flex-row gap-2">
                        <Image
                          src="/Flag.svg"
                          alt="rg"
                          width={22}
                          height={22}
                        />
                        <h1 className="mt-1 btn-text-navy text-sm">
                          Nacionalidade
                        </h1>
                      </div>
                      <p className="text-lg text-gray-500">
                        {venda.nacionalidade}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-wrap gap-y-5">
                  <div className="flex flex-col w-full">
                    <div className="flex flex-row gap-2">
                      <Image
                        src="/RoadHorizon.svg"
                        alt="rg"
                        width={22}
                        height={22}
                      />
                      <h1 className="mt-1 btn-text-navy text-sm">Endereço</h1>
                    </div>
                    <p className="text-lg text-gray-500">{venda.endereco}</p>
                  </div>
                </div>
              </div>
              {venda.contato.map((contatos) => (
                <div className="flex flex-col gap-3 informar-venda__hr">
                  <h1 className="btn-text-navy text-lg">
                    Informações de contato
                  </h1>
                  <div className="flex flex-row gap-20">
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-2">
                        <Image
                          src="/PhoneNavy.svg"
                          alt="rg"
                          width={22}
                          height={22}
                        />
                        <h1 className="mt-1 btn-text-navy text-sm">
                          Telefone 01
                        </h1>
                      </div>
                      <p className="text-lg text-gray-500">
                        {contatos.telefone1}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-2">
                        <Image
                          src="/PhoneNavy.svg"
                          alt="rg"
                          width={22}
                          height={22}
                        />
                        <h1 className="mt-1 btn-text-navy text-sm">
                          Telefone 02
                        </h1>
                      </div>
                      <p className="text-lg text-gray-500">
                        {contatos.telefone2}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-2">
                        <Image
                          src="/EnvelopeSimple.svg"
                          alt="rg"
                          width={22}
                          height={22}
                        />
                        <h1 className="mt-1 btn-text-navy text-sm">Email</h1>
                      </div>
                      <p className="text-lg text-gray-500">{contatos.email}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex flex-col pt-10 w-full gap-4">
                <div className="flex flex-row justify-between items-center">
                  <p className="text-2xl btn-text-navy font-bold mt-1 text-start">
                    Linha do Tempo
                  </p>
                  <div className="informar-venda__timeline__concluida text-xs">
                    Venda concluída
                  </div>
                </div>
                {venda.timeline.map((linha) => (
                  <div className="flex flex-col informar-venda__timeline gap-3 mt-4">
                    <div className="flex flex-row gap-10 items-center">
                      <p className="btn-text-navy text-base mt-1">
                        {linha.data}
                      </p>
                      <div
                        className={`${
                          linha.status === "Venda concluída"
                            ? "informar-venda__timeline__concluida "
                            : linha.status === "Proposta"
                            ? "informar-venda__timeline__proposta "
                            : "informar-venda__timeline__vista "
                        }text-xs`}
                      >
                        <p>{linha.status}</p>
                      </div>
                    </div>
                    <div className="flex flex-col text-base text-gray-500">
                      <p>{linha.titulo}</p>
                      <p>{linha.endereco}</p>
                    </div>
                    <Link href={linha.link}>
                      <h1 className="btn-text-navy font-semibold text-base">
                        Ver detalhes
                      </h1>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RegistroSingular;
