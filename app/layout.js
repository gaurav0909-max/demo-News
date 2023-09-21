import Authprovider from "@/components/Authprovider/Authprovider";
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "./context/AuthContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Media Magnet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://www.freeiconspng.com/thumbs/news-icon/news-icon-24.png"
        />
      </head>
      <body className={inter.className}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
