"use client";

import * as React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Atom, SquareFunction, RefreshCcwDot, House } from "lucide-react";

import { useAppName } from "@/context/appName";

export function Sidebar() {
  //
  const { appName } = useAppName();
  const pathname = usePathname();
  return (
    <aside className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Atom className="h-6 w-6" />
            <span className="">{appName}</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <span className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all">
              Introdução
            </span>
            <Link
              href="/introduction"
              className={`flex items-center gap-3 rounded-lg ${
                pathname === "/introduction"
                  ? "text-sky-400"
                  : "hover:text-primary"
              } px-3 py-2 text-primary transition-all`}
            >
              <House className="h-4 w-4" />
              Introdução
            </Link>
            <Link
              href="/life-cycle"
              className={`flex items-center gap-3 rounded-lg ${
                pathname === "/life-cycle"
                  ? "text-sky-400"
                  : "hover:text-primary"
              } px-3 py-2 text-primary transition-all`}
            >
              <RefreshCcwDot className="h-4 w-4" />
              Ciclo de Vida
            </Link>
            <span className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all">
              Hooks Básicos
            </span>
            <Link
              href="/use-state"
              className={`flex items-center gap-3 rounded-lg ${
                pathname === "/use-state"
                  ? "text-sky-400"
                  : "hover:text-primary"
              } px-3 py-2 text-primary transition-all`}
            >
              <SquareFunction className="h-4 w-4" />
              Use State
            </Link>
            <Link
              href="/use-effect"
              className={`flex items-center gap-3 rounded-lg ${
                pathname === "/use-effect"
                  ? "text-sky-400"
                  : "hover:text-primary"
              } px-3 py-2 text-primary transition-all`}
            >
              <SquareFunction className="h-4 w-4" />
              Use Effect
            </Link>
            <Link
              href="/use-context"
              className={`flex items-center gap-3 rounded-lg ${
                pathname === "/use-context"
                  ? "text-sky-400"
                  : "hover:text-primary"
              } px-3 py-2 text-primary transition-all`}
            >
              <SquareFunction className="h-4 w-4" />
              Use Context
            </Link>
            <Link
              href="/use-reducer"
              className={`flex items-center gap-3 rounded-lg ${
                pathname === "/use-reducer"
                  ? "text-sky-400"
                  : "hover:text-primary"
              } px-3 py-2 text-primary transition-all`}
            >
              <SquareFunction className="h-4 w-4" />
              Use Reducer
            </Link>
            <Link
              href="/use-ref"
              className={`flex items-center gap-3 rounded-lg ${
                pathname === "/use-ref" ? "text-sky-400" : "hover:text-primary"
              } px-3 py-2 text-primary transition-all`}
            >
              <SquareFunction className="h-4 w-4" />
              Use Ref
            </Link>
            <span className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all">
              Hooks para Performance
            </span>
            <Link
              href="/use-deferred-value"
              className={`flex items-center gap-3 rounded-lg ${
                pathname === "/use-deferred-value"
                  ? "text-sky-400"
                  : "hover:text-primary"
              } px-3 py-2 text-primary transition-all`}
            >
              <SquareFunction className="h-4 w-4" />
              Use Deferred Value
            </Link>
            <Link
              href="/memo"
              className={`flex items-center gap-3 rounded-lg ${
                pathname === "/memo" ? "text-sky-400" : "hover:text-primary"
              } px-3 py-2 text-primary transition-all`}
            >
              <SquareFunction className="h-4 w-4" />
              Memo
            </Link>
            <Link
              href="/use-memo"
              className={`flex items-center gap-3 rounded-lg ${
                pathname === "/use-memo" ? "text-sky-400" : "hover:text-primary"
              } px-3 py-2 text-primary transition-all`}
            >
              <SquareFunction className="h-4 w-4" />
              Use Memo
            </Link>
            <Link
              href="/use-callback"
              className={`flex items-center gap-3 rounded-lg ${
                pathname === "/use-callback"
                  ? "text-sky-400"
                  : "hover:text-primary"
              } px-3 py-2 text-primary transition-all`}
            >
              <SquareFunction className="h-4 w-4" />
              Use Callback
            </Link>
          </nav>
        </div>
      </div>
    </aside>
  );
}
