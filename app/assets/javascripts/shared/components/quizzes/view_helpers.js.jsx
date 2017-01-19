class ListView extends React.Component {
  render() {
    let {collection, ...props} = this.props
    return (
      <ul {...props}>
        {collection.map((item)=> {
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

class ItemActionList extends React.Component {
  render() {
    return (
      <ul className='action-list'>
        {this.props.children}
      </ul>
      )
  }
}

class ActionListItem extends React.Component {
  render() {
    return (
      <li className='action-list-item'>{this.props.children}</li>
      )
  }
}