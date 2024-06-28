
import Image from 'next/image';
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { redirect } from "next/navigation";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const loggedIn = await getLoggedInUser();
    if(!loggedIn) redirect('/sign-in');

    return (
        <main className="w-full min-h-screen flex">
            <Sidebar user={ loggedIn } />
            <div className="flex size-full flex-col flex-grow">
                <div className="root-layout">
                    <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
                    <div>
                        <MobileNav user={ loggedIn } />
                    </div>
                </div>
                { children }
            </div>
        </main>
    );
}