"use client"
import Image from "next/image";
import CustomButtom from "../CustomButton";
import {Buildings, SignIn, ThumbsUp, UserCirclePlus} from "@phosphor-icons/react"
import { useRouter } from "next/navigation";

const HomePotencialize = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col max-md:flex-col flex-wrap justify-between bg-gray-100">
      <div
        className="lg:mt-28 mt-14 padding-x padding-y max-width text-center lg:w-7/12"
        id="homePotencialize"
      >
        <h1 className="md:text-4xl text-2xl btn-text-navy font-bold">
          Potencialize suas vendas com nossa solução para corretores 🚀
        </h1>
        <p className="text-sm text-gray-700 leading-7 mt-3">
          Aumente seus resultados e conquiste o mercado imobiliário
        </p>
      </div>

      <div className="padding-x padding-y max-width flex flex-wrap justify-center gap-3">
        <button className="bg-homepotencialize rounded-2xl md:w-72 btn-text-navy flex justify-between items-center text-sm py-2 px-6" onClick={()=> router.push('/cadastro')}>
          Torne-se um parceiro &nbsp; &gt;
          <UserCirclePlus size={32} />
        </button>
        <button className="bg-homepotencialize rounded-2xl md:w-52 btn-text-navy flex justify-between items-center text-sm py-2 px-6" onClick={()=> router.push('/login')}>
          Login &nbsp; &gt;
          <SignIn size={32} />
        </button>
        <button className="bg-homepotencialize rounded-2xl md:w-56 btn-text-navy flex justify-between items-center text-sm py-2 px-6" onClick={()=> router.push('/beneficios')}>
          Benefícios &nbsp; &gt;
          <ThumbsUp size={32} />
        </button>
        <button className="bg-homepotencialize rounded-2xl md:w-72 btn-text-navy flex justify-between items-center text-sm py-2 px-6" onClick={()=> router.push('/produtos')}>
          Empreendimentos &nbsp; &gt;
          <Buildings size={32} />
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        <Image src="/HomePotencialize.png" alt="" width={1271} height={688} />
      </div>
    </div>
  );
};

export default HomePotencialize;
