import dynamic from "next/dynamic";

import {
  FooterAtualizado,
  HeroAlt,
  SobreHistoria,
  SobreTrajetoria,
  SobreParceria,
  SobreAcompanhe,
  HomeGente,
} from "@/components";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Sobre - CorretorOn",
  description: "CorretorOn",
};

export default function Page() {
  return (
    <div className="overflow-hidden">
      <HeroAlt
        bg="hero-sobre-bg"
        title="Cadastre-se e desfrute das vantagens do nosso app.👌"
      />
      <SobreHistoria />
      <SobreTrajetoria />
      <SobreParceria />
      <SobreAcompanhe />
      <HomeGente />
      <FooterAtualizado />
    </div>
  );
}
