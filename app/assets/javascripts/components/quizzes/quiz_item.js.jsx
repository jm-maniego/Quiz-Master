class QuizItem extends React.Component {
  render() {
    let quiz = this.props.quiz;
    return (
      <li><a href={quiz.get('url')}>{quiz.get('name')}</a></li>
      )
  }
}