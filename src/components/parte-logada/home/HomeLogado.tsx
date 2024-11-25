"use client";

import Image from "next/image";
import CustomButton from "../../CustomButton";
import { Checkbox, Link } from "@nextui-org/react";

import { AuthContext } from "@/providers/AuthProvider";
import { useContext, useState } from "react";
import _ from "lodash";
import AgendarVisitaModal from "@/components/modals/AgendarVisitaModal";


const HomeLogado = ({
  produtosDestaques,
  produtosLancamentos
}) => {

  const {user} = useContext(AuthContext);
  const [visibleAgendarVisita, setVisibleAgendarVisita] = useState(false)

  const userFoto = _.get(user, 'foto') != '' ? _.get(user, 'foto') : null

  return (
    <>
      <div className="flex flex-wrap md:flex-row flex-col justify-center md:mb-32 mb-10 pt-28 gap-20">
        <div className="flex flex-col padding-y md:p-0 md:w-10/12 w-full text-center md:text-left gap-2">
          {/* <div className="flex flex-row items-center md:mb-2 gap-2 ">
            <Image
              src="/HouseLine.png"
              alt="house"
              width={14}
              height={14}
              className=""
            />
            <p className="text-xs text-gray-400 md:text-left text-center">
              Página inicial
            </p>
          </div> */}

          <div className="flex flex-row gap-5">
            <div className="flex flex-row gap-2 bg-home-logado">
              <div>
                <img
                  src={userFoto ?? '/User.svg'}
                  alt="home"
                  className="w-28 h-28 object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm btn-text-navy">Bom dia, ☀️</p>
                <p className="text-xl btn-text-navy font-medium">
                  {_.get(user, 'name')} {_.get(user, 'sobrenome')}
                </p>
                <p className="text-gray-600 text-sm pt-2">
                {_.get(user, 'email')}
                </p>
                <p className="text-gray-600 text-sm pt-2">{_.get(user, 'telefone')}</p>
                <div className="flex flex-row text-blue-500 gap-3 text-xs font-semibold pt-2">
                  <Link href="#">
                    <p>Editar Perfil</p>
                  </Link>
                  <Link href="#">
                    <p>Editar Equipe</p>
                  </Link>
                </div>
              </div>
            </div>

            {_.get(user, 'gerente.id') != 0 &&
            <div className="flex flex-row gap-2 bg-home-logado">
              <div className="flex flex-col">
                <p className="text-sm btn-text-navy">Gerente</p>
                <p className="text-xl btn-text-navy font-medium">
                  {_.get(user, 'gerente.name')}
                </p>
                <p className="text-gray-600 text-sm pt-2">
                  {_.get(user, 'gerente.email')}
                </p>
                {/* <div className="flex flex-row items-center gap-3 pt-2"> */}
                  {/* <p className="text-gray-600 text-sm">{_.get(user, 'gerente.telefone')}</p> */}
                  {/* <Link href="#">
                    <div className="flex flex-row justify-center items-center gap-1">
                      <Image
                        src="/Whatsapp-blue.svg"
                        alt="Whatsapp"
                        width={14}
                        height={14}
                      />
                      <p className="text-blue-500 text-xs font-semibold">
                        Whatsapp
                      </p>
                    </div>
                  </Link> */}
                {/* </div> */}
              </div>
            </div>
            }

          </div>
          <div className="flex flex-col max-md:flex-col flex-wrap justify-between gap-3 py-5">
            <div className="flex justify-start items-start">
              <h1 className="text-xl btn-text-navy font-bold text-start">
                Informações essenciais
              </h1>
            </div>

            <div className="flex flex-wrap justify-between gap-3">
              <Link href="/area-de-trabalho/espelho-de-vendas" className="btn-home-logado btn-text-navy">
                Espelho de vendas &nbsp; &gt;
                <Image
                  src="/UserCirclePlus.png"
                  alt=""
                  width={32}
                  height={32}
                />
              </Link>
              <button className="btn-home-logado btn-text-navy" onClick={() => setVisibleAgendarVisita(true)}>
                Agendar visita &nbsp; &gt;
                <Image
                  src="/UserCirclePlus.png"
                  alt=""
                  width={32}
                  height={32}
                />
              </button>

              <button className="btn-home-logado btn-text-navy">
                Propostas &nbsp; &gt;
                <Image
                  src="/UserCirclePlus.png"
                  alt=""
                  width={32}
                  height={32}
                />
              </button>
            </div>
          </div>

          {produtosDestaques.length > 0  &&
          <div className="flex flex-col max-md:flex-col flex-wrap justify-between gap-3">
            <div className="flex justify-start items-start">
              <h1 className="text-xl btn-text-navy font-bold text-start">
                Destaques
              </h1>
            </div>
            <div className="flex md:flex-row md:flex-wrap flex-col justify-between w-full md:gap-0 gap-3 pt-2">
              {produtosDestaques.map((produto, i) => (
                <Link href={`/produto/${produto.id}`} key={i}>
                  <div
                    
                    className="flex flex-col home-logado-destaques items-center justify-end gap-8 w-full rounded overflow-hidden "
                    style={{
                      backgroundImage: `url(${produto.foto_capa})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="flex flex-col w-full pl-12 gap-5 bg-gradient-to-b from-transparent via-black-500 to-black-100 p-7">
                      <h1 className="text-white text-lg leading-10">
                        {produto.nome}
                      </h1>
                      <div className="flex flex-row gap-5">
                        {produto.dorms &&
                        <div className="flex flex-row items-center justify-center text-white gap-1">
                          <Image
                            src="/Bed-white.svg"
                            alt="bed"
                            width={24}
                            height={24}
                          />
                          <p className="mt-1">{produto.dorms}</p>
                        </div>
                        }

                        {produto.banheiro &&
                        <div className="flex flex-row items-center justify-center text-white gap-1">
                          <Image
                            src="/Bathtub-white.svg"
                            alt="bed"
                            width={24}
                            height={24}
                          />
                          <p className="mt-1">{produto.banheiro}</p>
                        </div>
                        }

                        {produto.vagas &&
                        <div className="flex flex-row items-center justify-center text-white gap-1">
                          <Image
                            src="/CarSimple-white.svg"
                            alt="garage"
                            width={24}
                            height={24}
                          />
                          <p className="mt-1">{produto.vagas}</p>
                        </div>
                        }
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          }
          <div className="flex flex-col max-md:flex-col flex-wrap justify-between gap-3 pt-5">
            <div className="flex justify-between items-start">
              <h1 className="text-xl btn-text-navy font-bold text-start pb-5">
                Lançamentos
              </h1>
              <Link href="/produtos?fase_construcao=LAN">
                <p className="text-sm text-blue-500 font-semibold">Ver mais</p>
              </Link>
            </div>
            <div className="flex flex-row flex-wrap gap-4">
              {produtosLancamentos.map((produto, i) => (
                <Link href={`/produto/${produto.id}`} key={i}>
                  <div className="flex flex-row home-logado-lancamentos">
                    <img
                      src={produto.foto_capa}
                      alt={produto.name}
                      className="p-1 rounded-xl flex-1 object-cover"
                    />
                    <div className="flex flex-col justify-between btn-text-navy px-10 py-4 w-80">
                      <h1 className="text-lg leading-7 font-medium">
                        {produto.nome}
                      </h1>
                      <div className="flex flex-row justify-between w-max gap-5">
                        <div className="flex flex-col text-sm justify-between p-2 gap-3">
                          {produto.dorms &&
                          <div className="flex flex-row gap-2">
                            <Image
                              src="/Bed.svg"
                              alt="Bed"
                              width={22}
                              height={22}
                            />
                            <p className="mt-1 font-normal">{produto.dorms}</p>
                          </div>
                          }

                          {produto.vagas &&
                          <div className="flex flex-row gap-2">
                            <Image
                              src="/CarSimple.svg"
                              alt="Bed"
                              width={22}
                              height={22}
                            />
                            <p className="mt-1 font-normal">
                              {produto.vagas}
                            </p>
                          </div>
                          }
                        </div>
                        <div className="flex flex-col text-sm justify-between p-2 w-max">
                          {produto.banheiro &&
                          <div className="flex flex-row gap-2">
                            <Image
                              src="/Bathtub.svg"
                              alt="Bed"
                              width={22}
                              height={22}
                            />
                            <p className="mt-1 font-normal">{produto.banheiro}</p>
                          </div>
                          }

                          {produto.area &&
                          <div className="flex flex-row gap-2">
                            <Image
                              src="/ArrowsOut.svg"
                              alt="Area"
                              width={22}
                              height={22}
                            />
                            <p className="mt-1 font-normal">
                              {produto.area}
                            </p>
                          </div>
                          }

                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* <div className="pt-32">
            <Image src="/logo-gray.svg" alt="logo" width={100} height={20} />
          </div> */}
        </div>
      </div>

      <AgendarVisitaModal onHide={(value) => setVisibleAgendarVisita(value)} visible={visibleAgendarVisita}/>
    </>
  );
};

export default HomeLogado;
