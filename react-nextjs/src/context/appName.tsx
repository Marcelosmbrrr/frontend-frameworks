"use client";

import * as React from "react";

interface Context {
  appName: string;
  rename: (new_name: string) => void;
  reset: () => void;
}

export const AppNameContext = React.createContext<Context>({} as Context);

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

export function useAppName() {
  return React.useContext(AppNameContext);
}
