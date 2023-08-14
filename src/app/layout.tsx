import TextField from "@/components/common/TextField";
import "./globals.css";
import { Poppins } from "next/font/google";
import clsx from "clsx";
import { Search } from "react-feather";
import QueryProvider from "@/QueryProvider";
import NavBar from "@/components/layout/NavBar";

const inter = Poppins({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          <main className="pt-28">{children}</main>
        </body>
      </html>
    </QueryProvider>
  );
}
