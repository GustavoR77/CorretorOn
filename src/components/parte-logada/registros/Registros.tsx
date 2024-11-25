"use client";

import Image from "next/image";
import { Checkbox, Link } from "@nextui-org/react";
import { registros, registrosLista } from "@/constants";

const Registros = () => {
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
          <div className="flex flex-col justify-start items-start w-full">
            <label className="">
              <select
                id="mes"
                name="mes"
                className="select-box-empreendimentos"
              >
                <option value="">Este mês</option>
                <option value="empreendimento1">Janeiro</option>
                <option value="empreendimento2">Fevereiro</option>
                <option value="mercedes">Março</option>
                <option value="audi">Abril</option>
              </select>
            </label>
          </div>
          <div className="flex flex-row justify-between w-full">
            {registros.map((dados) => (
              <div className="flex flex-col registros__container p-4 gap-5">
                <div className="flex flex-row items-center gap-2">
                  <div className="registros__container__icon">
                    <Image src={dados.icon} alt="user" width={14} height={14} />{" "}
                  </div>
                  <p className="text-gray-500 text-xs">{dados.title}</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="btn-text-navy text-4xl font-bold leading-10">
                    {dados.qty}
                  </p>
                  <div className="flex flex-row justify-center items-center gap-1">
                    <p
                      className={`${
                        dados.porcentagem < 0
                          ? "text-red-500"
                          : "text-green-500"
                      } mt-1 text-xs`}
                    >
                      {dados.porcentagem < 0
                        ? dados.porcentagem
                        : "+" + dados.porcentagem}
                      %
                    </p>
                    <Image
                      src={
                        dados.porcentagem < 0
                          ? "/ArrowDownLeft.svg"
                          : "/ArrowUpRight.svg"
                      }
                      alt="arrow"
                      width={14}
                      height={14}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex md:flex-row flex-col justify-between w-full pt-10">
            <div className="flex md:flex-row flex-col gap-5">
              <label className="label__date">
                <input
                  type="text"
                  name="date"
                  className="registros__input"
                  placeholder="Data inicial"
                />
              </label>
              <label className="label__date">
                <input
                  type="text"
                  name="date"
                  className="registros__input"
                  placeholder="Data inicial"
                />
              </label>

              <label className="">
                <select
                  id="empreendimento"
                  name="empreendimento"
                  className="select-box-empreendimentos"
                >
                  <option value="">Empreendimento</option>
                  <option value="empreendimento1">Empreendimento 1</option>
                  <option value="empreendimento2">Empreendimento 2</option>
                  <option value="empreendimento3">Empreendimento 3</option>
                  <option value="empreendimento4">Empreendimento 4</option>
                </select>
              </label>
              <label className="">
                <select
                  id="atividade"
                  name="atividade"
                  className="select-box-empreendimentos"
                >
                  <option value="">Atividade</option>
                  <option value="atividade1">Atividade 1</option>
                  <option value="atividade2">Atividade 2</option>
                  <option value="atividade3">Atividade 3</option>
                  <option value="atividade4">Atividade 4</option>
                </select>
              </label>
              <label className="">
                <input
                  type="search"
                  className="registros__input"
                  placeholder="Cliente"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex flex-row w-full gap-10 justify-start items-center font-semibold px-10 py-2 btn-text-navy text-sm text-start">
              <p className="w-28">Data</p>
              <p className="w-28">Atividade</p>
              <p className="w-48">Cliente</p>
              <p className="w-48">Empreendimento</p>
              <p className="w-max">Status de Venda</p>
            </div>
            {registrosLista.map((lista) => (
              <div className="flex flex-row w-full gap-10 justify-start items-center container-items mb-5 px-10 py-5 text-gray-600 text-base text-start">
                <p className="w-28">{lista.data}</p>
                <p className="w-28">{lista.atividade}</p>
                <p className="w-48">{lista.cliente}</p>
                <p className="w-48">{lista.empreendimento}</p>
                <div
                  className={`${
                    lista.status === "Concluída"
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-gray-600"
                  } w-max text-center mr-10 text-xs rounded p-1`}
                >
                  {lista.status}
                </div>
                <Link href={lista.link}>
                  <div className="btn-text-navy font-semibold w-max justify-center items-center">
                    Acessar Registro
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Registros;
