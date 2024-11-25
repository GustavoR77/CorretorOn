"use client";

import Image from "next/image";
import CustomButton from "../CustomButton";
import { Checkbox, Link } from "@nextui-org/react";
import { empreendimentosTabelaPrecos } from "@/constants";
import { EmpreendimentosEspelhoBlocos, EmpreendimentosEspelhoTabelas } from "@/components";
import { useState } from "react";
import emptyDataSource from "@/resources/data/empty-data-source";
import EspelhoResource from "@/resources/espelhoResource";
import { IEspelho, IEspelhoBloco } from "@/types";
import { useRouter } from "next/navigation";
import EmpreendimentosEspelhoUnidades from "./widgets/EmpreendimentosEspelhoUnidades";
import _ from 'lodash';

var loaded = false;

const EmpreendimentosEspelho = ({searchParams}: {searchParams: any}) => {
  const router = useRouter();
  const [data, setData] = useState(emptyDataSource);
  const [espelho, setEspelho] = useState<IEspelho|null>();
  const [bloco, setBloco] = useState<IEspelhoBloco|null>();

  const [loading, setLoading] = useState(false);

  const search = (params: {}) => {

    setEspelho(() => null);
    setBloco(() => null);
    setLoading(() => true);
    EspelhoResource.search(params).then(response => {
      setData(() => response.data);
      setLoading(() => false);
    }).catch(error => {
      setLoading(() => false);
    });
  }

  const onSelectEspelho = (_espelho) => {
    setEspelho(_espelho);
  }

  const onSelectBloco = (_bloco: IEspelhoBloco) => {
    EspelhoResource.unidades({
      espelho_bloco_id: _bloco.id
    }).then(response => {

      _bloco.unidades = response.data

      console.log(_bloco)
      setBloco(_bloco);
      
      setLoading(false);
    }).catch(error => {
      setLoading(false);
    });
  }

  

  if(!loaded){
    search(searchParams);
    loaded = true;
  }

  return (
    <>
      
      <div className="flex flex-wrap md:flex-row flex-col justify-center items-center md:mb-32 mb-10 pt-28 md:px-10 gap-20">
        <div className="flex flex-col padding-y padding-x md:p-0 w-11/12 text-center gap-2 items-center">
          {/* <div className="md:mb-5 w-full">
            <p className="text-sm text-gray-400 md:text-left text-center">
              Primeiro nível
              &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp; Segundo
              nível &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp;
              Terceiro nível
            </p>
          </div> */}
          <div className="flex flex-col justify-center items-center">
            <h1 className="md:text-4xl text-2xl btn-text-navy font-bold md:mt-0 mt-2">
              Espelho de Vendas
            </h1>
          </div>
          <div className="flex md:flex-row flex-col justify-between w-full pt-10">
            <div className="flex md:flex-row flex-col gap-5">
              <label className="">
                <input
                  type="search"
                  className="search-box-empreendimentos-precos"
                  placeholder="O que você procura?"
                  onChange={(evt) => search({query: evt.target.value})}
                />
              </label>
              {/* <label className="">
                <select
                  id="bairro"
                  name="bairro"
                  className="select-box-empreendimentos"
                >
                  <option value="">Bairro</option>
                  <option value="bairro1">Bairro 1</option>
                  <option value="bairro2">Bairro 2</option>
                  <option value="mercedes">Bairro 3</option>
                  <option value="audi">Bairro 4</option>
                </select>
              </label>
              <label className="">
                <select
                  id="metragem"
                  name="metragem"
                  className="select-box-empreendimentos"
                >
                  <option value="">Metragem</option>
                  <option value="bairro1">Metragem 1</option>
                  <option value="bairro2">Metragem 2</option>
                  <option value="mercedes">Metragem 3</option>
                  <option value="audi">Metragem 4</option>
                </select>
              </label>
              */}
            </div>
            {/*
            <div className="flex flex-row gap-5 md:justify-between justify-center">
              <button className="btn-empreendimentos-list">
                <Image
                  src="/SlidersHorizontal.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                Filtrar
              </button>
            </div> */}
          </div>
          {!espelho &&

            <EmpreendimentosEspelhoTabelas espelhos={data.data} onSelected={onSelectEspelho}/>
          }
          {espelho &&
          <>
            <div className="flex md:flex-row flex-col justify-start items-center w-full pt-10">
              <CustomButton handleClick={() => {
                setEspelho(null);
                setBloco(null);
              }} title="Voltar" containerStyles="text-blue-800"/>
              <h1 className="text-lg font-bold">{espelho.nome}</h1>
            </div>
            <EmpreendimentosEspelhoBlocos blocos={espelho?.blocos} onSelected={onSelectBloco}/>

            {bloco &&
              <EmpreendimentosEspelhoUnidades unidades={bloco?.unidades} />
            }
          </>
          }
        </div>
        
      </div>
    </>
  );
};

export default EmpreendimentosEspelho;
