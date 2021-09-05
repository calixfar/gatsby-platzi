import React, { useContext, useState } from 'react'
import priceFormat from '../utils/priceFormat'
import {
  Tag,
  SizeButton,
  QtySelect,
  SizeSelect,
  Button,
  StyledProductDetail
} from '../styles/components'
import SEO from './seo'
import {CartContext} from '../context'

const ProductDetail = ({ id, unit_amount: price, product: { images, name, metadata } }) => {

  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)

  const { addToCart } = useContext(CartContext)

  const handleSubmit = () => {
    addToCart({id, price, name, metadata, quantity: qty })
  }

  const formattedPrice = priceFormat(price)
  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={images[0]} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD {formattedPrice}</b>
        {metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>S</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Cantidad:</p>
        <QtySelect>
          <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</button>
          <input type='text' disabled value={qty} />
          <button onClick={() => setQty(qty + 1)}>+</button>
        </QtySelect>
        <Button onClick={handleSubmit}>Agregar al carrito</Button>
      </div>
    </StyledProductDetail>
  )
}

export default ProductDetail
