import "./globals.css";
import { Poppins, Vazirmatn } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-vazirmatn",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      className={`${poppins.variable} ${vazirmatn.variable} h-full antialiased`}
     dir="rtl">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: "Starweather",
  description: "Weather forecast application",
};