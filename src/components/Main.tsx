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
import {Data2_6} from "../explanations/2_6";
import {Data3_1} from "../explanations/3_1";
import {Data3_2} from "../explanations/3_2.";
import {Data4} from "../explanations/4";
import {Data5} from "../explanations/5";
import {Data1_4} from "../explanations/1_4";
import {Data1_3} from "../explanations/1_3";
import {Data3_3} from "../explanations/3_3";
import {Data1_5} from "../explanations/1_5";
import {Data1_6} from "../explanations/1_6";
import {Data1_7} from "../explanations/1_7";
import {Data1_8} from "../explanations/1_8";
import {Data1_15} from "../explanations/1_15";
import {Data1_9} from "../explanations/1_9";
import {Data1_10} from "../explanations/1_10";
import {Data6} from "../explanations/6.";
import {Data7} from "../explanations/7";

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
                            <MenuItem onClick = {() => setSelectedText(Data1_2)}> 1.2 - Where to use blockchain technology</MenuItem>
                            <MenuItem onClick = {() => setSelectedText(Data1_3)}> 1.3 - How does blockchain work?</MenuItem>
                            <MenuItem onClick = {() => setSelectedText(Data1_4)}> 1.4 - Features of blockchain</MenuItem>
                            <MenuItem onClick = {() => setSelectedText(Data1_5)}> 1.5 - Transaction Process</MenuItem>
                            <MenuItem onClick = {() => setSelectedText(Data1_6)}> 1.6 - Blockchain Decentralization</MenuItem>
                            <MenuItem onClick = {() => setSelectedText(Data1_7)}> 1.7 - The Raiden Network</MenuItem>
                            <MenuItem onClick = {() => setSelectedText(Data1_8)}> 1.8 - Bitcoin Lightning Network</MenuItem>
                            <MenuItem onClick = {() => setSelectedText(Data1_9)}> 1.9 - SEGWIT</MenuItem>
                            <MenuItem onClick = {() => setSelectedText(Data1_10)}> 1.10 - Bitcoin Bug</MenuItem>
                            <MenuItem onClick = {() => setSelectedText(Data1_15)}> 1.15 - Other Blockchain Links</MenuItem>
                        </SubMenu>
                        <SubMenu label="2. Proofs">
                            <MenuItem onClick = {() => setSelectedText(Data2_1)}>2.1 Proof of Work</MenuItem>
                            <MenuItem onClick = {() => setSelectedText(Data2_2)}>2.2 Proof of Stake</MenuItem>
                            <MenuItem onClick = {() => setSelectedText(Data2_3)}>2.3 Proof of Activity</MenuItem>
                            <MenuItem onClick = {() => setSelectedText(Data2_4)}>2.4 Proof of Burn</MenuItem>
                            <MenuItem onClick = {() => setSelectedText(Data2_5)}>2.5 Proof of Capacity</MenuItem>
                            <MenuItem onClick = {() => setSelectedText(Data2_6)}>2.6 Proof of Elapsed Time</MenuItem>
                        </SubMenu>
                        <SubMenu label="3. Some theorems">
                            <MenuItem onClick = {() => setSelectedText(Data3_1)}>3.1 The Cap Theorem</MenuItem>
                            <MenuItem onClick = {() => setSelectedText(Data3_2)}>3.2 Byzantine Generals Problem</MenuItem>
                            <MenuItem onClick = {() => setSelectedText(Data3_3)}>3.3 Zero-Knowledge Proof</MenuItem>
                        </SubMenu>
                        <MenuItem onClick = {() => setSelectedText(Data4)}>4. Smart Contracts</MenuItem>
                        <MenuItem onClick={() => setSelectedText(Data5)}>5. Private vs. Public Blockchains</MenuItem>
                        <MenuItem onClick={() => setSelectedText(Data6)}>6. Cryptocurrency Exchanges</MenuItem>
                        <MenuItem onClick={() => setSelectedText(Data7)}>7. Stable Coin</MenuItem>
                        

                    </Menu>
                </LeftSide>
                <RightSide>
                    {selectedText}
                </RightSide>
            </div>
        </>
    )
}