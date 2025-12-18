import Image from "next/image";
import { IS_UNDER_CONSTRUCTION } from "@/lib/config";
import { UnderConstruction } from "@/components/under-construction";

export default function Home() {
  if (IS_UNDER_CONSTRUCTION) {
    return <UnderConstruction />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <button className="bg-brand-blue text-white px-4 py-2 rounded-lg hover:bg-brand-cyan transition">
        Comenzar
      </button>
      <div className="bg-surface border border-border p-6 rounded-xl">
        <h2 className="text-foreground font-bold">Título de la tarjeta</h2>
        <p className="text-brand-blue">Texto destacado en azul</p>
      </div>
      <h1 className="bg-brand-gradient bg-clip-text text-4xl font-bold">
        Hola Mundo
      </h1>
    </div>
  );
}
