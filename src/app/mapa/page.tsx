import dynamic from "next/dynamic";

import { FooterAtualizado, Mapa } from "@/components";

export default function Page() {
  return (
    <div className="overflow-hidden">
      <Mapa />
      <FooterAtualizado />
    </div>
  );
}
