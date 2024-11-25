import dynamic from "next/dynamic";

import { EmpreendimentosHero, FooterAtualizado } from "@/components";

import { EmpreendimentosDescricao } from "@/components";

import { HomeGente } from "@/components";

import EmpreendimentoResource from "@/resources/empreendimentoResource";
import _ from "lodash";
import { IEmpreendimento } from "@/types";
import { redirect } from "next/navigation";

var loaded = false;

export default async function Page({ params }: { params: any }) {
  var produto: IEmpreendimento;
  try {
    const response = await EmpreendimentoResource.find(_.get(params, "id"));
    produto = response.data;
  } catch (error) {
    redirect("/404");
  }

  return (
    <div className="overflow-hidden">
      <EmpreendimentosHero bg="hero-empreendimentos-bg" produto={produto} />
      <EmpreendimentosDescricao produto={produto} />
      <HomeGente />
      <FooterAtualizado />
    </div>
  );
}
