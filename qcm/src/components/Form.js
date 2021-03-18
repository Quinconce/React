import React from "react";

import RadioChoices from "./Form/RadioChoices";
import Select from "./Form/Select";
import Input from "./Form/Input";

class Form extends React.Component {
    handleSubmit = (e) => {};

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {Object.values(this.props.questions).map((question, i) => {
                    switch (question.type) {
                        case "select":
                            return (
                                <Select
                                    key={i}
                                    label={question.title}
                                    name={question.name}
                                    choices={question.choices}
                                    value={this.props.answers[question.name]}
                                    handleChange={(e) => {
                                        this.props.changeAnswer(e, question.name);
                                    }}
                                />
                            );
                        case "radio":
                            return (
                                <RadioChoices
                                    key={i}
                                    label={question.title}
                                    name={question.name}
                                    choices={question.choices}
                                    value={this.props.answers[question.name]}
                                    handleChange={(e) =>
                                        this.props.changeAnswer(e, question.name)
                                    }
                                />
                            );
                        case "text":
                        case "email":
                        case "password":
                            return (
                                <Input
                                    key={i}
                                    type={question.type}
                                    label={question.title}
                                    name={question.name}
                                    value={this.props.answers[question.name]}
                                    handleChange={(e) =>
                                        this.props.changeAnswer(e, question.name)
                                    }
                                />
                            );
                        default:
                            return (
                                <p key={i} style={{ color: "red" }}>
                                    Attention, question invalide
                                </p>
                            );
                    }
                })}
                <button className='btn btn-success mb-3' type='submit'>
                    Cliquez pour valider vos réponses
                </button>
            </form>
        );
    }
}
export default Form;