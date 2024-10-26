"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <section>
      <div className="max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <h1 className="font-bold text-xl">Use Ref</h1>
      </div>
      <div className="my-5">
        <p>
          É um hook que permite criar uma referência mutável que persiste
          durante todo o ciclo de vida do componente.
        </p>
        <p>
          Ele é frequentemente utilizado para acessar elementos do DOM
          diretamente ou para armazenar valores que não precisam causar uma nova
          renderização quando mudam.
        </p>
      </div>
      <pre className="bg-gray-100 p-4 rounded">
        <code>
          {`const inputRef = React.useRef(null);

const handleFocus = () => {
  inputRef.current.focus();
};

return (
  <div>
    <input ref={inputRef} type="text" placeholder="Clique no botão para focar" />
    <Button onClick={handleFocus}>Focar no Input</Button>
  </div>
);
`}
        </code>
      </pre>
    </section>
  );
}
