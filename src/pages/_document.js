import { Html, Head, Main, NextScript } from "next/document";
import { josefinSans } from "./_app";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={`${josefinSans.className} selection:bg-[#f28600] selection:text-black`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
