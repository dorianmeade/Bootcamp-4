import React from 'react';

class BuilingList extends React.Component {

	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate } = this.props;

		const buildingList = data
		.filter(directory => {
			//allow search by building name or code 
			return (directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0) || (directory.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0)
		})
		.map(directory => {
			return (
				<tr key={directory.id}
					//onClick updates selected building via id 
					onClick={() => selectedUpdate(directory.id)}>
					<td>{directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			);
		});
		return <div>{buildingList}</div>
	}
}
export default BuilingList;
