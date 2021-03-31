import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'

function CartItems({ cartItems }) {
  return (
    <Container> 
      <Title>Shopping Cart</Title>
      <hr/>
      <ItemsContainer>
        {
          cartItems.map((item)=>(
            <CartItem
              item={item.id}
              item={item.product}
            />
          ))
        }

        <CartItem />
      </ItemsContainer>
    </Container>
  )
}

export default CartItems

const Container = styled.div`
  height: 300px;
  flex: 0.8;
  padding: 20px;
  margin-right: 18px;
  background-color: white;
  
`
const Title = styled.div`
`

const ItemsContainer = styled.div``