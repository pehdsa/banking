import React from 'react';

const HeaderBox = ({ title, subtitle }: { title?: string | React.ReactNode, subtitle?: string }) => {
    return (
        <div className="header-box">
            <h2 className="header-box-title">{ title }</h2>
            <p className="header-box-subtext">{ subtitle }</p>
        </div>
    )
}

export default HeaderBox