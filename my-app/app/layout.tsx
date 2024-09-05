export default function Layout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
          {team}
          {analytics}
        </main>
      </body>
    </html>
  );
}
