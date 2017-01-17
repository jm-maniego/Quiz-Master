class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      correct_answer: '',
      collection: new QuizMaster.Collections.Questions()
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    let newQuestion = new QuizMaster.Models.Question({
      text: this.state.text,
      correct_answer: this.state.correct_answer,
      quiz_id: this.props.quiz.get('id')
    });
    this.state.collection.create(newQuestion);
    this.setState({
      text: '',
      correct_answer: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="question-form">
          <input
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            type='text'
            placeholder='question?'
            className='form-control'/>
          <input
            name="correct_answer"
            value={this.state.correct_answer}
            onChange={this.handleChange}
            type='text'
            placeholder='answer.'
            className='form-control'/>
          <input type="submit" value="add question"/>
        </form>
        <QuestionList collection={this.state.collection}/>
      </div>
      )
  }
}