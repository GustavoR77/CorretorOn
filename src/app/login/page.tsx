import dynamic from "next/dynamic";

import { Login } from "@/components";

export default function Page() {
  return (
    <div className="overflow-hidden">
      <Login />
    </div>
  );
}
