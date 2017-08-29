import React, {Component} from 'react';

class PlayListItem extends Component {
	static defaultProps = {
		song: {}
	}
	render(){
		return (
			<div className="playlist_item">
				<ul className="playlist_item_list">
					<li>User: {this.props.song.user}</li>
					<li>Artist/Band: {this.props.song.artist}</li>
					<li>Title: {this.props.song.title}</li>
					<li>Notes: {this.props.song.notes}</li>
				</ul>
			</div>
		)
	}
}

export default PlayListItem;