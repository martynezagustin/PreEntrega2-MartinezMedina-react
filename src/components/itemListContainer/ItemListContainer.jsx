import React, { useEffect, useState } from 'react';
import '../../style.css';
import Card from '../../components/card/Card';
import { useFetch } from '../../hooks/useFetch/useFetch';
import { API_URLS } from '../../constants/index';
import { useNavigate, useParams } from 'react-router-dom';

function ItemListContainer() {
  /* eslint-disable react/prop-types */
  const navigate = useNavigate()
  const [productFiltered, setProductFiltered] = useState([])
  const [cart, setCart] = useState([])
  const { data: products } = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config)
  const {categoryId} = useParams()

  const onShowDetails = (id) => {
    navigate(`/products/${id}`)
  }

  const onFilter = (name) => {
    const productByCategory = products.filter((product) => product.category === name)
    setProductFiltered(productByCategory)
  }

  const onAddToCart = (id) => {
    const item = products.find((product) => product.id === id);
    if(cart?.find((product) => product.id === id)?.quantity === Number(item.stock)) return;
    if(cart?.length === 0){
        setCart([{...item, quantity: 1}])
    }
    if(cart?.length > 0 && !cart?.find((product) => product.id === id)){
        setCart([...cart, {...item, quantity: 1}])
    }
    if(cart?.length > 0 && cart?.find((product) => product.id === id)) {
        setCart((currentCart) => {
            return currentCart.map((product) => {
                if(product.id === id) {
                    return { ...product, quantity: product.quantity + 1 }
                } else {
                    return product
                }
            })
        });
    }
  }

  useEffect(() => {
    if(categoryId){
      onFilter(categoryId)
    } else {
      setProductFiltered(products)
    }
  })

  return (
    <div>
      <>
        <p>Beats de Trap, Drill, Rkt.</p>
        <div className="inputContainer">
          <input type="text" placeholder='busca un producto' />
        </div>
        <div className="cardDivFather">
          {
            products.map((product) => {
              return (
                <Card key={product.id} {...product} onShowDetails={onShowDetails} onAddToCart={onAddToCart}/>
              )
            }
            )
          }
        </div>
      </>
    </div>
  );
}


export default ItemListContainer;