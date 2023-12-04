import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Aman Kawatra",
  description: "My Personal Portfolio Website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-clr-background">
        <main>{children}</main>
      </body>
    </html>
  )
}
