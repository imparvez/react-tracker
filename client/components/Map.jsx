import React, { Component } from 'react';

const style ={
    width: '500px',
    height: '400px',
    margin: '2em auto'
}

export default class Map extends React.Component {

	constructor(props){
		super(props);
		this.map;
	}

	componentDidMount(){
		this.mapBinder();
	}

	mapBinder(){
		var markers = this.props.locationData;
		var myOptions = {
	        mapTypeId: google.maps.MapTypeId.ROADMAP,
	        mapTypeControl: false
	    };
		var map = new google.maps.Map(this.refs.map, myOptions);
	    var marker, i;
	    var bounds = new google.maps.LatLngBounds();

		for (i = 0; i < markers.length; i++) { 
	        var pos = new google.maps.LatLng(markers[i]['latitude'], markers[i]['longitude']);
	        bounds.extend(pos);
	        marker = new google.maps.Marker({
	            position: pos,
	            map: map
	        });
	    }
	    map.fitBounds(bounds);
	    this.map = map;
	}


	onSearch() {
		if(this.map){
		console.log('ser',this.props.searchItem);
		let searchList = this.props.locationData.filter((item)=>{
			return this.props.searchItem === item.pinCode;
		});
		this.data = searchList;
		console.log('search', searchList);
          this.map.setZoom(8);
          this.map.setCenter(new google.maps.LatLng(searchList[0].latitude, searchList[0].longitude));
		}
	}

	render() {
		this.onSearch();
		return (
			<div id="map_canvas" ref="map" style={style}></div>
		);
	}
}

