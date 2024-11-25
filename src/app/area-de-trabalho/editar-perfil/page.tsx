import dynamic from "next/dynamic";

import { EditarPerfil } from "@/components";

export default function Page() {
  return (
    <div className="overflow-hidden">
      <EditarPerfil />
    </div>
  );
}
