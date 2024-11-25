import {
  HeroAlt,
  FooterAtualizado,
  BeneficiosRecursos,
  BeneficiosAgilidade,
  BeneficiosConectividade,
  BeneficiosInovacao,
  BeneficiosExtras,
  BeneficiosRevolucao,
  HomeGente,
} from "@/components";

export default function Page() {
  return (
    <div className="overflow-hidden">
      <HeroAlt bg="hero-beneficios-bg" title="Benefícios Helbor👌" />
      <BeneficiosRecursos />
      <BeneficiosAgilidade />
      <BeneficiosConectividade />
      <BeneficiosInovacao />
      <BeneficiosExtras />
      <BeneficiosRevolucao />
      <HomeGente />
      <FooterAtualizado />
    </div>
  );
}
