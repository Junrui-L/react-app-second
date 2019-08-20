import React,{ Component} from 'react'
import ReactDOM from 'react-dom'
class Modal extends Component {
    constructor (props) {
        super(props)
        // 根节点下创建一个div
        this.container = document.createElement("div");
        document.body.appendChild(this.container)    
    }

    componentWillUnmount () {
        document.body.removeChild(this.container)
    }

    render () {
        // 创建的DOM 树挂载到this.container指向的div节点下面
        return ReactDOM.createPortal (
            <div className = "modal">
                <div className="modal-mask"></div>
                <div className="wrap" custom-arr="somethings">
                    <span className="close" onClick={this.props.onClose}>close</span>
                    <div className="content">{this.props.children}</div>
                </div>  
            </div>,
            this.container
        )
    }
}

export default Modal