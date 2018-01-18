import React from 'react';
export default class SearchBar extends React.Component {

	constructor(props){
		super(props);
		this.searchText = '';
	}
	
	render() {
		return (
			<div style={{textAlign: 'center'}}>
				<div className='search-bar'>
					<input 
						placeholder='input text here'
						className='input-group'
						onChange={(event) =>{ this.searchText = event.target.value;}}
					/>
					<button onClick={() =>{ this.props.onSearch(this.searchText)}}>Find</button>
				</div>
			</div>
		);
	}
}
