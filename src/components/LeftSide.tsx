import React, {ReactNode} from "react";
import "./LeftSide.css"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
export const LeftSide = ({ children }: { children: ReactNode }) => {
    return (
        <Sidebar className={"left-side"}>
            {children}
        </Sidebar>
    );
}
