import dynamic from "next/dynamic";

import { BlogCategoria, FooterAtualizado, BeneficiosRevolucao } from "@/components";

export default function Page() {
  return (
    <div className="overflow-hidden">
      <BlogCategoria />
      <BeneficiosRevolucao />
      <FooterAtualizado />
    </div>
  );
}
