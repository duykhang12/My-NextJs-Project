import { Signup } from '@/app/ui/signup'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Signup />
        <main>{children}</main>
      </body>
    </html>
  )
}