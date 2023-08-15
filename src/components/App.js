import React from "react"
import Header from "./Header"
import List from "./List"
//class component
class App extends React.Component{
  render(){
    return(
        <div>
            <Header/>
            <List/>
            <h1>Hello World</h1>
            <p>Sekilas mirip dengan html tapi di dalam div ini adalah JSX yang saratnya ada satu root yaitu div</p>
        </div>
    )
  }
} 

/*functional component
const App = () => {
    return(
        <div>
            <h1>hello world</h1>
        </div>
    )
}*/
export default App; 