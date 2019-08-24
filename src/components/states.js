import React from 'react'

class AutoFocusTextInput extends React.Component{
    constructor(props) {
        super(props);
        this.blur = this.blur.bind(this)
    }

    componentDidMount() {
        // 通过ref让input自动获得焦点
        this.textInput.focus()
    }

    // 让input失去焦点
    blur() {
        this.textInput.blur();
    }

    render() {
        return(
            <div>
                <input type = "text" 
                    ref = {(input)=> { this.textInput = input;}}
                />
            </div>
        )
    }
}

export default AutoFocusTextInput