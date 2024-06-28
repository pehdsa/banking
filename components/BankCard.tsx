import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatAmount } from '@/lib/utils';

const BankCard = ({ account, userName, showBalance = true }: CreditCardProps) => {
    return (
        <div className="flex flex-col w-full">
            <Link
                href="/"
                className="bank-card"
            >
                <div className='bank-card_content'>
                    <div>
                        <h3 className='text-16 font-semibold text-white'>
                            { account.name || userName }
                        </h3>
                        <p className='font-ibm-plex-serif font-black text-white'>
                            { formatAmount(account.currentBalance) }
                        </p>
                    </div>

                    <article className="flex flex-col gap-2">
                        <div className='flex justify-between'>
                            <h4 className='text-12 font-semibold text-white'>{ userName }</h4>
                            <h5 className='text-12 font-semibold text-white'>** / **</h5>
                        </div>
                        <p className='text-14 font-semibold tracking-[1.1px] text-white'>
                            **** **** **** <span className='text-16'>{ account.mask }</span>
                        </p>
                    </article>
                </div>

                <div className='relative bank-card_icon'>
                    <Image 
                        src="/icons/Paypass.svg"
                        width={20}
                        height={20}
                        alt='Paypass'
                    />
                    <Image 
                        src="/icons/mastercard.svg"
                        width={24}
                        height={32}
                        alt='mastercard'
                        className='ml-5'
                    />
                </div>

                <Image 
                    src="/icons/lines.svg"
                    width={316}
                    height={190}
                    alt='lines'
                    className='absolute top-0 left-0'
                />
            </Link>
            {/* COPY */}
        </div>
    )
}

export default BankCard
