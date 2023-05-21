import "@/styles/globals.css";
import { Josefin_Sans, Alata } from "next/font/google";

export const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  weight: "400",
  display: "swap",
});
export const alata = Alata({
  subsets: ["latin"],
  variable: "--font-alata",
  weight: "400",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${josefinSans.variable} ${alata.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
