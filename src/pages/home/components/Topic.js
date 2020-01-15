import React from 'react'
import { TopicWrapper, TopicItem} from '../style'
import { connect } from 'react-redux'
class Topic extends React.Component {
  render(){
    return (
      <TopicWrapper>
        {
          this.props.topicList.map((item) => (
            <TopicItem key={item.get('id')}>
              <img alt='' className="topic-pic" src={item.get('imgUrl')} />
              {item.get('topic')}
            </TopicItem>
          ))
        }
      </TopicWrapper>
    )
  }
}
const mapState = (state) => ({
  topicList: state.getIn(['home', 'topicList'])
})
export default connect(mapState, null)(Topic)
