"use client";

import Link from "next/link";
import {
  Home,
  RefreshCcwDot,
  SquareFunction,
  Menu,
  Package2,
  Atom
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAppName } from "@/context/appName";

export function Header() {
  const { appName } = useAppName();

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Atom className="h-6 w-6" />
              <span className="sr-only">{appName}</span>
            </Link>
            <Link
              href="/introduction"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <Home className="h-5 w-5" />
              Introdução
            </Link>
            <Link
              href="/life-cycle"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <RefreshCcwDot className="h-5 w-5" />
              Ciclo de Vida
            </Link>
            <span className="mx-[-0.65rem] flex items-center gap-3 rounded-xl px-3 py-2 text-muted-foreground">
              Hooks Básicos
            </span>
            <Link
              href="/use-state"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <SquareFunction className="h-5 w-5" />
              Use State
            </Link>
            <Link
              href="/use-effect"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <SquareFunction className="h-5 w-5" />
              Use Effect
            </Link>
            <Link
              href="/use-context"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <SquareFunction className="h-5 w-5" />
              Use Context
            </Link>
            <Link
              href="/use-reducer"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <SquareFunction className="h-5 w-5" />
              Use Reducer
            </Link>
            <Link
              href="/use-ref"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <SquareFunction className="h-5 w-5" />
              Use Ref
            </Link>
            <span className="mx-[-0.65rem] flex items-center gap-3 rounded-xl px-3 py-2 text-muted-foreground">
              Hooks para Performance
            </span>
            <Link
              href="/use-deferred-value"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <SquareFunction className="h-5 w-5" />
              Use Deferred Value
            </Link>
            <Link
              href="/memo"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <SquareFunction className="h-5 w-5" />
              Memo
            </Link>
            <Link
              href="/use-memo"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <SquareFunction className="h-5 w-5" />
              Use Memo
            </Link>
            <Link
              href="/use-callback"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <SquareFunction className="h-5 w-5" />
              Use Callback
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
