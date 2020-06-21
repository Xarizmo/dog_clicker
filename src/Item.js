import React from "react";
import './Item.css';
import dogPhoto from './assets/images/dog.jpg';

function Item({ itemIndex, stateIndex, onClickHandler }) {
  let clazz = itemIndex === stateIndex ? 'photo show' : 'photo';
  return (
    <div className='item'>
      <img src={dogPhoto} className={clazz} onClick={onClickHandler} alt='dog'/>
    </div>
  )
}

export default Item;