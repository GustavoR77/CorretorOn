
import Image from "next/image";
import CustomButton from "../CustomButton";
import { Link } from "@nextui-org/react";

import { blogDestaques, blogPostagens, blogCategorias } from "@/constants";

const BlogHome = () => {
  return (
    <>
      <div className="flex flex-wrap md:flex-row flex-col justify-center md:mb-32 mb-10 lg:pt-28 pt-20 gap-20">
        <div className="flex flex-col padding-y md:p-0 md:w-10/12 w-full text-center md:text-left gap-2">
          <div className="md:mb-5">
            <p className="md:text-sm text-xs text-gray-400 md:text-left text-center">
              Primeiro nível
              &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp; Segundo
              nível &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp;
              Terceiro nível
            </p>
          </div>
          <div className="flex md:flex-row flex-col w-full gap-5 items-center justify-center">
            <div className="">
              <div className="relative">
                <Image src="/blog-1.png" alt="blog" width={456} height={556} />
              </div>
              <div className="absolute text-overlay-main">
                <p className="text-category-blog mb-2">Categoria</p>
                <h1 className="text-white font-semibold text-3xl leading-9 mb-3">
                  5 ideias de conteúdo para corretores de imóveis
                </h1>
                <p className="text-white text-xs font-normal">
                  Aqui, você terá insights do que postar, quais assuntos falar e
                  muito mais. Aprenda conosco!
                </p>
              </div>
            </div>
            <div>
              <div className="relative">
                <Image src="/blog-2.png" alt="blog" width={312} height={556} />
              </div>
              <div className="absolute text-overlay">
                <p className="text-category-blog mb-2">Categoria</p>
                <h1 className="text-white font-semibold text-xl leading-8 mb-3">
                  4 dicas infalíveis para se tornar um corretor de sucesso
                </h1>
              </div>
            </div>
            <div>
              <div className="relative">
                <Image src="/blog-3.png" alt="blog" width={312} height={556} />
              </div>
              <div className="absolute text-overlay">
                <p className="text-category-blog mb-2">Categoria</p>
                <h1 className="text-white font-semibold text-xl leading-8 mb-3">
                  Óculos de realidade virtual: Um grande aliado nas suas vendas
                </h1>
              </div>
            </div>
          </div>
          <div className="lg:hidden flex justify-center items-center pt-10">
            <h1 className="md:text-4xl text-2xl btn-text-navy font-bold">
              Destaques
            </h1>
          </div>
          <div className="flex md:flex-row flex-col justify-between items-center w-full lg:pt-10 pt-5">
            <div className="lg:flex hidden">
              <h1 className="md:text-4xl text-2xl btn-text-navy font-bold">
                Destaques
              </h1>
            </div>
            <div className="flex md:flex-row lg:justify-end justify-between flex-col gap-5 w-full">
              <div className="flex md:flex-row flex-col gap-5 justify-center items-center">
                <label className="">
                  <input
                    type="search"
                    className="search-box-empreendimentos-precos mt-0"
                    placeholder="O que você procura?"
                  />
                </label>
              </div>
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
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-between items-center w-full pt-5">
            <div className="flex flex-col justify-center items-center w-full gap-3">
              <div className="flex md:flex-row md:flex-wrap flex-col justify-center mt-7 lg:w-full lg:gap-0 gap-10">
                {blogDestaques.map((destaques) => (
                  <div className="flex flex-col blog-destaques items-center justify-between">
                    <Image
                      src={destaques.image}
                      alt="blog"
                      width={360}
                      height={238}
                    />
                    <div className="flex flex-col justify-center items-center gap-3 -mt-10 px-2">
                      <h1 className="text-xl btn-text-navy font-semibold w-11/12">
                        {destaques.title}
                      </h1>
                      <p className="text-gray-600 w-11/12">{destaques.text}</p>
                    </div>
                    <div className="flex flex-row md:justify-start justify-center items-center w-11/12 mb-5 px-2">
                      <Link href={destaques.link}>
                        <p className="mt-1 btn-text-navy text-base font-semibold mr-3">
                          Ler mais{" "}
                        </p>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow"
                          width={14}
                          height={14}
                          className=""
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-between items-center w-full pt-20">
            <div className="flex flex-col justify-center items-center w-full gap-3">
              <h1 className="md:text-4xl text-2xl btn-text-navy font-bold ">
                Navegue por Categorias
              </h1>
              <p className="lg:w-7/12 w-full text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu.
              </p>
              <div className="flex lg:flex-row lg:flex-wrap flex-col justify-between mt-7 lg:w-full md:gap-0 gap-3">
                {blogCategorias.map((categorias) => (
                  <div
                    className="flex flex-col blog-categorias items-center justify-end gap-8 pb-7 w-full lg:mb-0 mb-5"
                    style={{
                      backgroundImage: `url(${categorias.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="flex w-full pl-12">
                      <h1 className="text-white text-3xl font-semibold leading-10">
                        {categorias.title}
                      </h1>
                    </div>
                    <Link href={categorias.link}>
                      <CustomButton
                        title="Saiba mais"
                        containerStyles="bg-white rounded-2xl w-80 btn-text-navy hover:bg-gray-200"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-between items-center w-full pt-20">
            <div className="flex flex-col justify-center items-center w-full gap-3">
              <h1 className="md:text-4xl text-2xl btn-text-navy font-bold ">
                Postagens da semana
              </h1>
              <p className="lg:w-7/12 w-full text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu.
              </p>
              <div className="flex flex-row flex-wrap md:justify-between justify-center mt-7 lg:w-full lg:gap-0 gap-6">
                {blogPostagens.map((postagens) => (
                  <div className="flex flex-col blog-destaques items-center justify-between">
                    <Image
                      src={postagens.image}
                      alt="blog"
                      width={360}
                      height={238}
                    />
                    <div className="flex flex-col justify-center items-center gap-3 -mt-10 px-2">
                      <h1 className="text-xl btn-text-navy font-semibold w-11/12">
                        {postagens.title}
                      </h1>
                      <p className="text-gray-600 w-11/12">{postagens.text}</p>
                    </div>
                    <div className="flex flex-row md:justify-start justify-center items-center w-11/12 mb-5 px-2">
                      <Link href={postagens.link}>
                        <p className="mt-1 btn-text-navy text-base font-semibold mr-3">
                          Ler mais{" "}
                        </p>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow"
                          width={14}
                          height={14}
                          className=""
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHome;
