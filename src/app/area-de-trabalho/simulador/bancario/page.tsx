import dynamic from "next/dynamic";

import { TabelaBancaria } from "@/components";

export default function Page() {
  return (
    <div className="overflow-hidden">
      <TabelaBancaria />
    </div> 
  );
}
