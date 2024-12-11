import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "System Health Dashboard for GLOF Prediction",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-gray-300`}>
        {children}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', (event) => {
              const sidebar = document.querySelector('[data-sidebar]');
              const content = document.querySelector('[data-content]');
              
              const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                  if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const isCollapsed = sidebar.classList.contains('w-[60px]');
                    content.style.marginLeft = isCollapsed ? '60px' : '240px';
                  }
                });
              });
              
              observer.observe(sidebar, { attributes: true });
            });
          `
        }} />
      </body>
    </html>
  )
}

