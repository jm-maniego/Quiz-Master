class QuestionItem extends React.Component {
  render() {
    let question = this.props.question;
    return (
      <li>
        <div class="question-text">{question.get('text')}</div>
      </li>
      )
  }
}