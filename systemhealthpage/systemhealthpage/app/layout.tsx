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
    <html lang="en" className="dark scroll-smooth">
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

              document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                  e.preventDefault();
                  const targetId = this.getAttribute('href').slice(1);
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    const navbarHeight = 64; // Height of the fixed navbar
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    window.scrollTo({
                      top: targetPosition,
                      behavior: 'smooth'
                    });
                  }
                });
              });
            });
          `
        }} />
      </body>
    </html>
  )
}

