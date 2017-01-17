class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.handleDestroy = this.handleDestroy.bind(this);
  }

  handleDestroy() {
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <ul className='question-list'>
        {this.props.collection.map((question)=> {
          return <QuestionItem key={question.cid} question={question} onDestroy={this.handleDestroy}/>
        })}
        </ul>
      </div>
      )
  }
}