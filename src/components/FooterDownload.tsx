import Image from "next/image";
import CustomButtom from "./CustomButton";

const FooterDownload = () => {
  return (
    <>
      <div className="bg-homedownload flex flex-wrap md:flex-row justify-start w-full">
        <div
          className=" padding-y lg:pl-32 text-center lg:text-left lg:w-6/12 w-full px-5"
          id="HomeDownload"
        >
          <h1 className="text-4xl text-white font-bold mt-16">
            Baixe agora o app! 📲
          </h1>
          <p className="text-sm footer-text leading-7 mt-5 font-normal">
            Baixe agora nosso app e tenha o mercado imobiliário na palma da sua
            mão. Acesse imóveis, agende visitas, envie propostas e acompanhe
            suas atividades em tempo real. Não perca tempo, faça o download!
          </p>
          <div className="flex lg:justify-start justify-center mt-7 md:mb-16 mb-5 gap-5">
            <Image
              src="/google.png"
              alt="Google Play"
              width={167}
              height={56}
            />
            <Image src="/apple.png" alt="App Store" width={167} height={56} />
          </div>
        </div>
        <div className="lg:flex hidden justify-center items-end ">
          <Image
            src="/footer-image.png"
            alt="footer"
            width={469}
            height={387}
            className="footer-overlay"
          />
        </div>
      </div>
    </>
  );
};

export default FooterDownload;
