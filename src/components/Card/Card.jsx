import './card.css'

export default function Card({
   name,
   status,
   species,
   gender,
   origin,
   image,
   onClose}) {
   return (
      <div className="card">
         <div className='close'>
            <button className='closeBtn' onClick={onClose}>X</button>
         </div>
         <div className='cardBody'>
            <h3 className='status'>{status}</h3>
            <h2 className='name'>{name}</h2>
            <p className='species'>{species}</p>
            <p className='gender'>{gender}</p>
            <p className='origin'>{origin.name}</p>
         </div>
         <div className='cardImage'>
            <img src={image} alt='' /> 
         </div>
      </div>
   );
}

