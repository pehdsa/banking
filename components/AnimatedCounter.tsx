"use client";

import React from 'react';
import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
    return (
        <div className="w-full">
            <CountUp 
                duration={1.5}
                separator="."
                decimals={2}
                decimal=","
                prefix="$ "
                end={amount} 
            />
        </div>
    )
}

export default AnimatedCounter