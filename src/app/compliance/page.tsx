import dynamic from "next/dynamic";
import { FooterAtualizado, Texto } from "@/components";
import TextoResource from "@/resources/textoResource";
import _ from "lodash";

export default async function Page({ searchParams }) {
  const { slug } = searchParams;

  const response = await TextoResource.get(slug);

  return (
    <div className="overflow-hidden">
      <Texto data={_.get(response.data, "data")} />
      <FooterAtualizado />
    </div>
  );
}
