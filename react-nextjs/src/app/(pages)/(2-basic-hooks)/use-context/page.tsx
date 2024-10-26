"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppName } from "@/context/appName";

export default function Page() {
  const [newName, setNewName] = React.useState("");
  const { rename, reset } = useAppName();

  return (
    <section className="max-w-7xl">
      <div className="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <h1 className="font-bold text-xl">Use Context</h1>
      </div>
      <div className="my-5 space-y-2">
        <div>
          <p>
            Context é um objeto que serve como um reservatório de dados
            compartilhados entre componentes, evitando o uso de props. Ele tem
            duas partes: o Provider e o Consumer.
          </p>
          <p>
            <b>Provider:</b> é um envolope que fornece os dados desse
            revervatório para o componente envelopado e todos abaixo dele.
          </p>
          <p>
            <b>Consumer:</b> é o hook useContext que é utilizado para consumir
            os dados no componente envelopado.
          </p>
        </div>
        <div>
          <pre className="bg-gray-100 p-4 rounded h-96 overflow-y-scroll">
            <code>
              {`// Criando o contexto
export const AppNameContext = React.createContext({});

// Criando o Provider 
export function AppNameContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [appName, setAppName] = React.useState("Reactjs");

  function rename(new_name: string) {
    setAppName(new_name);
  }

  function reset() {
    setAppName("Reactjs");
  }

  return (
    <AppNameContext.Provider value={{ appName, rename, reset }}>
      {children}
    </AppNameContext.Provider>
  );
}

// Hook para usar o contexto
export function useAppName() {
  return React.useContext(AppNameContext);
}

----------------

Assim, qualquer children tem acesso ao contexto.

const MyApp = ({ children }) => {
  return (
    <AppNameContextProvider>
      {children}
    </AppNameContextProvider>
  );
};
          `}
            </code>
          </pre>
        </div>
      </div>
      <div className="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <h1 className="font-bold text-xl">Aplicação</h1>
      </div>
      <div className="my-5 space-y-2">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            placeholder="Alterar nome da aplicação"
            onChange={(e) => setNewName(e.target.value)}
          />
          <Button type="submit" onClick={() => rename(newName)}>
            Confirmar
          </Button>
          <Button type="submit" onClick={reset}>
            Resetar
          </Button>
        </div>
      </div>
    </section>
  );
}
