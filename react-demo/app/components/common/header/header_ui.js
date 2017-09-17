import React from 'react'
import ReactDom from 'react-dom'
import {Link} from 'react-router'
import {Row, Col, Menu, Icon, Button, Modal, Tabs, Form, Input, Card, Table} from 'antd'
import "../../../css/header.css"
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class HeaderUiComponent extends React.Component{

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
	    this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.handleSubmit();
			}
	    });
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="header">
				<Row>
			      <Col span={4}>
			      	<img className="header-img" src={require("../../../images/logo.png")} />
			      </Col>
			      <Col span={16}>
			      	<Menu mode="horizontal" onSelect={this.props.handleSelect} className="header-menu" selectedKeys={[this.props.selectedKey]} id="big">
		    			{
		    				this.props.categories.map((value, key)=>{
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
				      	!this.props.login ? <Button type="primary" onClick={this.props.handleModelToggle}>登录 / 注册</Button>:
				      	<Button type="primary" className="quit" onClick={this.props.handleLogout}>退出</Button>
				      }
			      </Col>
				</Row>

				 <Modal onCancel={this.props.handleModelToggle} footer={null} title="登陆 ／ 注册" visible={this.props.showModal}>
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
			      		<ul className="header-list">
			    			{

			    				this.props.normalMenu.map((value, index)=>{
			    					return (
			    						<Link to={"/list/"+ value.id} key={value.id}>
			    						<li className="header-li-vertical" key={value.id}>{value.title}</li>
					          			</Link>	
					        		)
			    				})
			    			}
				    	</ul>
			      </Col>
			      <Col className="menu-title" span={10}>慢速英语(中级)
			      		<ul className="header-list">
			    			{

			    				this.props.middleMenu.map((value, index)=>{
			    					return (
			    						<Link to={"/list/"+ value.id} key={value.id}>
			    						<li className="header-li" key={value.id}>{value.title}</li>
					          			</Link>	
					        		)
			    				})
			    			}
				    	</ul>
			      </Col>
			      <Col className="menu-title" span={10}>英语教学(初级)
			      		<ul className="header-list">
			    			{

			    				this.props.primeMenu.map((value, index)=>{
			    					return (
			    						<Link to={"/list/"+ value.id} key={value.id}>
			    						<li className="header-li" key={value.id}>{value.title}</li>
					          			</Link>		
					        		)
			    				})
			    			}
				    	</ul>

			      </Col>
			   	</Row>
			</div>
			)
		}
}
export default Form.create()(HeaderUiComponent);