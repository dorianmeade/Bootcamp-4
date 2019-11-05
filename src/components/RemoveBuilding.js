import React from 'react'

class RemoveBuilding extends React.Component {

    render()     {

        const { data, selectedBuilding, deleteUpdate } = this.props;

        const info = data[selectedBuilding - 1]
    
        if(selectedBuilding !== 0){
            return(
                <div> 
                   <i onClick={() => deleteUpdate(info.id)}> Click here to remove the presented building</i>            
                </div>
             )
        }
        else{
            return(
                <div></div>
            )
        }

        
        

        
    }
}
export default RemoveBuilding;
