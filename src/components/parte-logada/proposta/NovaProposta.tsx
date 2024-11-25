"use client";

import Image from "next/image";
import { Checkbox, Link } from "@nextui-org/react";
import { tutoriais } from "@/constants";
import { CustomButton } from "@/components";

const NovaProposta = () => {
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
            <p className="text-2xl btn-text-navy font-bold mt-5 text-start">
              Nova proposta
            </p>

            <div className="flex flex-col w-full justify-start items-start gap-5 pt-2">
              <div className="w-full">
                <form className="flex flex-wrap justify-between md:items-start items-center w-full">
                  <label className="label__name">
                    <input
                      type="text"
                      name="name"
                      className="nova-proposta-nome__input"
                      placeholder="Nome completo"
                    />
                  </label>
                  <div className="flex flex-row gap-10 w-full">
                    <label className="label__cnpj-cpf">
                      <input
                        type="text"
                        name="rg"
                        className="nova-proposta-linha2__input"
                        placeholder="RG"
                      />
                    </label>
                    <label className="label__cnpj-cpf">
                      <input
                        type="text"
                        name="cnpj-cpf"
                        className="nova-proposta-linha2__input"
                        placeholder="CPF"
                      />
                    </label>
                    <label className="label__nacionalidade">
                      <input
                        type="text"
                        name="nacionalidade"
                        className="nova-proposta-linha2__input"
                        placeholder="Nacionalidade"
                      />
                    </label>
                    <label className="label__estado-civil">
                      <input
                        type="text"
                        name="estado-civil"
                        className="nova-proposta-linha2__input"
                        placeholder="Estado civil"
                      />
                    </label>
                  </div>
                  <div className="flex flex-row gap-10 w-full">
                    <label className="label__telefone">
                      <input
                        type="text"
                        name="telefone"
                        className="nova-proposta-linha2__input"
                        placeholder="Telefone 1"
                      />
                    </label>
                    <label className="label__telefone">
                      <input
                        type="text"
                        name="telefone2"
                        className="nova-proposta-linha2__input"
                        placeholder="Telefone 2 (Opcional)"
                      />
                    </label>
                    <label className="label__email">
                      <input
                        type="text"
                        name="email"
                        className="nova-proposta-linha3__input"
                        placeholder="Email"
                      />
                    </label>
                  </div>
                  <label className="label__endereco">
                    <input
                      type="text"
                      name="endereco"
                      className="nova-proposta-endereco__input"
                      placeholder="Endereço"
                    />
                  </label>
                  <label className="label__imovel">
                    <input
                      type="text"
                      name="endereco"
                      className="nova-proposta-endereco__input"
                      placeholder="Imóvel a ser adquirido"
                    />
                  </label>
                  <div className="flex flex-row gap-10">
                    <label className="label__cnpj-cpf">
                      <input
                        type="text"
                        name="endereco"
                        className="nova-proposta-linha4__input"
                        placeholder="Valor de entrada"
                      />
                    </label>
                    <label className="label__bank">
                      <input
                        type="text"
                        name="endereco"
                        className="nova-proposta-linha4__input"
                        placeholder="Forma de financiamento"
                      />
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-row items-end justify-end w-full gap-3">
              <Link href="">
                <button className="btn-simulador-pryce__cancelar btn-text-navy text-base">
                  Cancelar
                </button>
              </Link>
              <Link href="">
                <button className="btn-simulador-pryce__enviar text-white text-base">
                  Avançar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NovaProposta;
