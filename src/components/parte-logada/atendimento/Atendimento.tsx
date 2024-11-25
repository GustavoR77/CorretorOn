
import Image from "next/image";
import { Checkbox, Link } from "@nextui-org/react";
import { atendimento } from "@/constants";
import { Gerente } from "@/components";

const Atendimento = () => {
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
          <div className="flex flex-row justify-start gap-32">
            <div className="flex flex-col justify-between items-start pb-5 w-2/5 gap-3">
              <h1 className="text-2xl btn-text-navy font-bold md:mt-0 mt-2">
                Entre em Contato 👍
              </h1>
              <p className="text-gray-500 text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <div className="flex flex-col gap-3">
                {atendimento.map((atend, i) => (
                  <div className="flex flex-col bg-atendimento-container justify-start items-start text-gray-700 py-8 pl-5 pr-8" key={i}>
                    <h1 className="btn-text-navy text-base font-semibold">
                      {atend.title}
                    </h1>
                    <div className="flex flex-row justify-between w-full">
                      <div className="flex flex-col gap-2">
                        {atend.contato.map((contatos) => (
                          <div className="flex flex-row gap-3">
                            <Image
                              src={atend.logo}
                              alt={atend.title}
                              width={32}
                              height={32}
                            />
                            <p className="text-lg mt-1">{contatos.numero}</p>
                          </div>
                        ))}
                      </div>
                      <div
                        className={`${
                          atend.mensagem === "sim"
                            ? "bg-atendimento-enviar"
                            : "hidden"
                        }`}
                      >
                        Enviar mensagem
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between items-start pb-5">
              <div className="w-full">
                <form className="flex flex-col justify-center md:items-start items-center w-full">
                  <label className="label__name">
                    <input
                      type="text"
                      name="name"
                      className="atendimento__input"
                      placeholder="Nome completo"
                    />
                  </label>
                  <label className="label__email">
                    <input
                      type="email"
                      name="email"
                      className="atendimento__input"
                      placeholder="E-mail"
                    />
                  </label>
                  <label className="label__cnpj-cpf">
                    <input
                      type="text"
                      name="cnpj-cpf"
                      className="atendimento__input"
                      placeholder="CNPJ ou CPF"
                    />
                  </label>
                  <label className="label__creci">
                    <input
                      type="text"
                      name="creci"
                      className="atendimento__input"
                      placeholder="Creci"
                    />
                  </label>
                  <label className="label__password">
                    <input
                      type="password"
                      name="password"
                      className="atendimento__input"
                      placeholder="Senha"
                    />
                  </label>
                  <div className="flex flex-row md:justify-start justify-center items-start w-full pt-3 gap-3">
                    <input
                      className=""
                      type="checkbox"
                      id="termos"
                      name="termos"
                      value="termos-de-uso"
                      checked={false}
                    />

                    <label className="-mt-1 text-start text-gray-700">
                      Ao informar meus dados, estou ciente das diretrizes da
                      Política de Privacidade
                    </label>
                  </div>
                  <div className="flex w-full justify-end">
                    <button
                      type="submit"
                      className="atendimento__submit text-white text-sm gap-3 hover:bg-blue-950 mt-5 mr-8"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-row pt-2 w-full">
            <Gerente />
          </div>
        </div>
      </div>
    </>
  );
};

export default Atendimento;
