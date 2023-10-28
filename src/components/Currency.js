import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch} = useContext(AppContext);

	const changeCurrency = (val)=>{
			dispatch({
				type: 'CHG_CURRENCY',
				payload: val,
			})
	}

  return (
		<div className='alert alert-success' >
        <label style={{marginLeft: '1rem' , backgroundColor:'#FF80FF', color:'black'}}> Currency
        <select name='hover_color'id="currency" onChange={(event)=>changeCurrency(event.target.value)} style={{ marginLeft: '1rem' , backgroundColor:'#ffffff', color:'black'}}>
        <option style={{color:'black'}}  value="$">($)Dollar</option>
        <option style={{color:'black'}} value="£">(£)Pound</option>
        <option style={{color:'black'}} value="€">(€)Euro</option>
        <option style={{color:'black'}}  value="₹">(₹)Rupee</option>
      </select>
      </label>
    </div>
	);
};

export default Currency;
