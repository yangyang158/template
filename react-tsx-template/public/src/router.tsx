import React from "react"

import "./index.less"
import userImg from "../assets/img/user-unknown.png"


export default class Router extends React.Component {
    render() {
        return (
            <div>
                欢迎使用react-tsx
                <img src={userImg} width={20} />
            </div>
        )
    }
}
