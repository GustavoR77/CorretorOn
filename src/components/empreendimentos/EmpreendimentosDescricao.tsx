"use client";

import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "@/components";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { empreendimentos } from "@/constants";
import { IEmpreendimento } from "@/types";
import _ from "lodash";

const EmpreendimentosDescricao = (props: { produto: IEmpreendimento }) => {
  const { produto } = props;

  var imagens = _.get(produto, "galeria_imagens", []);
  var plantas = _.get(produto, "galeria_plantas", []);

  return (
    <>
      {empreendimentos.map((item, i) => (
        <div
          className="md:mb-20 md:mt-0 md:py-2 py-10 flex md:flex-wrap md:flex-row flex-col justify-around items-start gap-9"
          key={i}
        >
          <div className="md:p-0 w-full md:w-10/12 text-center md:text-left flex flex-col justify-center md:items-start items-center md:gap-28 gap-10">
            {/* <div className="md:mt-5">
              <p className="text-sm text-gray-400 text-left">
                Primeiro nível
                &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp; Segundo
                nível &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp;
                Terceiro nível
              </p>
            </div> */}
            <div className="md:px-0 px-7 flex flex-col justify-center lg:text-start text-center lg:pt-10 pt-5">
              {/* <p className="text-sm text-gray-700">LOREM IPSUM</p> */}
              <h1 className="md:text-4xl text-3xl btn-text-navy font-bold">
                Descrição
              </h1>
              <p className="text-sm text-gray-500 leading-7 mt-7">
                {produto?.descricao}
              </p>
            </div>
          </div>
          <div className=" md:p-0 px-2 w-full md:w-10/12 text-center lg:text-left flex flex-col justify-center lg:items-start items-center">
            {/* <p className="text-sm text-gray-700">LOREM IPSUM</p> */}
            <h1 className="text-2xl btn-text-navy font-bold mt-4">
              Ficha técnica
            </h1>
            <div className="flex lg:justify-between justify-evenly items-center flex-wrap text-center w-full mt-10 btn-text-navy lg:gap-1 gap-5">
              {item.fichaTecnica.map((ficha, i) =>
                _.get(produto, ficha.key) ? (
                  <div key={i} className="px-5 md:w-52 lg:w-max">
                    <div>
                      <h1 className="text-5xl font-bold">
                        {_.get(produto, ficha.key)}
                      </h1>
                    </div>
                    <div className="flex flex-row w-full justify-center items-center gap-2">
                      <Image src={ficha.link} alt="" width={22} height={22} />
                      <p className="text-sm leading-7 font-normal mt-1">
                        {ficha.descricao}
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
          <div className="md:p-0 px-2 w-full md:w-10/12 text-center md:text-left flex flex-col justify-center md:items-start items-center">
            {/* <p className="text-sm text-gray-700">LOREM IPSUM</p> */}
            <h1 className="text-2xl btn-text-navy font-bold mt-10">
              Material de Apoio
            </h1>
            <div className="flex justify-between items-center md:flex-row flex-col text-center w-full mt-10 btn-text-navy md:gap-1 gap-5">
              {item.material.map((mat, i) => (
                <div
                  key={i}
                  className="px-6 bg-material-apoio flex justify-center items-center"
                >
                  <div className="flex flex-row w-full justify-between items-center gap-2">
                    <div className="flex flex-row lg:gap-5 md:gap-1 gap-5 justify-start">
                      <div className="md:w-5/12 lg:w-max">
                        <Image
                          src="/FileText.svg"
                          alt=""
                          width={32}
                          height={32}
                        />
                      </div>
                      <div className="w-max">
                        <p className="lg:text-sm md:text-xs text-sm lg:leading-7 font-medium md:mt-1 mt-2">
                          {mat.descricao}
                        </p>
                      </div>
                    </div>
                    <Link href={mat.link}>
                      <div className="material-apoio-round-div">
                        <Image
                          src="/DownloadSimple.svg"
                          alt="botão"
                          width={48}
                          height={48}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:p-0 px-2 w-full md:w-10/12 text-center md:text-left flex flex-col justify-center md:items-start items-center">
            {imagens.length > 0 && (
              <>
                <h1 className="text-2xl btn-text-navy font-bold mt-10">
                  Galeria de Imagens
                </h1>
                <div className="flex justify-between items-center md:flex-row flex-col text-center w-full mt-10 btn-text-navy md:gap-1 gap-5">
                  <Carousel showStatus={false} showThumbs={false}>
                    {_.map(
                      _.get(produto, "galeria_imagens", []),
                      (imagem, i) => {
                        return (
                          <div key={i}>
                            <img src={imagem} />
                          </div>
                        );
                      }
                    )}
                  </Carousel>
                </div>
              </>
            )}
          </div>
          <div className="md:p-0 px-2 w-full md:w-10/12 text-center md:text-left flex flex-col justify-center md:items-start items-center">
            {plantas.length > 0 && (
              <>
                <h1 className="text-2xl btn-text-navy font-bold mt-10">
                  Galeria de Plantas
                </h1>
                <div className="flex justify-between items-center md:flex-row flex-col text-center w-full mt-10 btn-text-navy md:gap-1 gap-5">
                  <Carousel showStatus={false} showThumbs={false}>
                    {_.map(plantas, (imagem, i) => {
                      return (
                        <div key={i}>
                          <img src={imagem} />
                        </div>
                      );
                    })}
                  </Carousel>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default EmpreendimentosDescricao;
