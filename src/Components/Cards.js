import React, {useState, useEffect} from 'react';
import './Cards.css';
import CardItem from './CardItem';
import db from "../firebase/firebase"

function Cards() {

  const [doctors, setDoctors] = useState([])

  useEffect(() => {
      const unsubscribe = db.collection("doctors").onSnapshot(e => (
      setDoctors(e.docs.map(doc =>(
        {
          id: doc.id,
          data: doc.data()
        }
      )))
    ))

    
    return () => {
        unsubscribe();
    }
    
  }, [])

  console.log(doctors.map(e => e.id))
  
 

  return (
    <div className='cards'>
      <h1>Doctors</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {doctors.slice(0,3).map(e =>
              <CardItem
              id={e.id}
              src={e.data.src}
              tag={e.data.tag}
              name={e.data.name}
              speciality={e.data.speciality}
            />
              )}
          </ul>
          <ul className='cards__items'>
            {doctors.slice(3,6).map(e =>
              <CardItem
              id={e.id}
              src={e.data.src}
              tag={e.data.tag}
              name={e.data.name}
              speciality={e.data.speciality}
            />
              )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;