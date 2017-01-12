class QuizScreen extends React.Component {
  render() {
    let quizzes = this.props.collection;
    return (
      <div>
        <h1>Quizzes</h1>
        <QuizList quizzes={quizzes}/>
      </div>
      )
  }
}