import type { Metadata } from "next";
import "./globals.css";
import { Inter, IBM_Plex_Serif } from "next/font/google"

import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({ 
    subsets: ["latin"],
    weight: ['400','700'],
    variable: '--font-ibm-plex-serif'
});

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Horizon",
    description: "Horizon is a modern banking platform for evereone",
    icons: {
        icon: '/icon/logo.svg'
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body className={` ${ inter.variable } ${ ibmPlexSerif.variable }`}>{ children }</body>
        </html>
    );
}
