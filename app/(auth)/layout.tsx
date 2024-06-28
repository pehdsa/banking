import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="grid grid-cols-2 min-h-screen">
            <div className="w-full h-full flex items-center justify-center">
                { children }
            </div>
            <div className="auth-asset">
                <div>
                    <Image src="/icons/auth-image.svg" alt="Auth image" width={500} height={500} />
                </div>
            </div>
        </main>
    );
}
