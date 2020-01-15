import React from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux'
class Recommond extends React.Component {
  render(){
    return (
      <RecommendWrapper>
        {
          this.props.recommendList.map((item) =>(
            <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')} />
          ))
        }
      </RecommendWrapper>
    )
  }
}
const mapState = (state) => {
  return {
    recommendList: state.getIn(['home', 'recommendList'])
  }
}
export default connect(mapState, null)(Recommond)
