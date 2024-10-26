import * as React from "react";

export default function Page() {
  return (
    <section className="max-w-7xl">
      <div className="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <h1 className="font-bold text-xl">Memo</h1>
      </div>
      <div className="my-5 space-y-2">
        <div>
          <p>
            Permite pular a renderização de um componente quando suas
            propriedades ou props não forem alteradas.
          </p>
          <p>
            Ou seja, se o componente pai, por exemplo, mudar, este filho não irá atualizar se suas dependências permanecerem as mesmas.
          </p>
        </div>
        <div>
          <pre className="bg-gray-100 p-4 rounded">
            <code>
              {`const Component = memo(function SomeComponent(props) {
  // ...
});
`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
