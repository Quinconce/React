import React from "react";
import Radio from "./Radio";


class RadioChoices extends React.Component {
    render() {
        console.log("RADIO CHOICES", this.props);
        return (
            <div className='my-3 question'>
                <p className='form-label'>{this.props.label}</p>
                <p>
                    Répondez en choisissant une seule et bonne réponse ci-dessous :
                    <br />
                    {this.props.choices.map((v, i) => (
                        <Radio
                            key={i}
                            label={v}
                            name={this.props.name}
                            value={i}
                            checked={this.props.value === i}
                            handleSelect={this.props.handleChange}
                        />
                    ))}
                </p>
            </div>
        );
    }
}

export default RadioChoices