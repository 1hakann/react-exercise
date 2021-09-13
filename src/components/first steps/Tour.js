import React , {useState} from 'react'

const Tour = ({id, name, description, image, price, removeTour}) => {
  const [readMore, setReadMore] = useState(true)

   return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
       <div className="tour-info">
       <h4>{name}</h4>
       <h4 className="tour-price">{price}</h4>
       </div>
       <div className="tour-info">
       <p className="info">
          {readMore ? description : `${description.substring(0,80)}`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? 'Show Less' : 'Show More'}
        </button>
       </p>
       
       </div>
      <div className="tour-info">
        <button className="delete-btn" onClick={() => {removeTour(id)}}>Not Interested</button>
        </div>
       </footer>
    </article>
   )
}

export default Tour