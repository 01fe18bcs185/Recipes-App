import React, {useContext} from 'react';
import {RecipesContext} from '../context/RecipesContext';
import Button from './reusableComponents/Button';

const Pagination = () => {
    const { handlePage, isHidden, loading, error } = useContext(RecipesContext);
  
    return (
      <React.Fragment>
        {isHidden && !loading && !error && (
          <div className="pagination">
            <Button btnText="Prev" handleClick={() => handlePage("previous")} />
            <Button btnText="Next" handleClick={() => handlePage("next")} />
          </div>
        )}
      </React.Fragment>
    );
  };
export default Pagination;