import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "tempmail",
  description: "10 minutes temporary email.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
