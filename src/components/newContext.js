import React,{Component,createContext} from 'react'

//第一步，创建context
const myContext = createContext()
//第二步 ,创建Provider Component
class MyProvider extends Component {
    state = {
        name: 'allen',
        age: 18
    }
    render(){
        return (
            // 提供数据
            <myContext.Provider value={{name: this.state.name,age: this.state.age}}>
                {this.props.children}
            </myContext.Provider>
        )
    }
}

const Family = (props) =>{ 
    return (
        <div>
            <h1>Family</h1>
            <Person />
        </div>
    )
}
const Person = (props) =>{
    return (
        <div>
            <h1>Person</h1>
            {/* 消费数据 */}
            <myContext.Consumer>
               {(state)=> <p>my age is {state.age}</p>}
            </myContext.Consumer>
        </div>
    )
}
class NewContext extends Component {
    
    render(){
      return (
        <MyProvider>
          <Family />
        </MyProvider>
      )
    }
}
export default NewContext