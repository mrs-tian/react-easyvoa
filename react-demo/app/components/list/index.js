import React from 'react'
import ReactDom from 'react-dom'
import {Link} from 'react-router'
import {Row, Col, Menu, Icon, Card, Carousel, Pagination} from 'antd'
import HeaderComponent from '../common/header/header.js'
import FooterComponent from '../common/footer/footer.js'
import "../../css/list.css"
import "../../css/index.css"

//const mountNode = ' ';
export default class ListComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {			
			articles:[],
			
			hover:false			
		}
		this.onMouseEnter = this.onMouseEnter.bind(this);
		 this.onMouseLeave = this.onMouseLeave.bind(this);
		 //this.onChange = this.onChange.bind(this);	
					
	}
	/*onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });*/
   /* onChange(page) {
    	this.setState({
    		current:page
    	})
    }*/

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
		fetch("/list.json")
			.then((response) => response.json())
			.then((json) => {
				this.setState({					
					articles: json.data.articles
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
				  <Card>
				    {
				    	this.state.articles.map((value, index)=>{
	
				    		return (
				    				<p className="content-item" key={value.id}>
				    					<Link to={"/detail/" + value.id} style={{color: value.color}} >
				    						<span className="content-item-title" onMouseEnter={this.onMouseEnter}>{value.title}</span>
				    						<span className="content-item-date" onMouseEnter={this.onMouseEnter}>({value.date})</span>
				    						{value.new ? <img className="content-item-new" src={require("../../images/new.gif")} /> : ""}
				    					</Link>
				    				</p>
				    			)
				    	})
				    }
				</Card>
				{/* <Pagination current={this.state.current} onChange={this.onChange} total={50} />;*/}
				 <FooterComponent />
			</div>
		)
	}

}
//export default ReactDom.render(<ListComponent />);