
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
 
export default async function Home() {
    
    const loggedIn = await getLoggedInUser();
    if (!loggedIn) redirect('/sign-in');

    console.log('loggedIn', loggedIn);

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        title={ <div>Welcome, <span className="text-bankGradient">{ loggedIn?.name || 'Guest' }</span></div> } 
                        subtitle="Access & manage your account and transactions efficiently." 
                    />                    
                    <TotalBalanceBox 
                        accounts={[]}
                        totalBanks={1}
                        totalCurrenceBalance={1250.35}
                    />
                </header>

                RECENT TRANSACTIONS
            </div>

            <RightSidebar 
                user={ loggedIn }
                transactions={[]}
                banks={[{ currentBalance: 123.50 }, { currentBalance: 123.50 }]}
            />
        </section>
    );
}
