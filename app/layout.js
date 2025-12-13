import { Geist, Geist_Mono, robo } from "next/font/google";
import '@/_style/global.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "danel_mott",
  description: "el mejor programador de su casa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
