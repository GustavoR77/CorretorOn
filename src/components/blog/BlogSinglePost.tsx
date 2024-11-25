import Image from "next/image";
import { Link } from "@nextui-org/react";

import { blogPostagens, blogSinglePost } from "@/constants";

const BlogSinglePost = () => {
  return (
    <>
      <div className="flex flex-wrap md:flex-row flex-col justify-center md:mb-32 mb-10 pt-28 gap-20">
        <div className="flex flex-col padding-y md:p-0 md:w-10/12 w-full text-center md:text-left gap-2">
          <div className="md:mb-5">
            <p className="md:text-sm text-xs text-gray-400 md:text-left text-center">
              Primeiro nível
              &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp; Segundo
              nível &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp;
              Terceiro nível
            </p>
          </div>
          <div className="flex md:flex-row flex-col w-full gap-5 items-end justify-start blog-single-post pl-14 pb-7">
            <div className="flex flex-row gap-5">
              <Image
                src="/blog-profile-photo.svg"
                alt="perfil"
                width={50}
                height={50}
              />
              <div className="flex flex-col text-white font-normal">
                <p>Germano Vieira</p>
                <p>Investimento | 10/04/2022</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full pt-14 md:justify-between justify-center">
            <div className="flex flex-col md:w-8/12 w-11/12 gap-10">
              <h1 className="md:text-4xl text-2xl btn-text-navy font-semibold">
                Compra para investir
              </h1>
              <p className="text-gray-600 text-base leading-8 font-normal">
                Curabitur tempor quis eros tempus lacinia. Nam bibendum
                pellentesque quam a convallis. Sed ut vulputate nisi. Integer in
                felis sed leo vestibulum venenatis. Suspendisse quis arcu sem.
                Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend
                magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices
                nibh. Mauris sit amet magna non ligula vestibulum eleifend.
                Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus
                lobortis eleifend. Sed nec ante dictum sem condimentum
                ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac
                posuere leo.
              </p>
              <Image
                src="/blog-single-post-photo-2.png"
                alt="blog"
                width={745}
                height={300}
                className=""
              />
              <p className="text-gray-600 text-base leading-8 font-normal">
                Curabitur tempor quis eros tempus lacinia. Nam bibendum
                pellentesque quam a convallis. vulputate nisi. Integer in felis
                sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean
                feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam
                metus lacus, porttitor eu mauris a, blandit ultrices nibh.
                Mauris sit amet magna non ligula vestibulum eleifend. Nulla
                varius volutpat turpis sed lacinia. Nam eget mi in purus
                lobortis eleifend. Sed nec ante dictum sem condimentum
                ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac
                posuere leo.
              </p>
              <p className="text-gray-600 text-base leading-8 font-normal">
                Curabitur tempor quis eros tempus lacinia. Nam bibendum
                pellentesque quam a convallis. vulputate nisi. Integer in felis
                sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean
                feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam
                metus lacus, porttitor eu mauris a, blandit ultrices nibh.
                Mauris sit amet magna non ligula vestibulum eleifend. Nulla
                varius volutpat turpis sed lacinia. Nam eget mi in purus
                lobortis eleifend. Sed nec ante dictum sem condimentum
                ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac
                posuere leo.
              </p>

              <div className="flex lg:flex-row flex-col justify-between items-center w-full md:pt-20">
                <div className="flex flex-col justify-center items-center w-full gap-3">
                  <h1 className="md:text-4xl text-2xl btn-text-navy font-bold ">
                    Veja também
                  </h1>
                  <div className="flex md:flex-row md:flex-wrap flex-col justify-between mt-7 lg:w-full lg:gap-0 gap-3">
                    {blogSinglePost.map((postagens) => (
                      <div className="flex flex-col blog-destaques-singlepost items-center justify-between">
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
                          <p className="text-gray-600 w-11/12">
                            {postagens.text}
                          </p>
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
              <p className="text-gray-600 text-base leading-8 font-normal">
                Curabitur tempor quis eros tempus lacinia. Nam bibendum
                pellentesque quam a convallis. vulputate nisi. Integer in felis
                sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean
                feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam
                metus lacus, porttitor eu mauris a, blandit ultrices nibh.
                Mauris sit amet magna non ligula vestibulum eleifend. Nulla
                varius volutpat turpis sed lacinia. Nam eget mi in purus
                lobortis eleifend. Sed nec ante dictum sem condimentum
                ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac
                posuere leo.
              </p>
              <p className="text-gray-600 text-base leading-8 font-normal">
                Curabitur tempor quis eros tempus lacinia. Nam bibendum
                pellentesque quam a convallis. vulputate nisi. Integer in felis
                sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean
                feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam
                metus lacus, porttitor eu mauris a, blandit ultrices nibh.
                Mauris sit amet magna non ligula vestibulum eleifend. Nulla
                varius volutpat turpis sed lacinia. Nam eget mi in purus
                lobortis eleifend. Sed nec ante dictum sem condimentum
                ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac
                posuere leo.
              </p>
              <Image
                src="/blog-single-post-photo-5.png"
                alt="blog"
                width={745}
                height={300}
                className=""
              />
              <p className="text-gray-600 text-base leading-8 font-normal">
                Curabitur tempor quis eros tempus lacinia. Nam bibendum
                pellentesque quam a convallis. vulputate nisi. Integer in felis
                sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean
                feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam
                metus lacus, porttitor eu mauris a, blandit ultrices nibh.
                Mauris sit amet magna non ligula vestibulum eleifend. Nulla
                varius volutpat turpis sed lacinia. Nam eget mi in purus
                lobortis eleifend. Sed nec ante dictum sem condimentum
                ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac
                posuere leo.
              </p>
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
        <div className="flex flex-col bg-artigos-relacionados justify-center items-center py-20">
          <div className="flex md:flex-row flex-col justify-between items-center w-full">
            <div className="flex flex-col justify-center items-center w-full gap-3">
              <h1 className="md:text-4xl text-2xl btn-text-navy font-bold ">
                Artigo relacionados
              </h1>
              <p className="md:w-7/12 w-full text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu.
              </p>
            </div>
          </div>
          <div className="flex md:flex-row md:flex-wrap flex-col justify-center mt-7 w-10/12 gap-5">
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
    </>
  );
};

export default BlogSinglePost;
