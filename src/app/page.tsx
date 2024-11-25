import { FooterAtualizado, Hero } from "@/components";
import { HomeFerramenta } from "@/components";
import { HomePotencialize } from "@/components";
import { HomeFunciona } from "@/components";
import { HomeGente } from "@/components";


export default function Home() {

  return (
    <main className="overflow-hidden">
      <Hero bg="hero-bg" />
      <HomeFerramenta />
      <HomePotencialize />
      <HomeFunciona />
      <HomeGente />
      <FooterAtualizado />
    </main>
  );
}
