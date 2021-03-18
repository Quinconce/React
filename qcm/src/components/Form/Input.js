import React from "react";



class Input extends React.Component {
    render() {
        return (
            <div className='my-3 question'>
                <label className='form-label' htmlFor={this.props.name}>
                    {this.props.label}
                </label>
                <input
                    className='form-control'
                    id={this.props.name}
                    type={this.props.type}
                    value={this.props.value}
                    onChange={this.props.handleChange}
                />
            </div>
        );
    }
}
export default Input;