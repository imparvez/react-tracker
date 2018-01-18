import React from 'react';
import SearchBar from './SearchBar.jsx';
import LocationList from './LocationList.jsx';
import data from '../assets/data.js';
import Map from './Map.jsx'

export default class App extends React.Component {

	constructor(){
		super();

		this.state = {
			searchInput: ''
		}
		this.onSearch = this.onSearch.bind(this);
	}

	renderTable(detail){
		const lat = detail.latitude;
		const lon = detail.longitude;
		const pincode = detail.pinCode;
		const location = detail.location;
		const orders = detail.order.map((item) => {
			return (
				<div>{item}</div>
			)
		});

		return( <tr>
			{/*<td><GoogleMap lat={lat} lon={lon}/></td>*/}
			<td>{lat}, {lon}</td>
			<td>{pincode}</td>
			<td>{location}</td>
			<td>{orders}</td>
		</tr>)
	}

	onSearch(value) {
		this.setState({
			searchInput: value
		})
	}

	render() {
		return (
			<div style={{textAlign: 'center'}}>
				<Map searchItem={this.state.searchInput} locationData={data} />
				<SearchBar onSearch={this.onSearch} />
				<LocationList locationData={data} />
			</div>
		);
	}
}
