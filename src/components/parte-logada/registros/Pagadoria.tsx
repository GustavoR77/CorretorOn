import Image from "next/image";
import { Checkbox, Link } from "@nextui-org/react";
import { pagadoria } from "@/constants";
import { EmpreendimentosEspelhoTabelas, Gerente } from "@/components";

const Pagadoria = () => {
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
            <div className="flex flex-row w-full justify-between">
              <h1 className="text-2xl btn-text-navy font-bold md:mt-0 mt-2">
                Pagadoria
              </h1>
              <div className="flex flex-row gap-2">
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
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center">
            <div className="flex flex-row w-full gap-10 justify-between items-center font-semibold px-10 py-2 btn-text-navy text-sm text-start">
              <div className="flex flex-row gap-20">
                <p className="w-28">Data da venda</p>
                <p className="w-48">Cliente</p>
                <p className="w-48">Empreendimento</p>
              </div>
              <div className="btn-text-navy font-semibold w-max justify-center items-center">
                Valor a se receber
              </div>
            </div>
            {pagadoria.map((lista) => (
              <div className="flex flex-row w-full gap-10 justify-between items-center container-items mb-5 pl-10 pr-5 py-5 text-gray-600 text-base text-start">
                <div className="flex flex-row gap-20">
                  <p className="w-28">{lista.data}</p>
                  <p className="w-48">{lista.cliente}</p>
                  <p className="w-48">{lista.empreendimento}</p>
                </div>
                <div className="btn-text-navy font-semibold w-max justify-center items-center">
                  R$&nbsp;{lista.valor}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row mt-5">
            <Gerente />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagadoria;
