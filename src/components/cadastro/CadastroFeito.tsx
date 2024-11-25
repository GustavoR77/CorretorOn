"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CadastroFeito = () => {
  const router = useRouter()


  useEffect(() => {
    setTimeout(() => {
      router.replace('/login');
    }, 5)
  });

  return (
    <>
      <div className="flex flex-wrap md:flex-row flex-col justify-center md:mb-32 mb-10 pt-28 md:px-5 gap-20">
        <div className="flex flex-col padding-y padding-x md:p-0 w-full text-center md:text-left gap-2">
          <div className="md:mb-5 md:pl-20">
            <p className="text-sm text-gray-400 md:text-left text-center">
              Primeiro nível
              &nbsp;&nbsp;&nbsp;&nbsp;&#62;&nbsp;&nbsp;&nbsp;&nbsp; Segundo
              nível
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <Image
              src="/CheckCircle.svg"
              alt="check"
              width={114}
              height={114}
            />
            <p className="btn-text-navy text-3xl font-semibold">Feito!</p>
            <p className="text-gray-500 text-sm text-center md:w-4/12 leading-normal">
              Se este e-mail está cadastrado na nossa plataforma, você receberá
              um link para redefinir sua senha (não se esqueça de olhar a caixa
              de spam!).
            </p>
            <div className="flex flex-row justify-center items-center gap-2 md:pt-20 pt-10">
              <Image
                src="/CircleNotch.svg"
                alt="circle"
                width={24}
                height={24}
              />
              <p className="btn-text-navy text-sm text-center">
                Redirecionando para o login
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CadastroFeito;
