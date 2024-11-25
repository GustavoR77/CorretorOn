"use client";

import Image from "next/image";
import { Checkbox, Link } from "@nextui-org/react";
import { tutoriais } from "@/constants";
import { CustomButton } from "@/components";

const CadastroImobiliaria = () => {
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
          <div className="flex flex-col justify-center text-start items-start w-4/5 pb-5 gap-4">
            <p className="text-2xl btn-text-navy font-bold mt-5 text-start">
              Como cadastrar sua imobiliária
            </p>
            <p className="text-base text-gray-600 leading-8">
              Suspendisse euismod gravida quam, vel aliquam risus. Vivamus
              dapibus placerat blandit. Aenean interdum congue augue, nec semper
              orci consequat ac. Orci varius natoque penatibus et magnis dis
              parturient montes.
            </p>
            <p className="text-base btn-text-navy font-semibold mt-5 text-start">
              Lorem ipsum dolor sit amet
            </p>
            <p className="text-base text-gray-600 leading-8">
              Suspendisse euismod gravida quam, vel aliquam risus. Vivamus
              dapibus placerat blandit. Aenean interdum congue augue, nec semper
              orci consequat ac. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Sed malesuada ac sapien
              sit amet iaculis.
            </p>
            <div className="flex flex-col w-full justify-center items-center">
              <div className="relative">
                <Image
                  src="/linha-pontilhada.svg"
                  alt=""
                  width={735}
                  height={0}
                  className="line-overlay"
                />
              </div>
              <div className="flex flex-row justify-between pt-5">
                <div className="flex flex-col w-1/4 justify-center items-center gap-2">
                  <div className="bg-cadastro-imobiliaria rounded-full flex justify-center items-center">
                    <Image
                      src="/Buildings.svg"
                      alt="Buildings"
                      width={36}
                      height={36}
                    />
                  </div>
                  <h1 className="text-center btn-text-navy text-base">
                    Lorem ipsum
                  </h1>
                  <p className="text-center text-sm text-gray-600 leading-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac.
                  </p>
                </div>
                <div className="flex flex-col w-1/4 justify-center items-center gap-2">
                  <div className="bg-cadastro-imobiliaria rounded-full flex justify-center items-center">
                    <Image
                      src="/HouseLine.svg"
                      alt="Buildings"
                      width={36}
                      height={36}
                    />
                  </div>
                  <h1 className="text-center btn-text-navy text-base">
                    Lorem ipsum
                  </h1>
                  <p className="text-center text-sm text-gray-600 leading-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac.
                  </p>
                </div>
                <div className="flex flex-col w-1/4 justify-center items-center gap-2">
                  <div className="bg-cadastro-imobiliaria rounded-full flex justify-center items-center">
                    <Image
                      src="/MagicWand.svg"
                      alt="Buildings"
                      width={36}
                      height={36}
                    />
                  </div>
                  <h1 className="text-center btn-text-navy text-base">
                    Lorem ipsum
                  </h1>
                  <p className="text-center text-sm text-gray-600 leading-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full justify-start items-start gap-5">
              <p className="text-base btn-text-navy font-semibold mt-5 text-start">
                Cadastrar imobiliária
              </p>
              <div className="w-full">
                <form className="flex flex-wrap justify-between md:items-start items-center w-full">
                  <label className="label__name">
                    <input
                      type="text"
                      name="name"
                      className="cadastro-imobiliaria__input"
                      placeholder="Nome da imobiliária"
                    />
                  </label>
                  <label className="label__email">
                    <input
                      type="email"
                      name="email"
                      className="cadastro-imobiliaria__input"
                      placeholder="E-mail"
                    />
                  </label>
                  <label className="label__cnpj-cpf">
                    <input
                      type="text"
                      name="cnpj-cpf"
                      className="cadastro-imobiliaria__input"
                      placeholder="CNPJ ou CPF"
                    />
                  </label>
                  <label className="label__creci">
                    <input
                      type="text"
                      name="creci"
                      className="cadastro-imobiliaria__input"
                      placeholder="Creci"
                    />
                  </label>
                  <label className="label__lorem">
                    <input
                      type="text"
                      name="lorem"
                      className="cadastro-imobiliaria__input"
                      placeholder="lorem"
                    />
                  </label>
                  <label className="label__lorem">
                    <input
                      type="text"
                      name="lorem"
                      className="cadastro-imobiliaria__input"
                      placeholder="lorem"
                    />
                  </label>
                  <div className="flex flex-col w-full justify-start items-start gap-5">
                    <p className="text-base btn-text-navy font-semibold mt-5 text-start">
                      Enviar arquivos
                    </p>
                    <div className="flex flex-col cadastro-container-dashed justify-center items-center gap-5">
                      <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                          src="/Upload.svg"
                          alt="upload"
                          width={20}
                          height={20}
                        />
                        <p className="btn-text-navy text-sm">
                          Arraste e solte os arquivos aqui
                        </p>
                      </div>
                      <CustomButton
                        title="Procurar no computador"
                        containerStyles="cadastro-container-dashed__button font-semibold btn-text-navy text-xs"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-row items-end justify-end w-full gap-3">
              <Link href="">
                <button className="btn-cadastro-imobiliaria-enviar text-white text-base">
                  <Image
                    src="/PaperPlaneTilt.svg"
                    alt="enviar"
                    width={24}
                    height={24}
                  />
                  Enviar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CadastroImobiliaria;
