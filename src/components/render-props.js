import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Mouse extends Component {
    state = {
        x: 0,
        y: 0,
    }
    static propTypes = {
        render: PropTypes.func.isRequired
    }
    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }
    render() {
        return (
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove.bind(this)}>
                {this.props.render(this.state)}
            </div>
        )
    }
}

const Position = ({x,y}) =>{
    return <h1>The mouse position is ({x},{y})</h1>
}
const RenderProps = (props) => {
    return (
        <div style={{ height: '100%' }}>
           <Mouse render={(props) => <Position {...props}/> } />
        </div>
    )
}

export default RenderProps