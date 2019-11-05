import React from 'react';

class Search extends React.Component {
	filterUpdate() {
		//get updated textbox value
		const val = this.myValue.value
		//set filtered text to this vlaue
		this.props.filterUpdate(val)
	}
	render() {
		
		return (
			<form>
				<input 
				type="text" 
				placeholder="Type to Filter"
				//save value from textbok as function of updated value
				ref={(value) => this.myValue = value}
				//onChange value for input tag to capture textbox value
				onChange={this.filterUpdate.bind(this)}
				 />
			</form>
		);
	}
}
export default Search;
