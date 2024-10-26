"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [count, setCount] = React.useState<number>(0);

  return (
    <section className="max-w-7xl">
      <div className="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <h1 className="font-bold text-xl">Use State</h1>
      </div>
      <div className="my-5 space-y-2">
        <div>
          <p>
            State refere-se a um objeto que contém informações sobre o
            componente que podem mudar ao longo do tempo. Ele é crucial para
            criar interfaces de usuário dinâmicas e interativas.
          </p>
        </div>
        <div>
          <pre className="bg-gray-100 p-4 rounded">
            <code>
              {`const [count, setCount] = React.useState<number>(0);
-----
<Button onClick={() => setCount((current_value) => current_value + 1)}>Plus 1</Button>
<p>Contador: {count}</p>`}
            </code>
          </pre>
        </div>
      </div>
      <div className="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <h1 className="font-bold text-xl">Aplicação</h1>
      </div>
      <div className="my-5 flex items-center space-x-2">
        <Button onClick={() => setCount((current_value) => current_value + 1)}>
          Plus 1
        </Button>
        <p>Contador: {count}</p>
      </div>
    </section>
  );
}
