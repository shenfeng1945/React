import React,{Component} from 'react'
import PropTypes from 'prop-types'
//ErrorBoundary可以重复利用，只要把待测组件用它包起来就可以了。
class ErrorBoundary extends Component {
   static propTypes = {
       children: PropTypes.oneOfType([
           PropTypes.node,//node表示可渲染任何对象：字符串，数组，组件.
           PropTypes.arrayOf(PropTypes.node)
       ]).isRequired
   }
    state = {
        hasError: false,
        error: null,
        errorInfo: null
    }
    componentDidCatch(error,errorInfo){
        this.setState({
            hasError: true,
            error,
            errorInfo,
        })
    }
    render(){
        if(this.state.hasError){
            return (
              <p>{this.props.render(this.state.error,this.state.errorInfo)}</p>
            )
        }
        return this.props.children
    }
}
export default ErrorBoundary