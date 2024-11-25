import dynamic from "next/dynamic";

import { BlogSinglePost, FooterAtualizado, BeneficiosRevolucao } from "@/components";

export default function Page() {
  return (
    <div className="overflow-hidden">
      <BlogSinglePost />
      <BeneficiosRevolucao />
      <FooterAtualizado />
    </div>
  );
}
