import React, { Component } from 'react'
import PropTypes from 'prop-types'
const withMouse = (View) => {
    return class extends Component {
        state = {
            x: 0,
            y: 0,
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
                    {/* {...this.props}是将withMouse里的props传到将要返回的组件里.缺点是容易嵌套太多，无法识别props来自哪个组件. */}
                    <View {...this.props} mouse={this.state} />
                </div>
            )
        }
    }
}
const Hoc = (props) => {
    const {x,y} = props.mouse
    return (
        <div style={{ height: '100%' }}>
            <h1>The mouse position is ({x},{y})</h1>
        </div>
    )
}
export default withMouse(Hoc)