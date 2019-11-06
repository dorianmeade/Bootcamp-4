import React from 'react'

class RemoveBuilding extends React.Component {

    render()     {

        const { selectedBuilding, deleteUpdate } = this.props;

        
        if(selectedBuilding !== 0){
            return(
                <div> 
                   <i
                    onClick={() => deleteUpdate(selectedBuilding)}> Click here to remove the presented building</i>            
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
