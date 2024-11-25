import Image from "next/image";
import CustomButtom from "../CustomButton";
import Link from "next/link";

const SobreAcompanhe = () => {
  return (
    <div className="flex flex-col max-md:flex-col flex-wrap justify-between">
      <div className="mt-24 padding-x padding-y max-width text-center w-11/12 bg-homepotencialize">
        <h1 className="text-4xl btn-text-navy font-bold mt-12">
          Acompanhe o nosso crescimento 🌱
        </h1>
        <p className="text-sm text-gray-700 leading-7 mt-3">
          Venha fazer parte desse sucesso
        </p>
        <div className="flex justify-center flex-wrap text-center w-full mt-10">
          <div className="lg:w-1/4 home__square">
            <div className="px-10">
              <h1 className="text-7xl btn-text-navy font-bold">380</h1>
              <p className="text-sm text-gray-700 leading-7 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="lg:w-1/4 home__square">
            <div className="px-10">
              <h1 className="text-7xl btn-text-navy font-bold">1,564</h1>
              <p className="text-sm text-gray-700 leading-7 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="lg:w-1/4 home__square">
            <div className="px-10">
              <h1 className="text-7xl btn-text-navy font-bold">1,000</h1>
              <p className="text-sm text-gray-700 leading-7 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="lg:w-1/4 home__square">
            <div className="px-10">
              <h1 className="text-7xl btn-text-navy font-bold">132</h1>
              <p className="text-sm text-gray-700 leading-7 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-wrap text-center w-full mt-10 mb-10 gap-7">
          <Link href="/login">
            <CustomButtom
              title="Login"
              containerStyles="bg-transparent btn-text-navy border border-navy rounded-2xl text-white hover:bg-sky-100 w-80"
            />
          </Link>
          <Link href="/cadastro">
            <CustomButtom
              title="Cadastre-se agora"
              containerStyles="background-navy rounded-2xl text-white hover:bg-blue-950 w-80"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SobreAcompanhe;
