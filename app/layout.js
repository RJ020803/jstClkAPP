import "./global.css";
import Nav from "../components/Nav";


export const metadata = {
  title: "JstClk",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Nav />
        <main className="container mx-auto p-10">
          {children}
          </main>
      </body>
    </html>
  );
}
