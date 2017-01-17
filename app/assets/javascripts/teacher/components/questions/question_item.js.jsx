class QuestionItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDestroy = this.handleDestroy.bind(this);
  }

  handleDestroy() {
    if (!(confirm('Are you sure?'))) return;
    let question = this.props.question;
    question.destroy();
    this.props.onDestroy();
  }

  render() {
    let question = this.props.question;
    return (
      <li className="deletable">
        <button className="close" onClick={this.handleDestroy}><span>&times;</span></button>
        <div>{question.get('text')}</div>
        <p>
          <strong>Answer: </strong>{question.get('correct_answer')}
        </p>
      </li>
      )
  }
}