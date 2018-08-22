import React,{Component,createContext} from 'react'
import {CDNFlagIcon} from 'react-flag-kit';
const ThemeContext = createContext()

const localMap = {
    'en-US':{locale:'en-US',flag: 'US',content: 'hello world'},
    'fr-FR':{locale:'fr-FR',flag: 'FR',content: 'Bonjour le monde'},
    'es-ES':{locale:'es-ES',flag: 'ES',content: 'Hola Mundo'},
}
class ThemeProvider extends Component{
    state = localMap['en-US']
    render(){
      return (
          <ThemeContext.Provider value={{
              state: this.state,
              handleSwitch: e=> this.setState(localMap[e.target.value])
          }}>
             {this.props.children}
           </ThemeContext.Provider>
       )
      }
}
const LocalSelect = () => {
    return (
        <ThemeContext.Consumer>
           {context=>{
               return (
                   <select value={context.state.locale} onChange={context.handleSwitch}>
                       <option value="en-US">English</option>
                       <option value="fr-FR">French</option>
                       <option value="es-ES">Spanish</option>
                   </select>
               )
           }}
        </ThemeContext.Consumer>
    )
}
const LocalFlag = () =>{
    return (
        <ThemeContext.Consumer>
          {context =>(
              <CDNFlagIcon code={context.state.flag} size={256} />
          )}
        </ThemeContext.Consumer>
    )
}
const LocalContent = () => {
   return (
        <ThemeContext.Consumer>
          {context =>(
             <p>{context.state.content}</p>
          )}
        </ThemeContext.Consumer>
   )
}
export default class Local extends Component {
    GoHome(){
      this.props.history.push('/')
    }
    render(){
        return (
            <ThemeProvider>
               {this.props.match.params.id}
              <button onClick={this.GoHome.bind(this)}>Go back home</button>
               <LocalSelect />
               <LocalFlag />
               <LocalContent />
            </ThemeProvider>
        )
    }
}
   