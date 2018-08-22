import React from 'react'
// import Hoc from './hoc'
// import RenderProps from './render-props'
import NewContext from './newContext'
import Local from './newContext1'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Nav from './nav'
// import Broken from './broken'
// import ErrorBoundary from './error-boundary'
const Content = props => {
   return (
        //   <div>
        //    高阶组件: <Hoc />
        //  </div>
        //  <ErrorBoundary render={(error,errorInfo)=><p>Error: {error.toString()}</p>}>
        //    <Broken />
        //  </ErrorBoundary>
        //  <div>
        //      RenderProps: <RenderProps />
        //  </div> 
         <Router>
           <div>
              <Nav />
              <Route path="/" exact component={NewContext}/>
              <Route path="/local/:id" component={Local}/>
           </div>
         </Router>
   )
}
export default Content