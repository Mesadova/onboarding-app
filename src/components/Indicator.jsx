import styled from 'styled-components'

const StepContainer = styled.div`
    display: flex;
    position: relative;
`

const StepWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border: solid;
    border-color: white;
    background-color: white;
    gap: 12px;
    align-items: center;
    align-content: center;
    position: relative;  
`

const StepStyle = styled.button`
    width: 12px;
    height: 12px;
    border: solid;
    color: #B0C4DE;
    border-radius: 80%;
    border-color: #B0C4DE;
    background-color: #B0C4DE;
    transition: 0.6s ease;

    &.something {
        background: #4169E1;
        border-color: #4169E1;
        width: 40px;
        border-radius: 20px;
    }
`

const Indicator = ({tutorialData, step, nextStep, prevStep}) => {
    const renderIndicator = () => {
        return tutorialData.map(element => {
            const elementIndex = tutorialData.indexOf(element)
            if (elementIndex === step) {
                return (
                    <StepStyle className='something' key={elementIndex}  />
                )
            } else if (elementIndex > step) {
                return (
                    <StepStyle key={elementIndex} onClick={nextStep}  />
                )
            } else {
                return (
                    <StepStyle key={elementIndex} onClick={prevStep}  />
                )
            }
        })
    }

    return(
        <StepContainer>
            <StepWrapper>
                {renderIndicator()}
            </StepWrapper>
        </StepContainer>
    )
}

export default Indicator