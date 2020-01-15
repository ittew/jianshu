import React from 'react'
import { ListItem, ListInfo } from '../style'
import { connect } from 'react-redux'
class List extends React.Component {
  render(){
    return (
      <div>
        {
          this.props.articleList.map(item => (
            <ListItem key={item.get('id')}>
              <img alt='' className='pic' src={item.get('imgUrl')} />
              <ListInfo>
                <h3 className='title'>{item.get('title')}</h3>
                <p className='desc'>{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          ))
        }
      </div>
    )
  }
}
const mapState = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList'])
  }
}
export default connect(mapState, null)(List)
