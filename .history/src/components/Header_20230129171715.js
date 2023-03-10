import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
      </Menu>
    </Container>
  )
}

export default Header

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
`
const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
a {
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
  }`