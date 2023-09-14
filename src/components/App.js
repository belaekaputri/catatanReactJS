import React from "react"
import List from "./List"
import Header from "./Header"


//class component
class App extends React.Component{

  render(){
    return(
        <div>
           <Header/>
           <List/>
        </div>
    )
  }
} 

export default App; 