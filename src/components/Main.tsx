import {NavigationBar} from "./NavigationBar";
import {LeftSide} from "./LeftSide";
import {RightSide} from "./RightSide";
import React, {ReactNode, useState} from "react";
import {Data1_1} from "../explanations/1_1";
import "./Main.css"
import {Menu, MenuItem, SubMenu} from "react-pro-sidebar";
import {Data1_2} from "../explanations/1_2";
import {Data2} from "../explanations/2";
import {Data2_1} from "../explanations/2_1";
import {Data2_3} from "../explanations/2_3";
import {Data2_4} from "../explanations/2_4";
import {Data2_5} from "../explanations/2_5";
import {Data2_2} from "../explanations/2_2";

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
                        <SubMenu label="2. Proofs">
                            <MenuItem onClick = {() => setSelectedText(Data2_1)}>2.1 Proof of Work</MenuItem>
                            <MenuItem onClick = {() => setSelectedText(Data2_2)}>2.2 Proof of Stake</MenuItem>
                            <MenuItem onClick = {() => setSelectedText(Data2_3)}>2.3 Proof of Activity</MenuItem>
                            <MenuItem onClick = {() => setSelectedText(Data2_4)}>2.4 Proof of Burn</MenuItem>
                            <MenuItem onClick = {() => setSelectedText(Data2_5)}>2.5 Proof of Capacity</MenuItem>
                        </SubMenu>
                        
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