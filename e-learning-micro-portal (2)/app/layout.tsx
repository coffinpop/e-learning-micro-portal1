import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { AIChatbot } from "@/components/ai-chatbot"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" })

export const metadata: Metadata = {
  title: "LearnC - Master C Programming",
  description:
    "A student-friendly E-Learning portal to learn C Programming with interactive notes, code examples, and quizzes.",
  keywords: ["C Programming", "Learn C", "Programming Tutorial", "Coding", "E-Learning"],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <AIChatbot />
        <Analytics />
      </body>
    </html>
  )
}
