import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [step, setStep] = useState(0)
  const tutorialData = [
    {
      title: 'Dedicate many hours',
      description: "A minimum time of 30 weekly hours. If you don't have enough, you'll have to dedicate more hours. In the beginning it seems impossible, but you'll quickly notice improvements.",
      bgColor: '',
      image: '',
    }
  ]

  return (
    <>
      <Card tutorialData={tutorialData} step={step}/>
    </> 
  )
}

export default App
