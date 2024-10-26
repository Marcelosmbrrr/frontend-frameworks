"use client";

export default function Page() {
  return (
    <article className="max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
      <h1 className="font-bold text-xl">Introdução</h1>
      <div className="my-5 space-y-2">
        <h2 className="font-bold text-lg">Componentes</h2>
        <p>
          No React, a interface é construída a partir de componentes. Cada
          componente encapsula uma parte da UI, permitindo que você defina sua
          lógica e aparência de forma isolada.
        </p>
        <h2 className="font-bold text-lg">JSX</h2>
        <p>
          JSX é uma extensão de sintaxe para JavaScript que permite escrever
          elementos e componentes React de forma semelhante ao HTML, combinando
          a lógica de programação do JS com a estrutura de apresentação do HTML.
        </p>
        <h2 className="font-bold text-lg">Virtual DOM (vDOM)</h2>
        <p>
          O DOM Virtual é uma representação leve na memória do DOM (Document
          Object Model) real. Ele serve como uma cópia virtual do DOM real,
          permitindo que o React atualize e manipule com eficiência a interface
          do usuário sem interagir diretamente com o DOM do navegador.
        </p>
        <h2 className="font-bold text-lg">Algoritmo de Reconciliação</h2>
        <p>
          Quando você faz alterações em seus componentes do React, em vez de
          atualizar diretamente o DOM, o React primeiro atualiza o DOM Virtual.
          Em seguida, ele executa um processo chamado "reconciliação", onde
          calcula a diferença (ou "diff") entre o DOM Virtual anterior e o
          atualizado. Finalmente, o React aplica apenas as alterações
          necessárias ao DOM real.
        </p>
        <h2 className="font-bold text-lg">Imutabilidade</h2>
        <p>
          No React, a imutabilidade é a prática de nunca modificar objetos ou
          arrays existentes diretamente. Em vez disso, são criadas novas
          instâncias com as alterações desejadas para que com isso sejam criadas novas referências e o React possa saber o que foi alterado.
        </p>
      </div>
    </article>
  );
}
