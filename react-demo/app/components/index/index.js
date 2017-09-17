import React from 'react'
import ReactDom from 'react-dom'
import {Row, Col, Menu, Icon, Card, Carousel} from 'antd'
import {Link} from 'react-router'
import HeaderComponent from '../common/header/header.js'
import FooterComponent from '../common/footer/footer.js'

import "../../css/index.css"

export default class IndexComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {			
			articles:[],
			links:[],
			hover:false			
		}
		 this.onMouseEnter = this.onMouseEnter.bind(this);
		 this.onMouseLeave = this.onMouseLeave.bind(this);			
	}
	
	onMouseEnter(){
	    this.setState({
	        hover: true,
	    });
	}

	onMouseLeave(){
	    this.setState({
	        hover: false,
	    })
	}

	componentDidMount() {

		fetch("/index.json")
			.then((response) => response.json())
			.then((json) => {
				this.setState({					
					articles: json.data.articles,
					//links:json.data.links
				})
			})
			.catch((ex) => {
				console.log("parsing failed",ex)
			})


		fetch("/link.json")
			.then((response) => response.json())
			.then((json) => {
				this.setState({					
					
					links:json.data.links
				})
			})
			.catch((ex) => {
				console.log("parsing failed",ex)
			})
	}
	
	render() {
		
		return (
			<div className="main">
				 <HeaderComponent title="首页"/>

			    <Card title="welcome clown" extra={<a href="#">More</a>} className="content">
				    {
				    	this.state.articles.map((value, index)=>{
	
				    		return (
				    				<p className="content-item" key={"items" + Math.random()}>
				    					<Link to={"/detail/" + value.href} style={{color: value.color}} >
				    					<span className="content-item-category" onMouseEnter={this.onMouseEnter}>[ {value.categoryName} ]</span>
				    						<span className="content-item-title" onMouseEnter={this.onMouseEnter}>{value.title}</span>
				    						<span className="content-item-date" onMouseEnter={this.onMouseEnter}>({value.date})</span>
				    						{value.new ? <img className="content-item-new" src={require("../../images/new.gif")} /> : ""}
				    					</Link>
				    				</p>
				    			)
				    	})
				    }
				     	<div className="adv">
					     	<Carousel autoplay>
							    <div><img className="img-story" src={require("../../images/1.jpg")}/></div>
							    <div><img className="img-story" src={require("../../images/2.jpg")}/></div>
							    <div><img className="img-story" src={require("../../images/3.jpg")}/></div>
							    <div><img className="img-story" src={require("../../images/4.jpg")}/></div>
	  							<div><img className="img-story" src={require("../../images/6.jpg")}/></div>
							    <div><img className="img-story" src={require("../../images/7.jpg")}/></div>
							    <div><img className="img-story" src={require("../../images/8.jpg")}/></div>							   
	  						</Carousel>
				     	</div>
			  	</Card>
			  	<div className="links">
				  	<div className="friends-link">
				  		Mrs-tian 友情链接
				  	</div>
				  	<Row>
						<Col span={24}>
			      		<Menu mode="horizontal">
			    			{

			    				this.state.links.map((value, index)=>{
			    					return (
			    						<Menu.Item key={value.id}> <a href={value.href}>{value.name}</a></Menu.Item>					          				
					        		)
			    				})

			    			}
				    	</Menu>

			      </Col>
				  	</Row>
			  	</div>
			  	<FooterComponent />
			</div>
		)
	}

}


