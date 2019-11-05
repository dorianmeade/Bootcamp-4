import React from 'react';

class ViewBuilding extends React.Component {
	
	render() 
	{
		const { data, selectedBuilding } = this.props

		const info = data[selectedBuilding - 1]
	
		if(selectedBuilding === 0)
		{
			return(
				<div>
					<p>
						{' '}
						<i >Click on a name to view more information</i>
					</p>
				</div>
			);
		}
		else 
		{
			return(
				<div>
					<p>Building Info</p>
						{info.name ? <ul>Name: {info.name}</ul> : ' '}
						{info.code ? <ul>Code: {info.code}</ul> : ' '}
						{info.coordinates ? <ul>Latitude: {info.coordinates.latitude}</ul> : ''}
						{info.coordinates ? <ul>Longitude: {info.coordinates.longitude}</ul> : ''}
						{info.address ? <ul>Address: {info.address}</ul> : ' '}
				</div>
			);

		}
		
	}
}
export default ViewBuilding;
