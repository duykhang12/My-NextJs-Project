"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Links() {
  const pathname = usePathname();

  return (
    <nav>
      <Link
        className={`link ${pathname === "/" ? "active" : ""}`}
        href="/"
        style={{ margin: 10 }}
      >
        Home
      </Link>

      <Link
        className={`link ${pathname === "/dashboard" ? "active" : ""}`}
        href="/dashboard"
      >
        Dashboard
      </Link>
    </nav>
  );
}
