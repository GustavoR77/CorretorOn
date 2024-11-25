"use client";
import Image from "next/image";
import CustomButton from "../../CustomButton";
import { Link } from "@nextui-org/react";

import LoadingOverlay from "@/components/loading/LoadingOverlay";
import ImovelCardSkeleton from "@/components/skeleton/ImovelCardSkeleton";
import { useState } from "react";
import EmpreendimentoResource from "@/resources/empreendimentoResource";
import emptyDataSource from "@/resources/data/empty-data-source";
import _ from "lodash";
import { IEmpreendimento } from "@/types";

var loaded = false;

const EmpreendimentosListagem = ({ searchParams }: { searchParams: any }) => {
  const [produtos, setProdutos] = useState(emptyDataSource);
  const [loading, setLoading] = useState(false);
  const search = async (params: {}) => {
    setLoading(true);
    EmpreendimentoResource.search(params)
      .then((response) => {
        setProdutos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  if (!loaded) {
    search(searchParams);
    loaded = true;
  }

  return (
    <>
      <div className="flex lg:flex-row flex-col justify-between gap-3">
        <div className="flex w-full justify-center items-center">
          <label className="label__search">
            <input
              type="search"
              className="search-box-empreendimentos"
              placeholder="O que você procura?"
            />
          </label>
        </div>
        <div className="flex flex-row gap-5 lg:justify-between justify-around lg:w-5/12 w-full">
          <button className="btn-empreendimentos-list">
            <Image src="/SlidersHorizontal.svg" alt="" width={16} height={16} />
            Filtrar
          </button>
          <button className="btn-empreendimentos-list">
            <Image src="/MapPin.svg" alt="" width={16} height={16} />
            Mapa
          </button>
        </div>
      </div>

      <div className="flex flex-row flex-wrap lg:pt-10 lg:pr-3 md:pr-0 w-full justify-center">
        <LoadingOverlay
          skeleton={Array(8)
            .fill("")
            .map((v, k) => (
              <ImovelCardSkeleton key={k} />
            ))}
          visible={loading}
        >
          {_.get(produtos, "data.length") > 0 ? (
            _.map(produtos?.data, (imovel: IEmpreendimento) => (
              <div
                className="flex flex-col p-5 lg:w-3/12 md:w-5/12 w-full"
                key={imovel.id}
              >
                <div className="container-items flex flex-col gap-3 h-full items-center justify-between p-5">
                  <div className="flex flex-col h-56 justify-start items-center">
                    <Link href={`/produto/${imovel.id}`}>
                      <Image
                        src={_.get(imovel, "foto_capa") ?? "/sem_imagem.jpeg"}
                        alt="empreendimentos"
                        className="object-cover w-full rounded-xl"
                        // fill={true}
                        width={331}
                        height={225}
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <Link href={`/produto/${imovel.id}`}>
                      <p className="btn-text-navy text-lg">
                        {_.get(imovel, "nome")}
                      </p>
                    </Link>
                  </div>
                  <div className="flex flex-row px-3 py-5 gap-10 justify-center w-full">
                    {_.get(imovel, "dorms") && (
                      <div className="flex flex-col justify-center items-center">
                        <Image
                          src="/Bed.svg"
                          alt="bed"
                          width={30}
                          height={30}
                        />
                        <p className="text-gray-500 text-sm">
                          {_.get(imovel, "dorms")}
                        </p>
                      </div>
                    )}

                    {_.get(imovel, "banheiro") && (
                      <div className="flex flex-col justify-center items-center">
                        <Image
                          src="/Bathtub.svg"
                          alt="bed"
                          width={30}
                          height={30}
                        />
                        <p className="text-gray-500 text-sm">
                          {_.get(imovel, "banheiro")}
                        </p>
                      </div>
                    )}

                    {_.get(imovel, "vagas") && (
                      <div className="flex flex-col justify-center items-center">
                        <Image
                          src="/CarSimple.svg"
                          alt="bed"
                          width={30}
                          height={30}
                        />
                        <p className="text-gray-500 text-sm">
                          {_.get(imovel, "vagas")}
                        </p>
                      </div>
                    )}
                  </div>
                  <CustomButton
                    title="Agendar visita"
                    containerStyles="btn-agendar-visita w-full"
                  />
                </div>
              </div>
            ))
          ) : (
            <h1 className={"text-xl"}>
              {loading ? "Carregando..." : "Nenhum imóvel encontrado"}
            </h1>
          )}
        </LoadingOverlay>
      </div>
    </>
  );
};

export default EmpreendimentosListagem;
