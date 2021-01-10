import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {

  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={props.speciality}>
            <img
              className='cards__item__img'
              alt='Travel'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h3 style={{paddingBottom: "5px"}}>{props.name}</h3>
            <h7 className='cards__item__text'>{props.tag}</h7>
          </div>
          <Link 
          to={`/chat/${props.id}`}
          style={{color: "red" , backgroundColor: "yellowgreen", fontSize: "30px", position: "absolute", textDecoration: "none", padding: "8px", borderRadius: "5px", cursor: "pointer !important"}}>
            Consult
          </Link>
        </div>
      </li>
    </>
  );
}

export default CardItem;