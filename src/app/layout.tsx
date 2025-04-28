import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anshul.io"),
  title: {
    default: "Anshul Kanswal",
    template: "%s | Anshul Kanswal",
  },
  description: "Building OffScript | Advocate @HackQuest | Web3 enthusiast | Pursuing B.Tech in CSE-AIML @JSS University",
  icons: {
    icon: "/profile.jpg",
    shortcut: "/profile.jpg",
    apple: "/profile.jpg",
  },
  openGraph: {
    title: "Anshul Kanswal",
    description: "Building OffScript | Advocate @HackQuest | Web3 enthusiast | Pursuing B.Tech in CSE-AIML @JSS University",
    url: "https://anshul.io",
    siteName: "Anshul Kanswal",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Anshul Kanswal",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshul Kanswal",
    description: "Building OffScript | Advocate @HackQuest | Web3 enthusiast | Pursuing B.Tech in CSE-AIML @JSS University",
    images: ["/profile.jpg"],
    creator: "@AnshulKanswal01",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
