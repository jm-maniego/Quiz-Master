class QuestionList extends React.Component {
  render() {
    let questions = this.props.questions;
    return (
      <ul className="question-list">
        {questions.map((question)=> {
          return <QuestionItem key={question.cid} question={question}/>
        })}
      </ul>
      )
  }
}