import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Audiowide } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const aurora = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-aurora",
})

export const metadata: Metadata = {
  title: "个人作品集 | 创意设计与开发",
  description: "一名专注于创意设计与前端开发的作品集，展示项目案例、技能与联系方式。",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${aurora.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
