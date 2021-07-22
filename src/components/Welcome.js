import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

const Welcome = () => {
    let history = useHistory();

    return (
        <React.Fragment>
            <center>
                <br></br>
                <h1> Welcome to Recipes App! </h1><br></br>
            </center>
            <div className="pagination">
              <button onClick={()=>{history.push("/recipes");}}>Enter!</button>
            </div>
        </React.Fragment>
      );
};

export default Welcome;