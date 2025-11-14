import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import modelSImage from '../assets/images/model-s.jpg'
import modelXImage from '../assets/images/model-x.jpg'
import model3Image from '../assets/images/model-3.jpg'
import modelyImage from '../assets/images/model-y.jpg'


function Home() {
  return (
    <Container>
      <Section 
        title="Model S"
        desc="从起售价 69,990 元起"
        primary="立即预订"
        secondary="了解更多"
        imgs={modelSImage}
      />
      <Section 
        title="Model X"
        desc="从起售价 74,990 元起"
        primary="立即预订"
        secondary="了解更多"
        imgs={modelXImage}
      />
      <Section 
        title="Model 3"
        desc="从起售价 44,990 元起"
        primary="立即预订"
        secondary="了解更多"
        imgs={model3Image}
      />
      <Section 
        title="Model Y"
        desc="从起售价 64,990 元起"
        primary="立即预订"
        secondary="了解更多"
        imgs={modelyImage}
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`