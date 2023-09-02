"use client";

import Link from "next/link";
import "./globals.css";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Aplikasi Manajemen Kariawan",
  description: "Semoga Lulus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <html lang="en">
      <body>
        <div className="header">
          <nav className="navbar bg-body-tertiary">
            <div className="container">
              <div className="logo">
                <a className="navbar-brand" href="#">
                  Navbar
                </a>
              </div>
              <div>
                <div className="row">
                  <div className="col">
                    <a className="btn btn-outline-success" href="/pages/login">
                      Login
                    </a>
                  </div>
                  <div className="col">
                    <Link
                      href="/pages/register"
                      className="text-decoration-none btn btn-primary"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* body */}
        {children}
      </body>
    </html>
  );
}
