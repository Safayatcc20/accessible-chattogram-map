import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return <main className="min-h-[calc(100vh-4rem)]">{children}</main>;
}
