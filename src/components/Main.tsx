import {NavigationBar} from "./NavigationBar";
import {LeftSide} from "./LeftSide";
import {RightSide} from "./RightSide";
import React, {ReactNode, useState} from "react";
import "./Main.css"
import {Menu, MenuItem, SubMenu} from "react-pro-sidebar";
import {staticData} from "../extensions/StaticData";
import {Data1_1} from "../explanations/1_1";

//  <MergedContent text={selectedText} onTextChange={setSelectedText}/>
export const Main = () => {
    const [selectedText, setSelectedText] = useState<ReactNode>(Data1_1);
    return (
        <>
            <NavigationBar></NavigationBar>
            <div className={"main"}>
                <LeftSide>
                    <Menu>
                        {
                            staticData.map((item, i) => (
                                item.content.length > 1 ? ( <SubMenu label={i + ". " + item.title}>
                                    {
                                        item.content.map((subItem, j) => (
                                                <MenuItem onClick={() => setSelectedText(subItem.content)}>
                                                    <div>{i + "." + j + " - " + subItem.title}</div>
                                                </MenuItem>
                                            )
                                        )
                                    }
                                        </SubMenu> )
                                    :
                                    <MenuItem onClick={() => setSelectedText(item.content[0].content)}>
                                        <div>{i + " - " + item.title}</div>
                                    </MenuItem>
                            ))
                        }
                    </Menu>

                </LeftSide>
                <RightSide>
                    {selectedText}
                </RightSide>
            </div>
        </>
    )
}