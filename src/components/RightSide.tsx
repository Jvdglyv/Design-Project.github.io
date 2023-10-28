import React, { ReactNode } from 'react';
import "./RightSide.css"

export const RightSide = ({ children }: { children: ReactNode }) => {
    return (
        <div className={"right-side"}>
            {children}
        </div>
    );
};