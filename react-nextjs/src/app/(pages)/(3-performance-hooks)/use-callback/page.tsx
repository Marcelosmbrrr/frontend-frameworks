import * as React from "react";

export default function Page() {
  return (
    <section className="max-w-7xl">
      <div className="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <h1 className="font-bold text-xl">Use Callback</h1>
      </div>
      <div className="my-5 space-y-2">
        <div>
          <p>
            Permite cachear uma função evitando que ela seja renderizada ou
            recriada novamente caso suas dependências não mudarem.
          </p>
        </div>
        <div>
          <pre className="bg-gray-100 p-4 rounded">
            <code>
              {`const cachedFunction = useCallback(functionToCache, dependencies)`}
            </code>
          </pre>
        </div>
        <div>
          <p>
            Possui alguns casos de uso, como quando a função é passada para um
            componente filho que utiliza o memo. Ele não é capaz de evitar
            recriação de funções.
          </p>
        </div>
        <div>
          <pre className="bg-gray-100 p-4 rounded">
            <code>
              {`const ChildComponent = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click me</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Função cacheada // Criada apenas uma vez porque não tem dependências
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); 

  return (
    <div>
      <ChildComponent onClick={handleClick} /> 
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
};`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
