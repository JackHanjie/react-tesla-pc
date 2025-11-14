import React from 'react'
import styled from 'styled-components'
import img from '../assets/images/model-s.jpg'
import arrow from '../assets/images/down-arrow.svg'

function Section({ title, desc, primary, secondary, imgs }) {
  return (
    <Wrap imgs={imgs}>
      <Title>
        <h1>{title}</h1>
        <p>{desc}</p>
      </Title>
      <Buttons>
        <ButtonGroup>
          <div className='primary'>{primary}</div>
          <div className='secondary'>{secondary}</div>
        </ButtonGroup>
        <img className='down-arrow' src={arrow} alt='down arrow' />
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${({ imgs }) => imgs || img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .down-arrow {
    height: 40px;
    width: 40px;
    animation: animateDown 1s infinite;
    overflow: hidden;
    cursor: pointer;
  }
`

const ButtonGroup = styled.div`
  margin-bottom: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .primary {
    background-color: #393c41;
    height: 40px;
    width: 256px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
  }
  .secondary {
    background-color: white;
    height: 40px;
    width: 256px;
    color: #393c41;
    display: flex;
    opacity: 0.65;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: 1px solid #393c41;
    cursor: pointer;
  }
`
