import React from 'react';
import NavBar from '../../Navbar/navbar';
import reactDom from 'react-dom';

const input_enabler2 = (qty) => {
  return(qty < 1 ? <p></p> : <span><input className="bg-dark text-white" placeholder='Qty' maxLength="1" max={qty} min="1"
             required type="number"></input></span>)
}
let count = 0;
const checker2 = (Qty) => {

  if (Qty > 0 && Qty <= 3) {
    return (<p className='text-success fw-bold'>{Qty} left...</p>)
  } else if (Qty <= 1) {
    return(<p className='text-danger fw-bold'>Out of stock !</p>)
  } else {
    return <p className='text-success fw-bold'>In stock...</p>;
  }
}

<<<<<<< HEAD
const increment_item_count = (e) => {
    e.preventDefault();
    let counts = parseInt(localStorage.getItem("count"));
    localStorage.setItem("count", ++counts);
    
  }

=======
>>>>>>> badd5fb6a704b33b9db105556194ce4256384025


export const Main_item = (props) => {

  const btn_enabler2 = (qty) => {
<<<<<<< HEAD
    return (qty < 1 ? <p></p> : <button onClick={ increment_item_count}  className="btn btn-primary">Add to cart</button>)
=======
    return (qty < 1 ? <p></p> : <button onClick={() => { count += 1; return props.onAdded(props.id) }}  className="btn btn-primary">Add to cart</button>)
>>>>>>> badd5fb6a704b33b9db105556194ce4256384025
  }


  return ( 
      

    
      <div className='col gy-5'>
      <div className="card cards-styles" id="hovering">
      <img src={props.img_src} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <form>
          <h5 className="card-title">{props.name}</h5>
            {checker2(props.Qty_available)} {input_enabler2(props.Qty_available)} {btn_enabler2(props.Qty_available)}
          </form>
        </div>
      </div>
      </div>
   
      
    );
};
