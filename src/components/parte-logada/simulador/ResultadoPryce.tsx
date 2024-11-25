import Image from "next/image";
import { Checkbox, Link } from "@nextui-org/react";
import { resultadoPryce } from "@/constants";
import { CustomButton, Gerente } from "@/components";

const ResultadoPryce = () => {
  return (
    <>
      <div className="flex flex-wrap md:flex-row flex-col justify-center items-center md:mb-32 mb-10 pt-28 md:px-10 gap-20">
        <div className="flex flex-col padding-y padding-x md:p-0 w-11/12 text-center gap-2 items-center">
          <div className="w-full">
            <p className="text-sm text-gray-400 md:text-left text-center">
              Primeiro nível
              &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp; Segundo
              nível &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp;
              Terceiro nível
            </p>
          </div>
          <div className="flex flex-col justify-center text-start items-start w-full pb-5 gap-4">
            <div className="flex flex-row justify-center items-center gap-1">
              <Image
                src="/Calculator.svg"
                alt="calculadora"
                width={28}
                height={28}
                className="mt-4"
              />
              <p className="text-2xl btn-text-navy font-bold mt-5 text-start">
                Resultado
              </p>
            </div>

            <div className="flex flex-row flex-wrap w-full justify-between gap-y-7">
              {resultadoPryce.map((resultado) => (
                <div className="flex flex-col gap-2 w-1/4">
                  <h1 className="btn-text-navy text-sm">{resultado.nome}</h1>
                  <p className="text-gray-500 text-lg leading-6">
                    {resultado.resultado}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center w-full gap-3 pt-5">
              <Link href="/">
                <button className="btn-resultado-voltar-home text-white text-base">
                  Voltar para a Home
                </button>
              </Link>
              <Gerente />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultadoPryce;
