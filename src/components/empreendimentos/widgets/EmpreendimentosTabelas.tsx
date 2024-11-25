"use client";

import Image from "next/image";
import CustomButton from "../../CustomButton";
import { Checkbox, Link } from "@nextui-org/react";
import { empreendimentosTabelaPrecos } from "@/constants";
import _ from 'lodash'
import TabelaResource from "@/resources/tabelaResource";
import { Dispatch, useContext, useState } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import emptyDataSource from "@/resources/data/empty-data-source";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import { ITabela } from "@/types";



var loaded = false
const EmpreendimentosTabelas = () => {
  const {user} = useContext(AuthContext)
  const [tabelas, setTabelas] = useState(emptyDataSource);
  const [tabelaSelected, setSelected] =  useState<string[]|undefined|null>([]);
  const [dialogVisible, setDialogVisible] = useState(false);
  const router = useRouter()

  const search = (search: {}) => {
    const response = TabelaResource.search(search).then(response => {
      setTabelas(response.data)
    })
  }

  if(!loaded) {
    search({})
    loaded = true
  }

  
  const showDialog = (tabelas?: string[]) => {
    setSelected(tabelas);
    setDialogVisible(true)
  }


  return (
    <>
      <div className="flex md:flex-row flex-col justify-between w-full pt-5">
        <div className="flex md:flex-row flex-col gap-5">
          <label className="">
            <input
              type="search"
              className="search-box-empreendimentos-precos"
              placeholder="O que você procura?"
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
          </label> */}
        </div>
        {/* <div className="flex flex-row gap-5 md:justify-between justify-center">
          <button className="btn-empreendimentos-list">
            <Image src="/SlidersHorizontal.svg" alt="" width={16} height={16} />
            Filtrar
          </button>
        </div> */}
      </div>
      <div className="flex flex-wrap justify-between items-center pt-10">
      {_.get(tabelas, 'data.length') > 0 ?
        _.map(tabelas?.data, (tabela: ITabela, i: number) => (
          <div className="flex flex-row w-full justify-between items-center gap-5 container-items mb-5 py-3" key={i}>
            <div className="flex  items-center w-full gap-3 pl-7">
              <Image src="/Buildings.svg" alt="bed" width={30} height={30} />
              <p className="text-gray-600 md:text-base text-sm pt-2">
                {tabela.nome}
              </p>
            </div>
            <div className="flex flex-row gap-10 justify-center w-full pl-7">
              <p className="text-gray-600  md:text-base text-sm">
                {tabela.endereco}
              </p>
            </div>
            <div className="flex flex-row gap-10 justify-center w-full">
              <p className="text-gray-600  md:text-base text-sm">
                {tabela.metragem}
              </p>
            </div>
            
            <div className="flex flex-row gap-10 justify-center w-1/4">
              {!user ? 
              <Link href="/login">
                <p className="btn-text-navy  md:text-base text-sm font-semibold">
                  Fazer Login
                </p>
              </Link>
              :
              <>
                {_.get(tabela, 'tabelas', []).length > 0 ?  
                  <CustomButton key={i} title="Download" handleClick={() => showDialog(tabela.tabelas)}/>
                : 
                  <span>-</span>
                }
              </>
            }
            </div>
            
          </div>
        ))
      : (
        <h1 className={"text-xl"}>Nenhuma tabela encontrada</h1>
      )}
      </div>

      <Dialog  visible={dialogVisible} style={{ width: '30vw' }} onHide={() => setDialogVisible(false)}>
        <h2 className="uppercase text-center font-bold">Baixar tabelas</h2>
        <div className="p-5">
          <ul>
            {tabelaSelected?.map((file, i) => (
              <li className="border-b-2 pt-3" key={i}>
                <Link href={file} className="text-blue-600 w-full" target="_blank">
                  {String(file).split("/").pop()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Dialog>
    </>
  );
};

export default EmpreendimentosTabelas;
