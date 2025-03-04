import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lucas Becker | Full Stack Java & React Developer | Software Engineer",
  description: "Portfolio of Lucas Becker, a Software Engineer specializing in Java, Spring Boot, React, TypeScript, and full-stack web development. Experienced in building scalable applications and teaching coding skills.",
  generator: 'v0.dev',
  keywords: [
    "Lucas Becker",
    "Software Engineer",
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot",
    "React Developer",
    "TypeScript",
    "Web Development",
    "Hibernate",
    "Maven",
    "MySQL",
    "Tailwind CSS",
    "Next.js",
    "Frontend Development",
    "Backend Development",
    "RESTful APIs",
    "Coding Instructor",
    "Project Management",
    "Software Development",
    "UI/UX Design"
  ],
  authors: [
    {
      name: "Lucas Becker",
      url: "https://github.com/lucasbecker-dev",
    },
  ],
  creator: "Lucas Becker",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lucasbecker-dev.github.io",
    title: "Lucas Becker | Full Stack Java & React Developer",
    description: "Portfolio of Lucas Becker, a Software Engineer specializing in Java, Spring Boot, React, TypeScript, and full-stack web development.",
    siteName: "Lucas Becker Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Becker | Full Stack Java & React Developer",
    description: "Portfolio of Lucas Becker, a Software Engineer specializing in Java, Spring Boot, React, TypeScript, and full-stack web development.",
    creator: "@lucasbecker_dev",
  },
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL("https://lucasbecker-dev.github.io"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="your-verification-code" />
        <link rel="canonical" href="https://lucasbecker-dev.github.io" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'