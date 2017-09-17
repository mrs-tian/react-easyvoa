import React from 'react'
import ReactDom from 'react-dom'
import {Link} from 'react-router'
import HeaderComponent from '../common/header/header.js'
import FooterComponent from '../common/footer/footer.js'
import CommentComponent from '../common/comment/index.js'


import "../../css/detail.css"
export default class DetailComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			article:[],			
		}				
	}

	componentDidMount() {
		let link = "article.json?id=" + this.props.params.id
		fetch(link)
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					article: json.data.article
				})
			})			
			.catch((ex) => {
				console.log("parsing failed",ex)
			})
	}
	
	render() {
		
		return (
			<div className="main">
				 <HeaderComponent />
				 <div className="article-main">
					 {
					 	this.state.article.map((value, index)=>{
					 		return(
					 			<div key={"items" + Math.random()}>
					 				<div className="content-title" key={"items" + Math.random()}>
					 					<h1>{value.title}</h1>
					 					<div className="head-info">{value.head_info}</div>
					 				</div>
					 				<div className="content-main" key={"items" + Math.random()}>
					 					<div className="adContent">{value.ad}</div>
					 					<div className="content-text">{value.main}</div>
					 				</div>
					 			</div>	
					 			)
					 		
					 	})
					 }
				 	
				 </div>
				 <CommentComponent />
				 <FooterComponent />
			</div>
			
		)
	}
}