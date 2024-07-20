import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets:["latin"],weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "ShopX",
  description: "Your shopping App"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${poppins.className}`}>
        <Navbar/>
        <div className="min-h-[calc(100vh-16rem)] px-6 md:px-12 lg:px-24 ">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
