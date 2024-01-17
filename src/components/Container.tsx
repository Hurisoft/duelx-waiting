import React from 'react';

function Container({children, className}: {children: React.ReactNode, className?: string}) {
    return (
        <div className={`mx-auto max-w-7xl px-4 py-8 2xl:px-0 ${className}`}>
            {children}
        </div>
    );
}

export default Container;