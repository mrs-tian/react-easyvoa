import React from 'react'
import FooterUiComponent from './footer_ui.js'
import {connect} from 'react-redux'

 class FooterComponent extends React.Component{
	
	render() {
		return(
			<FooterUiComponent login={this.props.login}/>
			)
	}
}

function mapStateToProps(state) {
  return { login: state.data.login }
}


function mapDispatchToProps(dispatch) {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(FooterComponent)

//mapStateToProps映射store里的数据,把state映射到props
//state指的是store的state，实际上就是store里的数据
//props 指的就是组建的props
