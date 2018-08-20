import React from 'react'
import Hoc from './hoc'
import RenderProps from './render-props'
import NewContext from './newContext'
// import Broken from './broken'
// import ErrorBoundary from './error-boundary'
const Content = props => {
   return (
       <div>
         {/* <div>
           高阶组件: <Hoc />
         </div>
         <ErrorBoundary render={(error,errorInfo)=><p>Error: {error.toString()}</p>}>
           <Broken />
         </ErrorBoundary>
         <div>
             RenderProps: <RenderProps />
         </div> */}
         <NewContext />
       </div>
   )
}
export default Content