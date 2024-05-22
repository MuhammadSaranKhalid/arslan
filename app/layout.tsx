import Meta from "@/components/Meta";
import "./globals.css";
import { Roboto } from "next/font/google";
// import Navigation from "@/components/Navigation";
import Providers from "@/lib/provider";
// import Footer from "@/components/Footer";
// import Link from "next/link";
// import Image from "next/image";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
// import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
});

export const metadata = {
  ...Meta({}),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`} suppressHydrationWarning={true}>
        <Toaster position="top-right" expand={true} richColors />

        <Providers>
          <TooltipProvider>{children}</TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
