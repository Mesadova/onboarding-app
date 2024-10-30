import { useState } from 'react'
import AppCard from './components/Card'
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [step, setStep] = useState(0)
  const [forward, setForward] = useState(true)
  
  const [isVisible, setIsVisible] = useState(true)

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
      description: "Good rest and disconnecting are vital. This way, you'll reduce stress and anxiety. It will improve your concentration and solidify your learning.   \n ",
      bgColor: '#F4D06F',
      image: 'src/assets/meditation.svg',
    }
  ]

  const nextStep = () => {
    const addStep = step + 1
    setStep(addStep)
    setForward(true)
  }

  const prevStep = () => {
    const subStep = step -1
    setStep(subStep)
    setForward(false)
  }

  const containerStyle = {
    display: 'flex',
    border: 'solid',
    borderColor: 'red',
    justifyContent: 'center',
  }

  return (
    <div className='container' style={containerStyle}>
      <AppCard tutorialData={tutorialData} step={step} 
      forward={forward} nextStep={nextStep} prevStep={prevStep} isVisible={isVisible}/>
    </div> 
  )
}

export default App
