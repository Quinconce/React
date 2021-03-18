import React from "react";




class Radio extends React.Component {
    render() {
        return (
            <React.Fragment>
                <label className='form-check'>
                    <input
                        type='radio'
                        className='form-check-input'
                        name={this.props.name}
                        value={this.props.value}
                        onChange={this.props.handleSelect}
                        checked={this.props.checked}
                    />{" "}
                    {this.props.label}
                </label>
            </React.Fragment>
        );
    }
}

export default Radio