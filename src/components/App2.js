import React from "react"
//class component
class App extends React.Component{
    state ={
        book:{
        name: "whoami",
        author: "mr.x"
        }
    }
  render(){
    return(
        <div>
            <h1>Hello World</h1>
           <h3>Judul Buku: { this.state.book.name}</h3>
           <h3>Author : { this.state.book.author } </h3>
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