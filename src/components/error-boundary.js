import React,{Component} from 'react'

class ErrorBoundary extends Component {
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
            return <div>Oh,error occurred</div>
        }
        return this.props.children
    }
}
export default ErrorBoundary