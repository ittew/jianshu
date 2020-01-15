import React from 'react'
import { WriterWrapper, WriterItem } from '../style'
import { connect } from 'react-redux';

class Writer extends React.Component {
  render(){
    return (
      <WriterWrapper>
        {
          this.props.writes.map((item)=>(
            <WriterItem key={item.get('id')}>
              <img alt="" className='avatar' src={item.get('avatar_source')} />
              <p className='name'>{item.get('nickname')}</p>
              <p className='desc'>写了{Math.floor(item.get('total_wordage')/1000)}k字 · {Math.floor(item.get('total_likes_count')/1000)}k喜欢</p>
            </WriterItem>
          ))
        }
      </WriterWrapper>
    )
  }
}
const mapState = (state) => ({
  writes: state.getIn(['home', 'writers'])
})
export default connect(mapState, null)(Writer)
