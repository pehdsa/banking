"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Footer from './Footer';

const Sidebar = ({ user }: SiderbarProps) => {
    const pathName = usePathname();

    return (
        <aside className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link 
                    href="/" 
                    className="flex mb-12 cursor-pointer items-center gap-2"
                >
                    <Image 
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt='Horizon Logo'
                        className="size-[24] max-xl:size-14"
                    />
                    <h1 className="sidebar-logo">Horizon</h1>
                </Link>

                { sidebarLinks.map((item, i) => {
                    const isActive = pathName === item.route;
                    return (
                        <Link 
                            key={i}
                            href={ item.route }
                            className={cn('sidebar-link text-gray-700', {
                                'bg-bank-gradient': isActive,
                            })}
                        >
                            <div className='relative size-6'>
                                <Image src={ item.imgURL } fill alt={ item.label } className={cn({ 'brightness-[3] invert-0': isActive })} />
                            </div>
                            <p className={cn('sidebar-label', { '!text-white': isActive })}>
                                { item.label }
                            </p>
                        </Link>
                    )
                })}
                USER
            </nav>
            

            <Footer user={ user } />
        </aside>
    )
}

export default Sidebar
