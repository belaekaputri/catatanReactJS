import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
//import Header from "./components/Header"
 
/*membuat komponen
const App = () => {
    return(
        <div>
            <h1>Hello World</h1>
        </div>
    )
}*/

ReactDOM.render(
    <React.StrictMode>
    <App/>
    </React.StrictMode>,
    document.getElementById("root")
)
//react strictmode digunakan apabila ada error atau modul yang tidak support makan akan diberitahu