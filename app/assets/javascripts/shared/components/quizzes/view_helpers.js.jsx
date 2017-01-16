class ListView extends React.Component {
  render() {
    return (
      <ul {...this.props}>
        {this.props.collection.map((item)=> {
          return <ListItem key={item.cid} item={item}/>
        })}
      </ul>
      )
  }
}

class ListItem extends React.Component {
  render() {
    let item = this.props.item;
    return (
      <li><a href={item.get('url')}>{item.get('text') || item.get('name')}</a></li>
      )
  }
}