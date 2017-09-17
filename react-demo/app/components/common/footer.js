import React from 'react'
import ReactDom from 'react-dom'
import "../../css/page.css"

export default class FooterComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="footer">
				<p>本网站有<span className="auther">&nbsp;&nbsp;Mrs-tian&nbsp;&nbsp;</span>开发上线 &copy; 2017-2020 <span className="auther">&nbsp;&nbsp; 么么哒 亲爱的&nbsp;&nbsp;</span></p>
				<p>网站所有内容，均来自VOA官方网站，所有资料均只作为英文学习资料使用。 站长QQ:547726690 欢迎联系合作</p>
			</div>
		)		
	}

}