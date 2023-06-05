import "./globals.css";
import { Josefin_Sans, Alata } from "next/font/google";

export const metadata = {
  title: "tailwind + next13",
  description: "tailwind website templates practice",
};

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  weight: "400",
  display: "swap",
});
const alata = Alata({
  subsets: ["latin"],
  variable: "--font-alata",
  weight: "400",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`md:scroll-smooth ${josefinSans.className} selection:bg-[#f28600] selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
