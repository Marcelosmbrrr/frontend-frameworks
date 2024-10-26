"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";

export function List({ text }: { text: string }) {
  return (
    <ul className="list-disc">
      {Array(5000)
        .fill("")
        .map((_, index) => (
          <li key={index}>Item = {text}</li>
        ))}
    </ul>
  );
}

export default function DeferredValuePage() {
  const [value, setValue] = React.useState<string>("");
  const deferredValue = React.useDeferredValue(value);

  return (
    <section className="max-w-7xl">
      <div className="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <h1 className="font-bold text-xl">Use Deferred Value</h1>
      </div>
      <div className="my-5 space-y-2">
        <div>
          <p>
            É um hook que permite atrasar a atualização de um valor até que o
            render principal da aplicação esteja completo. Isso é útil em
            situações onde um valor pode ser pesado para renderizar, como
            durante a digitação em um campo de texto.
          </p>
          <p>
            Ele ajuda a manter a interface do usuário responsiva, permitindo que
            atualizações menos críticas sejam "adiadas" até que a renderização
            principal tenha terminado.
          </p>
        </div>
        <div>
          <pre className="bg-gray-100 p-4 rounded">
            <code>
              {`const [value, setValue] = React.useState<string>("");
const deferredValue = React.useDeferredValue(value);

return (
<div className="my-5 space-y-3">
  <div>
    <Input
      type="text"
      placeholder="Digite qualquer coisa"
      onChange={(e) => setValue(e.target.value)}
    />
  </div>
  <div className="px-5">
    <List text={deferredValue} />
  </div>
</div>
);
`}
            </code>
          </pre>
        </div>
      </div>
      <div className="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <h1 className="font-bold text-xl">Aplicação</h1>
      </div>
      <div className="my-5 space-y-3">
        <p>
          Sem o hook a lista abaixo, que possui 5000 itens, seria renderizada novamente a cada novo
          dígito, travando a aplicação, e com ele apenas quando o usuário parar
          de interagir - neste caso, de digitar.
        </p>
        <div>
          <Input
            type="text"
            placeholder="Digite qualquer coisa"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="px-5">
          <List text={deferredValue} />
        </div>
      </div>
    </section>
  );
}
