import React from 'react'
import styled from 'styled-components';
import Section from './Section'

const Home = () => {
  return (
    <Container>
      <Section 
        title = "Model S"
        description = "Order Online for Touchless Delivery"
        backgroundImg = "model-s.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"  
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
  `