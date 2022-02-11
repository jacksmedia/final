import React, { useState } from "react"
import styled from "styled-components"

const Wrapper = styled.nav`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 0vw;
  z-index: 5;
  align-self: center;

  @media (max-width: 4096px) {
    position: sticky;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 0vw;

  @media (max-width: 4096px) {
    display: flex;
  }
`

const Splashscreen = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 4096px) {
    flex-direction: column;
    position: fixed;
    width: 100vw;
    justify-content: flex-start;
    padding-top: 0vh;
    background-color: #A0C6CC;
    transition: all 0.7s ease-in;
    top: ${props => (props.open ? "-100%" : "0")};
  }
`

const Sesame = styled.div`
  background-color: navy;
  border-radius: 3rem;
  color: snow;
  width: 35vw;
  height: 20vh;
  transition: all 1.3s linear;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  position: relative;
  transform: ${props => (props.open ? "color: red;" : "color: lime;")};
`
const Splasher = ( {open} ) => {
  const [splasherOpen, setSplasherOpen] = useState(true)

  return (
    <Wrapper>
      {splasherOpen ? (
        <Splashscreen>
           <Toggle
              splasherOpen={splasherOpen}
              onClick={() => setSplasherOpen(!splasherOpen)}
            >
              {splasherOpen ? (
                <Sesame open>
                  Visit Shibaworld
                </Sesame>
                ) : (<span/>)
              }
            </Toggle>
        </Splashscreen>
      ) : (
        <Splashscreen open>
          <h1 className="yikes">BORK FREN and ENTER</h1>
        </Splashscreen>
      )}
    </Wrapper>
  )
}

export default Splasher