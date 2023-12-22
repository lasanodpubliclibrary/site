import localFont from "next/font/local";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fontHeading = localFont({
  src: "./assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export { inter, fontHeading };
