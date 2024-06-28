import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BankCard from './BankCard';

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
    return (
        <aside className='right-sidebar'>
            <section className='flex flex-col'>
                <div className='profile-banner' />

                <div className='profile'>
                    <div className='profile-img'>
                        <span className="text-5xl font-bold text-blue-500">{ user.name.charAt(0) }</span>
                    </div>
                    <div className="profile-details">
                        <h2 className='profile-name'>{ user.name }</h2>
                        <p className='profile-email'>{ user.email }</p>
                    </div>
                </div>
            </section>

            <section className='banks'>
                <div className='flex w-full justify-between'>
                    <h2 className='header-2'>My banks</h2>
                    <Link href="/" className='flex gap-2'>
                        <Image src="/icons/plus.svg" width={20} height={20} alt='plus' />
                        <span className='text-14 font-semibold text-gray-600'>Add Bank</span>
                    </Link>
                </div>
                { banks?.length > 0 && (
                    <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
                        <div className='w-full z-10'>
                        <BankCard 
                            key={banks[0].id} 
                            account={banks[0]}
                            userName={ user.name }
                            showBalance={false}                        
                        />
                        </div>
                        { banks[1] && (
                            <div className='absolute top-8 right-0 z-0 w-full pl-4'>
                                <BankCard 
                                    key={banks[1].id} 
                                    account={banks[1]}
                                    userName={`${ user.name }`}
                                    showBalance={false}
                                />
                            </div>
                        ) }
                    </div>
                ) }
            </section>

        </aside>
    )
}

export default RightSidebar
