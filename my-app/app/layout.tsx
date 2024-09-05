import { Links } from "@/app/ui/nav-links";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Links />
        <main>{children}</main>
      </body>
    </html>
  );
}
