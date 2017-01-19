class QuestionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_editing: false
    }
    this.handleDestroy = this.handleDestroy.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDestroy() {
    if (!(confirm('Are you sure?'))) return;
    let question = this.props.question;
    question.destroy();
    this.props.onDestroy();
  }

  handleEdit() {
    this.setState({ is_editing: true })
  }

  handleSubmit() {
    this.setState({is_editing: false});
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({is_editing: false});
  }

  render() {
    let question = this.props.question;
    return (
      <li className='list-item'>
        <ItemActionList>
          <ActionListItem>
            <button onClick={this.handleDestroy}><span>&times;</span></button>
          </ActionListItem>
          <ActionListItem>
            <button onClick={this.handleEdit}>
              <span><i className="material-icons">edit</i></span>
            </button>
          </ActionListItem>
        </ItemActionList>
        {this.state.is_editing ?
          <QuestionEditForm
            onCancel={this.handleCancel}
            onSubmit={this.handleSubmit}
            question={question}/> :
          <QuestionItemShow question={question}/>}
      </li>
      )
  }
}

class QuestionEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleCancel(e) {
    this.props.onCancel(e);
  }

  handleSubmit(e) {
    e.preventDefault();
    let question = this.props.question;
    var {
      text = question.get('text'),
      correct_answer = question.get('correct_answer')
    } = this.state;
    question.set({
      text: text,
      correct_answer: correct_answer
    });
    question.save();
    this.props.onSubmit(e);
  }

  render() {
    let question = this.props.question;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          defaultValue={question.get('text')}
          onChange={this.handleChange}
          type='text'
          placeholder='question?'
          className='form-control'/>
        <input
          name="correct_answer"
          defaultValue={question.get('correct_answer')}
          onChange={this.handleChange}
          type='text'
          placeholder='answer.'
          className='form-control'/>
        <div className='form-actions'>
          <input type="submit" value="save"/>
          <button onClick={this.handleCancel}>cancel</button>
        </div>
      </form>
      )
  }
}

class QuestionItemShow extends React.Component {
  render() {
    let question = this.props.question;
    return (
      <div>
        <div><strong>Q: </strong>{question.get('text')}</div>
        <p>
          <strong>A: </strong>{question.get('correct_answer')}
        </p>
      </div>
      )
  }
}