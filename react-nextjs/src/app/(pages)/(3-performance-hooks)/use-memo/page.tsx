import * as React from "react";

export default function Page() {
  return (
    <section className="max-w-7xl">
      <div className="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <h1 className="font-bold text-xl">Use Memo</h1>
      </div>
      <div className="my-5 space-y-2">
        <div>
          <p>
            É um hook que permite armazenar em cache o resultado de um cálculo
            entre novas renderizações. Ou seja, se o componente for atualizado,
            o cálculo não é realizado novamente.
          </p>
          <p>
            Assim como o useEffect, o useMemo aceita um array de dependências.
            Neste caso, o cálculo será realizado novamente apenas se suas
            dependências mudarem.
          </p>
        </div>
        <div>
          <pre className="bg-gray-100 p-4 rounded">
            <code>
              {`const cachedValue = useMemo(() => a + b, [a,b])`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
