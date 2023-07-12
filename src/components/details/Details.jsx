import React from "react"

const Details = ({id, image, name, category, description, price, stock, addToCart}) => {
    return(
            <div key={id} className='cardDetail'>
              <img src={image} alt={name} className="cardDetailImg"/>
              <div>
                <h2 className='cardDetailName'>{name}</h2>
                <h3 className='cardDetailCategory'>{category}</h3>
                <p className='cardDetailDescription'>{description}</p>
                <p className='cardDetailPrice'>USD {price}</p>
              </div>
              <div>
                <button className='cardDetailAddToCart' onClick={addToCart}>Add to cart</button>
                <p>{stock}</p>
              </div>
            </div>
    )
}

export default Details;