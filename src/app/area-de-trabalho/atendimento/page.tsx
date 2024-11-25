import dynamic from "next/dynamic";

import { Atendimento } from "@/components";

export default function Page() {
  return (
    <div className="overflow-hidden">
      <Atendimento />
    </div>
  );
}
