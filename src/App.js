import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';
import cloneDeep from 'lodash/cloneDeep';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //two states = things that will change
      filterText: '',
      selectedBuilding: 0,
    };
  }

  filterUpdate(value) {
    //set filterText state to value
    this.setState({
        filterText: value
      })
  }

  selectedUpdate(id) {
    //update selectedBuilding state to id
    this.setState({
      selectedBuilding: id
    })
  }

  addUpdate(name, code, addr, lat, long) {
    const newInfo = cloneDeep(this.props.data[0])
    newInfo.name = name.charAt(0).toUpperCase() + name.slice(1)
    newInfo.code = code.toUpperCase()
    newInfo.id = this.props.data.length + 1

    if(addr === "")
      newInfo.address = null;
    else
      newInfo.address = addr;

    if(lat === "")
      newInfo.coordinates.latitude = null;
    else
      newInfo.coordinates.latitude = lat;

    if(long === "")
      newInfo.coordinates.longitude = null;
    else
      newInfo.coordinates.longitude = long;

    this.props.data.push(newInfo)

    this.setState({
      data: this.props.data
    })
  }

  deleteUpdate(id)
  {
    let data = this.props.data

    data = data.splice(id - 1, 1)

    this.setState({
      data: this.props.data,
      selectedBuilding: 0
    })
  }
  render() {
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
        <Search 
        filterText={this.state.filterText}
        filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                data={this.props.data}
                selectedBuilding={this.state.selectedBuilding}
              /> 
              <div>
              <RemoveBuilding
                    data={this.props.data}
                    selectedBuilding={this.state.selectedBuilding}
                    deleteUpdate={this.deleteUpdate.bind(this)}
                  />
              <p> {''}</p>
                  <AddBuilding
                    data={this.props.data}
                    addUpdate={this.addUpdate.bind(this)}
                  />
              </div>
            </div>
            
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
