import styled from 'styled-components'
export const HomeWrapper = styled.div`
  width:960px;
  margin: 0 auto;
`
export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner{
    width: 100%;
    border-radius: 6px;
  }
`
export const HomeRight = styled.div`
  float: right;
  padding-top: 30px;
  width: 280px;
`

export const TopicWrapper = styled.div`
  overflow:hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
`

export const TopicItem = styled.div`
  float:left;
  height: 34px;
  cursor:pointer;
  line-height: 34px;
  margin-left: 18px;
  margin-bottom: 10px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  border:1px solid #dcdcdc;
  border-radius: 4px;
  overflow:hidden;
  .topic-pic{
    width: 32px;
    height: 32px;
    float:left;
    margin-right:10px;
  }
`
export const ListItem = styled.div`
	overflow: hidden;
  padding: 20px 0;
  cursor:pointer;
  border-bottom: 1px solid #dcdcdc;
  &:first-child{
    border-top: 1px solid #dcdcdc;
  }
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 6px;
	}
`;

export const ListInfo =	styled.div`
	width: 480px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;

export const RecommendWrapper = styled.div`
  width: 280px;
  margin-top:-4px;
`;

export const RecommendItem = styled.div`
	width: 280px;
  height: 50px;
  margin-bottom: 10px;
	background: url(${(props) => props.imgUrl});
  background-size: contain;
  cursor: pointer;
`;

export const WriterWrapper = styled.ul`
  width: 280px;
  margin-top: 30px;
`;
export const WriterItem = styled.li`
  margin-top: 15px;
  line-height: 20px;
  cursor: pointer;
  .avatar{
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
  .name{
    font-size: 14px;
    padding-top: 4px;
  }
  .desc{
    padding-bottom: 4px;
    font-size: 12px;
    color: #969696;
  }
`;


export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align:center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`;

export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 12px;
`
