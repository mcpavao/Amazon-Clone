import React from 'react'
import styled from 'styled-components'

const CartItem = ({ id, item }) => {
  return (
    <Container>
      <ImageContainer> 
          <img src={item.image} />
      </ImageContainer>

      <CartItemInfo>
        <CartItemInfoTop>
          <h2>{item}</h2>
        </CartItemInfoTop>
        <CartItemInfoBottom>
            <CartItemQuantity>{item}</CartItemQuantity>
            <CartItemDelete>Delete</CartItemDelete>
        </CartItemInfoBottom>  
      </CartItemInfo>
      <CartItemPrice>
        EUR {item}
      </CartItemPrice>
    </Container>
  )
}

export default CartItem

const Container = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
`
const ImageContainer = styled.div`
  widht: 180px;
  height: 180px;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 16px;
  img{
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`
const CartItemInfo = styled.div``

const CartItemInfoTop = styled.div`
  color: #007185;
  h2 {
    font-size: 18px;
  }
`
const CartItemInfoBottom = styled.div`
  display: flex;
  margin-top: 4px;
`
const CartItemQuantity = styled.div``

const CartItemDelete = styled.div`
  color: #007185;
  margin-left: 16px;
  cursor: pointer;
`

const CartItemPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-left: 16px;
`
