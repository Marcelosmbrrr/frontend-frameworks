"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    if (count === 0) {
      alert("Componente montado.");
    } else if (count > 0) {
      alert("Componente atualizado.");
    }

    return () => {
      alert("Componente desmontado");
    };
  }, [count]);

  return (
    <section>
      <div className="max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <h1 className="font-bold text-xl">Use Effect</h1>
      </div>
      <div className="my-5 space-y-2">
        <div>
          <p>
            Refere-se a um hook que é executado quando o componente é
            montado, quando as dependências declaradas no array de dependências
            atualizam e quando o componente é desmontado.
          </p>
        </div>
        <div>
          <pre className="bg-gray-100 p-4 rounded">
            <code>
              {`const [count, setCount] = React.useState<number>(0);

React.useEffect(() => {
  if(count === 0) {
    alert("Componente montado.");
  } else if(count > 0) {
    alert("Componente atualizado.");   
  }
  
  return () => {
      alert("Componente desmontado");
    };
},[count]);
`}
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
