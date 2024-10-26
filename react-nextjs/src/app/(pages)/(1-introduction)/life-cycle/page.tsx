"use client";

export default function Page() {
  return (
    <article className="max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
      <h1 className="font-bold text-xl">Ciclo de Vida dos Componentes</h1>
      <div className="my-5 space-y-2">
        <h2 className="font-bold text-lg">Montagem</h2>
        <p>
          Na fase de montagem, o componente é criado e exibido pela primeira
          vez. Isso começa com a execução da função do componente, que define
          seu estado inicial e as propriedades que recebe.
        </p>
        <p>
          Durante essa fase, o React cria referências para estados e funções.
          Essas referências ajudam o React a entender o que mudou quando é
          necessário atualizar a interface.
        </p>
        <p>
          Em seguida, o React gera o Virtual DOM, que é uma versão leve da
          interface. Ele compara o novo Virtual DOM com o anterior e atualiza o
          DOM real, que é o que os usuários veem.
        </p>
        <p>
          Por fim, os efeitos colaterais programados, como os do hook useEffect,
          são executados, como chamadas a APIs ou configurações de eventos.
        </p>
        <h2 className="font-bold text-lg">Atualização ou Re-render</h2>
        <p>
          Na fase de atualização, o componente é re-executado sempre que o
          estado ou as props mudam. Isso cria um novo Virtual DOM, que é
          comparado ao anterior para identificar o que mudou.
        </p>
        <p>
          O algoritmo de reconciliação compara as referências. Se uma referência
          mudar (por exemplo, um novo objeto for criado), o React entende que
          algo foi atualizado. Se a referência continuar a mesma, ele pode pular
          a re-renderização, economizando recursos.
        </p>
        <h2 className="font-bold text-lg">Desmontagem</h2>
        <p>Desmontagem ocorre quando o componente é removido da interface.</p>
        <p>
          Se o componente não é mais necessário devido a mudanças na interface,
          como a navegação para uma nova página ou a alteração de condições que
          determinam se o componente deve ser exibido, ele será desmontado.
        </p>
      </div>
    </article>
  );
}
