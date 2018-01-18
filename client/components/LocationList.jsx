import React from 'react';

export default class LocationList extends React.Component {

	constructor(props){
		super(props);
		this.data = this.props.locationData;
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

	// searchFilter() {
	// 	let searchList = data.filter((item)=>{
	// 		let pincode = item.pinCode.slice(0, this.props.searchItem.length);
	// 		return this.props.searchItem === pincode;
	// 	});
	// 	this.data = searchList;
	// 	console.log('search', searchList);
	// }

	render() {
		// this.searchFilter();
		return (
			<div style={{textAlign: 'center'}}>
				<table className='table table-hover'>
					<thead>
						<tr>
							<th>Lat, Lng</th>
							<th>Pincode</th>
							<th>Location</th>
							<th>Orders</th>
						</tr>
					</thead>
					<tbody>
						{this.data.map(this.renderTable)}
					</tbody>
				</table>
			</div>
		);
	}
}
