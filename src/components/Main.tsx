import {NavigationBar} from "./NavigationBar";
import {LeftSide} from "./LeftSide";
import {RightSide} from "./RightSide";
import React, {ReactNode, useState} from "react";
import {Data1_1} from "../explanations/1_1";
import "./Main.css"
import {Menu, MenuItem, SubMenu} from "react-pro-sidebar";
import {Data1_2} from "../explanations/1_2";
import {Data2} from "../explanations/2";

export const Main = () => {
    const [selectedText, setSelectedText] = useState<ReactNode>(Data1_1);
    return (
        <>
            <NavigationBar></NavigationBar>
            <div className={"main"}>
                <LeftSide>
                    <Menu>
                        <SubMenu label="1. What is Blockchain?">
                            <MenuItem onClick = {() => setSelectedText(Data1_1)}> 1.1 - What is blockchain?</MenuItem>
                            <MenuItem onClick = {() => setSelectedText(Data1_2)}> 1.2 - History of blockchain </MenuItem>
                            <MenuItem> 1.3 - How does blockchain work? </MenuItem>
                        </SubMenu>
                        <MenuItem onClick = {() => setSelectedText(Data2)}>2. Proofs</MenuItem>
                        <MenuItem>3. Smart Contracts</MenuItem>
                    </Menu>
                </LeftSide>
                <RightSide>
                    {selectedText}
                </RightSide>
            </div>
        </>
    )
}