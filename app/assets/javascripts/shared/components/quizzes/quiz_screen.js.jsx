class QuizScreen extends React.Component {
  render() {
    let quiz = this.props.model;
    let questions = new QuizMaster.Collections.Questions(quiz.get('questions'));
    return (
      <div>
        <h1>{quiz.get('name')}</h1>
        <ListView collection={questions} />
      </div>
      )
  }
}