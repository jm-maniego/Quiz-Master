class QuizzesScreen extends React.Component {
  render() {
    return (
      <div>
        <h1>Quizzes</h1>
        <ListView className='quiz-list' collection={this.props.collection}/>
      </div>
      )
  }
}