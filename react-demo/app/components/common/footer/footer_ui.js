import React from 'react'

export default class FooterUiComponent extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {

		let element = this.props.login ? <div>已登录</div> : <div>未登录</div>
		return(
			<div className="footer">
				{element}
				<p>本网站有<span className="auther">&nbsp;&nbsp;Mrs-tian&nbsp;&nbsp;</span>开发上线 &copy; 2017-2020 <span className="auther">&nbsp;&nbsp; 么么哒 亲爱的&nbsp;&nbsp;</span></p>
				<p>网站所有内容，均来自VOA官方网站，所有资料均只作为英文学习资料使用。 站长QQ:547726690 欢迎联系合作</p>
			</div>
			)
	}
}

/*export default function(props){
	let element = this.props.login ? <div>已登录</div> : <div>未登录</div>
	
		return(
			<div className="footer">
				{element}
				<p>本网站有<span className="auther">&nbsp;&nbsp;Mrs-tian&nbsp;&nbsp;</span>开发上线 &copy; 2017-2020 <span className="auther">&nbsp;&nbsp; 么么哒 亲爱的&nbsp;&nbsp;</span></p>
				<p>网站所有内容，均来自VOA官方网站，所有资料均只作为英文学习资料使用。 站长QQ:547726690 欢迎联系合作</p>
			</div>
			)
	
}*/