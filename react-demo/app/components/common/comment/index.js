import React from 'react'
import ReactDom from 'react-dom'
import "../../../css/comment.css"
export default class CommentComponent extends React.Component{

	render() {
		return(
			<div className="comment">
				<form method="get">
					<label><input type="text" name="content"  className="inp-cont"/></label>
					<label><input type="submit" value="提交评论" className="sub" /></label>
				</form>
				<div>
					<ul>
						<li>djfskdsf</li>
					</ul>
				</div>
			</div>
			)
	}
}