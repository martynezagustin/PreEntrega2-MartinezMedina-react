const Card = ({ id, image, name, category, description, price, stock, onShowDetails }) => {
    return (
      <div className="card">
        <button className='cartButttonContainer' type='button' onClick={() => onShowDetails(id)}>
          <img src={image} alt={name} className="cardImg" />
          <div className="cardContainer">
            <h2 className='cardName'>{name}</h2>
            <h3 className='cardCategory'>{category}</h3>
            <p className='cardDescription'>{description}</p>
            <p className='cardPrice'>USD {price}</p>
            <p>{stock}</p>
          </div>
        </button>
        <div>
          <button className='cardAddToCart'>Add to cart</button>
        </div>
      </div>
    )
  }
  
  export default Card;