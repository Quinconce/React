import React from "react"; 
import Wrapper from "./components/ui/wrapper";
import Form from "./components/Form";
import questions from "./data/question.js"

		class App extends React.Component {
				constructor() {
					super();
					this.state = {
						answers: {},
					};
				}
				componentDidMount() {
					const initialAnswers = {};
					for (const key in questions) {
						initialAnswers[key] = "";
					}
					console.log(initialAnswers);
					this.setState({ answers: initialAnswers });
				}
				changeAnswer = (event, questionID) => {
					this.setState({
						answers: {
							...this.state.answers,
							[questionID]: Number(event.target.value),
						},
					});
				};
				render() {
					return (
						<div className='container'>
							<h1>QCM</h1>
							<Wrapper>
								<Form
									questions={questions}
									answers={this.state.answers}
									changeAnswer={this.changeAnswer}
								/>
							</Wrapper>
						</div>
					);
				}
			}

    
      export default App
		


	