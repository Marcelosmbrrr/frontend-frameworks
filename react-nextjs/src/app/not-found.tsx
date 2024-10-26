import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Página não encontrada.</h2>
      <Link className="underline" href="/components">Voltar</Link>
    </div>
  );
}
