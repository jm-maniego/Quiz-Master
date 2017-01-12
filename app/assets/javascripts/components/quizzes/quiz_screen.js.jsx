class QuizScreen extends React.Component {
  render() {
    let quiz = this.props.model;
    return (
      <h1>{quiz.get('name')}</h1>
      )
  }
}