import React from 'react'
import Hoc from './hoc'
import RenderProps from './render-props'
import Broken from './broken'
import ErrorBoundary from './error-boundary'
const Content = props => {
   return (
       <div>
         <div>
           高阶组件: <Hoc />
         </div>
         <ErrorBoundary></ErrorBoundary>
         <div>
             RenderProps: <RenderProps />
         </div>
       </div>
   )
}
export default Content