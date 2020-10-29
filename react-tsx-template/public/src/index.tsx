import "core-js/stable"
import "regenerator-runtime/runtime"
import React from "react"
import { render } from "react-dom"
import Router from "./router"
const app = document.createElement("div")
document.body.appendChild(app)

render(<Router />, app)
