class QuizScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursor: 0,
      steps: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let question = this.questions.models[this.state.cursor];
    question.answer(this.state.answer);
    this.setState({cursor: this.state.cursor + 1});
  }

  handleInput(e) {
    this.setState({answer: e.target.value});
  }

  componentWillMount() {
    let quiz = this.props.model;
    this.questions = new QuizMaster.Collections.Questions(quiz.get('questions'));
    let steps = this.questions.models.map((q)=> {
      return <QuizStep key={q.cid} question={q} onChange={this.handleInput}/>
    })
    steps.push(<QuizResult quiz={quiz}/>);
    this.setState({steps: steps});
  }

  render() {
    let quiz = this.props.model;
    let step = this.state.steps[this.state.cursor];

    return (
      <div>
        <h1>{quiz.get('name')}</h1>
        <form onSubmit={this.handleSubmit}>
          {step}
        </form>
      </div>
      )
  }
}

class QuizStep extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ""
    }
  }

  handleChange(e) {
    this.props.onChange(e);
    this.setState({value: e.target.value});
  }

  render() {
    let question = this.props.question;
    return (
      <div>
        <div><strong>Q: </strong>{question.get('text')}</div>
        <p>
          <strong>A: </strong>
          <input value={this.state.value} type="text" onChange={this.handleChange}/>
        </p>
        <input type="submit" value="submit"/>
      </div>
      )
  }
}

class QuizResult extends React.Component {
  constructor(props) {
    super(props);
    this.forceUpdate = this.forceUpdate.bind(this, null);
    this.state = {
      quiz: new QuizMaster.Models.Quiz
    }
  }

  componentDidMount() {
    this.props.quiz.on('change', function(model) {
      this.setState({quiz: model});
    }, this)
    this.props.quiz.check_answers();
  }

  render() {
    let quiz = this.state.quiz;
    let questions = new QuizMaster.Collections.Questions(quiz.get('questions'));
    return(
      <div>
        <ul className="question-list">
        {questions.map((question)=> {
          return <QuestionResult key={question.cid} question={question}/>
        })}
        </ul>
      </div>
      )
  }
}

class QuestionResult extends React.Component {
  render() {
    let question = this.props.question;
    let text = {
      true: "correct",
      false: "incorrect"
    }[question.get('correct')]

    return (
      <li className={text}>
        <strong>{question.get('text')} </strong>
        <span>{text}</span>
      </li>
      )
  }
}