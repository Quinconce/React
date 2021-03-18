import React from "react";



class Select extends React.Component {
    render() {
        return (
            <div className='my-3 question'>
                <label className='form-label' htmlFor={this.props.name}>
                    {this.props.label}
                </label>
                <select
                    className='form-select mb-3'
                    id={this.props.name}
                    value={this.props.value}
                    onChange={this.props.handleChange}>
                    {this.props.choices.map((v, i) => (
                        <option value={i} key={i}>
                            {v}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

export default Select