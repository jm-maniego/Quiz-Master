class QuizItem extends React.Component {
  render() {
    let quiz = this.props.quiz;
    return (
      <li>{quiz.get('name')}</li>
      )
  }
}