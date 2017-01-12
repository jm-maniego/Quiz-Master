class QuizList extends React.Component {
  render() {
    return (
      <ul className="quiz-list">
        {this.props.quizzes.map((quiz)=> {
          return <QuizItem quiz={quiz} />
        })}
      </ul>
      )
  }
}