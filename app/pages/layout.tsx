import "./../globals.css";

export const metadata = {
  title: "Login",
  description: "Masuk terlebih dahulu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* body */}
        {children}
      </body>
    </html>
  );
}
