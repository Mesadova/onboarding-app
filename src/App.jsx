import { useState } from 'react'
import AppCard from './components/Card'
import "bootstrap-icons/font/bootstrap-icons.css";
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: center;
height: 100vh;
overflow: hidden;
margin-top: 20px;
`

const CardContainer = styled.div`
position: relative;
width: 36rem;
height: 22rem;
`

function App() {
  const [step, setStep] = useState(0)

  const tutorialData = [
    {
      title: 'Dedicate many hours',
      description: "A minimum time of 30 weekly hours. If you don't have enough, you'll have to dedicate more hours. In the beginning it seems impossible, but you'll notice rapid improvement.",
      bgColor: '#4DAAAB',
      image: 'src/assets/time_management.svg',
    },
    {
      title: 'Work on your own projects',
      description: "It's better to spend 10 hours working on your own projects than 10 hours watching tutorials. Motivation and involvement in the project will help you accelerate your learning.",
      bgColor: '#D4D4D7',
      image: 'src/assets/programming.svg',
    },
    {
      title: 'Try to rest',
      description: "Good rest and disconnecting are vital. This way, you'll reduce stress and anxiety. It will improve your concentration and solidify your learning.\n ",
      bgColor: '#F4D06F',
      image: 'src/assets/meditation.svg',
    },
    {
      title: 'Break Down Large Problems',
      description: "Instead of trying to tackle a big project all at once, break it into smaller, manageable tasks. This will make each part feel more achievable.\n ",
      bgColor: '#D28EE8',
      image: 'src/assets/projects.svg',
    }
  ]

  const nextStep = () => {
    const addStep = step + 1
    setStep(addStep)
  }

  const prevStep = () => {
    const subStep = step -1
    setStep(subStep)
  }

  return (
    <Container>
      <CardContainer>
        {tutorialData.map((person, index) => {
          let position = index > step ? "nextCard" : index === step ? "activeCard" : "prevCard";
          return <AppCard key={index} index={index} position={position}
                image={person.image} description={person.description} title={person.title} bgColor={person.bgColor}
                tutorialData={tutorialData} step={step}
                nextStep={nextStep} prevStep={prevStep} 
                setStep={setStep}/>
        })}
      </CardContainer>
    </Container>
  )
}

export default App
