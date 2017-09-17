import React from 'react'
import ReactDom from 'react-dom'
import {notification} from 'antd'
import HeaderUiComponent from './header_ui.js'
import {connect} from 'react-redux'

class HeaderComponent extends React.Component {

	constructor(props) {
		super(props);	
		this.state = {
			selectedKey:"",
			showModal: false
		}
		this.handleSelect = this.handleSelect.bind(this);
		this.handleModelToggle = this.handleModelToggle.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout() {	
		notification.open({
		    message: '退出成功',
		    description: '欢迎再来',
		});
		let action = {
			type:"LOGOUT"
		}
		this.props.handleLogout();

	}

	componentDidMount() {
		if(!this.props.categories.length) {
			fetch("/category.json")
			.then((response) => response.json())
			.then((json) => {
				let categories = json.data.categories;
				let normalMenu = json.data.normalMenu;
				let middleMenu = json.data.middleMenu;
				let primeMenu = json.data.primeMenu;
				(categories.length > 10) && (categories.length = 10);
				this.props.changeCategories(categories);
				this.props.changeNormalMenu(normalMenu);
				this.props.changeMiddleMenu(middleMenu);
				this.props.changePrimeMenu(primeMenu);
			})
			.catch((ex) => {
				console.log("parsing failed",ex)
			})
		}		
	}

	handleSelect(params) {
		this.setState({
			selectedKey: params.key
		})
	}

	handleSubmit(e) {

		notification.open({
		    message: '登陆成功',
		    description: '最近有***11折活动，欢迎大家积极参与',
		});

		this.setState({
			showModal: false,
			
		})
		this.props.handleLogin();
	}

	
	handleModelToggle() {
			this.setState({
				showModal: !this.state.showModal
			})
	}

	render() {
		return (
			<HeaderUiComponent {...this.state} 
			categories={this.props.categories} 
			normalMenu={this.props.normalMenu}
			middleMenu={this.props.middleMenu}
			primeMenu={this.props.primeMenu}
			login={this.props.login} 
			handleLogout={this.handleLogout} 
			handleSubmit={this.handleSubmit} 
			handleModelToggle={this.handleModelToggle} 
			handleSelect={this.handleSelect}/>
		)
	}
	 
	}
	export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)

//mapStateToProps映射store里的数据,把state映射到props
//state指的是store的state，实际上就是store里的数据
//props 指的就是组建的props
function mapStateToProps(state, ownProps) {
  return { 
  	login: state.data.login,
  	title: ownProps.title,
  	categories: state.data.categories,
  	normalMenu: state.data.normalMenu,
  	middleMenu: state.data.middleMenu,
  	primeMenu: state.data.primeMenu
  	 }
}

//把对store的操作函数，映射到props中
function mapDispatchToProps(dispatch) {
  return {
  	changeCategories: function(categories) {
  		let action = {
			type:"CHANGE_CATEGORIES",
			value: categories
		}
		dispatch(action);
  	},
  	changeNormalMenu: function(normalMenu) {
  		let action = {
			type:"CHANGE_NORMALMENU",
			value: normalMenu
		}
		dispatch(action);
  	},
  	changeMiddleMenu: function(middleMenu) {
  		let action = {
			type:"CHANGE_MIDDLEMENU",
			value: middleMenu
		}
		dispatch(action);
  	},
  	changePrimeMenu: function(primeMenu) {
  		let action = {
			type:"CHANGE_PEIMEMENU",
			value: primeMenu
		}
		dispatch(action);
  	},
  	handleLogout: function() {
  		let action = {
			type:"LOGOUT"
		}
		dispatch(action);
  	},
  	handleLogin: function() {
  		let action = {
  			type:"LOGIN"
  		}
  		dispatch(action);
  	}
  }
}