import Image from "next/image";
import CustomButton from "../CustomButton";
import { Checkbox, Link } from "@nextui-org/react";

import { blogPostagens, blogSinglePost } from "@/constants";

const BlogCategoria = () => {
  return (
    <>
      <div className="flex flex-wrap md:flex-row flex-col justify-center md:mb-32 mb-10 blog-categorias-margin-top gap-16">
        <div className="flex flex-col padding-y md:p-0  w-full text-center md:text-left gap-2">
          <div className="md:mb-5 blog-categorias-hero w-full pt-5 md:pl-32 pb-10 flex flex-col gap-32">
            <p className="md:text-sm text-xs md:text-gray-400 text-white md:text-left text-center md:mt-0 -mt-2">
              Primeiro nível
              &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp; Segundo
              nível &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp;
              Terceiro nível
            </p>
            <p className="md:text-4xl text-2xl text-white md:text-left text-center">
              Nome da Categoria
            </p>
          </div>

          <div className="flex flex-row w-full pt-5 lg:justify-between justify-center lg:items-start items-center lg:px-32 md:px-10">
            
            <div className="flex flex-col md:w-8/12 w-11/12 gap-10">
              <label className="">
                <input
                  type="search"
                  className="search-box-blog-categoria md:mt-0 mt-5"
                  placeholder="O que você procura?"
                />
              </label>
              <div className="flex md:flex-row md:flex-wrap flex-col md:justify-between justify-center items-center w-full md:gap-0 gap-3">
                {blogSinglePost.map((postagens) => (
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
            <div className="md:flex md:flex-col hidden w-1/4 gap-3">
              <div>
                <div className="relative">
                  <Image
                    src="/blog-single-post-photo.png"
                    alt="blog"
                    width={346}
                    height={331}
                    className="image-overlay-categorias"
                  />
                  <div className="text-overlay-categorias text-white font-medium lg:text-2xl text-xl">
                    <p>Facces Jardins</p>
                    <p>By Helbor</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative">
                  <Image
                    src="/blog-single-post-photo-3.png"
                    alt="blog"
                    width={346}
                    height={331}
                    className="image-overlay-categorias"
                  />
                  <div className="text-overlay-categorias text-white font-medium lg:text-2xl text-xl">
                    <p>Facces Jardins</p>
                    <p>By Helbor</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative">
                  <Image
                    src="/blog-single-post-photo-4.png"
                    alt="blog"
                    width={346}
                    height={331}
                    className="image-overlay-categorias"
                  />
                  <div className="text-overlay-categorias text-white font-medium lg:text-2xl text-xl">
                    <p>Facces Jardins</p>
                    <p>By Helbor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCategoria;
