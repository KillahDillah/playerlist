import React, {Component} from 'react';
import '../styles/index.css';

class PlayListForm extends Component {
	constructor(){
		super()
		this.state = {
			value: ""
		}
	}
	handleListForm = (e) => {
		this.setState({value:e.state.value})
	}
	render (){
		return(
				<form className="form">
					<div className="form_contents">
						<label>Username: </label>
						<br/>
						<input type="text" placeholder="Name or Username" />
					</div>
					<div className="form_contents">
						<label> Artist or Band Name: </label>
						<br/>
						<input type="text" placeholder="Artist or Band Name"/>
					</div>
					<div className="form_contents">
						<label> Song Title: </label>
						<br/>
						<input type="text" placeholder="Song Title" />
					</div>
					<div className="form_contents">
						<label> Notes: </label>
						<br/>
						<textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
					</div>
						<div className="form_contents">
						<button type="submit" id="submit" className="submit">Submit</button>
					</div>
				</form>
		)
	}
}

export default PlayListForm;