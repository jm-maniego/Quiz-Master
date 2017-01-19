class QuestionItem extends React.Component {

  handleKeyDown(e) {
    e.preventDefault();
  }

  render() {
    let question = this.props.question;
    return (
      <li>
        <div><strong>Q: </strong>{question.get('text')}</div>
        <p>
          <strong>A: </strong><input type="text" onKeyDown={this.handleKeyDown}/>
        </p>
      </li>
      )
  }
}