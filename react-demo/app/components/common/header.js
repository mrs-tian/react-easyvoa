import React from 'react'
import ReactDom from 'react-dom'
import {Row, Col, Menu, Icon, Button, Modal, Tabs, Form, Input, notification, Card, Table} from 'antd'
import "../../css/page.css"

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class HeaderComponent extends React.Component {

	componentWillReceiveProps() {

	}

	constructor(props) {
		super(props);	
			let login = false;
			try{
				login = localStorage.login ? true : login
			}catch(e){}

		this.state = {
			selectedKey:"",
			categories:[],
			normalMenu:[],
			middleMenu:[],
			primeMenu:[],	
			showModal: false,
			login: login
		}
		this.handleSelect = this.handleSelect.bind(this);
		this.handleModelToggle = this.handleModelToggle.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		fetch("/category.json")
			.then((response) => response.json())
			.then((json) => {
				if(json.data.categories.length >10){
					json.data.categories.length = 10;
				}
				this.setState({
					categories: json.data.categories,
					 normalMenu:json.data.normalMenu,
					 middleMenu:json.data.middleMenu,
					 primeMenu:json.data.primeMenu				
				})
			})
			.catch((ex) => {
				console.log("parsing failed",ex)
			})
	}

	handleSelect(params) {
		this.setState({
			selectedKey: params.key
		})
	}

	handleSubmit(e) {
		e.preventDefault();
	    this.props.form.validateFields((err, values) => {
			if (!err) {

				//前端校验+ajax调用登陆接口
				try {
					localStorage.login = "true"
				}catch(e){}

				notification.open({
				    message: '登陆成功',
				    description: '最近有***11折活动，欢迎大家积极参与',
				});
				this.setState({
					showModal: false,
					login: true
				})
			}else{

			}
	    });
	}

	handleModelToggle() {
			this.setState({
				showModal: !this.state.showModal
			})
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="header">
				<Row>
			      <Col span={4}>
			      	<img className="header-img" src={require("../../images/logo.png")} />
			      </Col>
			      <Col span={16}>
			      	<Menu mode="horizontal" onSelect={this.handleSelect} className="header-menu" selectedKeys={[this.state.selectedKey]} id="big">
		    			{
		    				this.state.categories.map((value, key)=>{
		    					return (
		    						<Menu.Item key={value.id}>
				          				<Icon type={value.type} />{value.name}
				        			</Menu.Item>
				        		)
		    				})
		    			}
				    </Menu>
			      </Col>
			      <Col span={4}>
				      {
				      	!this.state.login ? <Button type="primary" onClick={this.handleModelToggle}>登录 / 注册</Button>:
				      	<Button type="primary" className="quit">退出</Button>
				      }
			      </Col>
				</Row>

				 <Modal onCancel={this.handleModelToggle} footer={null} title="登陆 ／ 注册" visible={this.state.showModal}>
			       <Tabs type="card">
						<TabPane tab="登陆" key="1">
							<Form onSubmit={this.handleSubmit} className="login-form">
								<FormItem>
							          {getFieldDecorator('userName', {
							            rules: [{ required: true, message: '用户名不得为空' }],
							          })(
							            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
							          )}
						        </FormItem>

						        <FormItem>
							          {getFieldDecorator('password', {
							            rules: [{ required: true, message: '请输入密码' }],
							          })(
							            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
							          )}
						        </FormItem>

						         <FormItem>
							        	<Button type="primary" htmlType="submit" className="login-form-button">
							        		登陆
							        	</Button>
								 </FormItem>
							 </Form>
						</TabPane>
						<TabPane tab="注册" key="2">mmd</TabPane>
					</Tabs>
			    </Modal>

			    <Row className="learn-menu">
			      <Col className="menu-title" span={4}>常速英语
			      		<Menu mode="vertial">
			    			{

			    				this.state.normalMenu.map((value, index)=>{
			    					return (
			    						<Menu.Item key={value.id} className="menu-size">{value.title}</Menu.Item>
					          				
					        		)
			    				})
			    			}
				    	</Menu>
			      </Col>
			      <Col className="menu-title" span={10}>慢速英语(中级)
			      		<Menu mode="horizontal" >
			    			{

			    				this.state.middleMenu.map((value, index)=>{
			    					return (
			    						<Menu.Item key={value.id} className="menu-size">{value.title}</Menu.Item>
					          				
					        		)
			    				})
			    			}
				    	</Menu>
			      </Col>
			      <Col className="menu-title" span={10}>英语教学(初级)
			      		<Menu mode="horizontal">
			    			{

			    				this.state.primeMenu.map((value, index)=>{
			    					return (
			    						<Menu.Item key={value.id} className="menu-size">{value.title}</Menu.Item>
					          				
					        		)
			    				})
			    			}
				    	</Menu>

			      </Col>
			   	</Row>

			</div>
			)
		}
	}
export default Form.create()(HeaderComponent);