"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <section>
      <div className="max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <h1 className="font-bold text-xl">Use Reducer</h1>
      </div>
      <div className="my-5">
        <div>
          <p>
            É um hook que permite gerenciar o estado em componentes de forma
            mais robusta, especialmente quando o estado é complexo ou depende de
            ações. Ele é semelhante ao `useState`, mas usa um padrão de reducer,
            que é útil para lidar com múltiplos estados.
          </p>
          <p>
            O hook recebe um redutor (função que determina como o estado deve
            mudar com base em ações) e um estado inicial. Ele retorna o estado
            atual e uma função dispatch para enviar ações.
          </p>
        </div>
        <div>
          <pre className="bg-gray-100 p-4 rounded">
            <code>
              {`const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const [state, dispatch] = React.useReducer(reducer, initialState);

// Para usar:
<Button onClick={() => dispatch({ type: 'increment' })}>Incrementar</Button>
<Button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</Button>
`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
