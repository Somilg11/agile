import {Inter} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Logo from "@/components/logo";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Agile",
  description: "Workflow management tool",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: shadesOfPurple,
      variables: {
        colorPrimary: "#3b82f6",
        colorBackground: "#1a202c",
        colorInputBackground: "#2D3748",
        colorInputText: "#F3F4F6",
      },
      elements: {
        formButtonPrimary: " text-white",
        card: "bg-gray-800",
        headerTitle: "text-blue-400",
        headerSubtitle: "text-gray-400",
      },
    }}
    >
    <html lang="en">
      <body
        className={`${inter.className} animated-dotted-background`} 
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header  */}
            <Header/>
            {/* main  */}
            <main className="min-h-screen">
            {children}
            </main>
            {/* footer  */}
            <footer className="bg-black text-white p-4">
              <div className="container mx-auto">
                <div className="flex justify-between items-center">
                <h1 className="text-4xl"><span className="flex items-center gap-1 font-bold"><Logo size={36}/>AGILE</span></h1>
                <h1 className="text-sm">© 2025 Agile. All rights reserved.</h1>
                </div>
              </div>
            </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
