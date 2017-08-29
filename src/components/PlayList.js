import React, {Component} from 'react';
import PlayListItem from './PlayListItem'

class PlayList extends Component {
	constructor(props) {
		super(props)
		console.log(props)
	}
	componentWillReceiveProps(newprops) {
		console.log(this.props, newprops)
	}
	render(){
		return (
			<div className="playlist">
				<button type="submit" name="update" id="update">Update List</button>
				<PlayListItem/>
				{this.props.songs.map(function(song, i){
					return (
						<PlayListItem key={'song' + i} song={song}/>
						)
				})}
			</div>
		)
	}
}

export default PlayList;