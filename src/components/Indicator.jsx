import { Button, Card, CardBody } from "react-bootstrap"
import styled from 'styled-components'
import { motion } from "framer-motion"

const Indicator = (props) => {

const StepContainer = styled.div`
    display: flex;
    position: relative;
`
const StepProgress = styled.div`
    position: absolute;
    background: #4a154b;
    height: 9.8px;
    width: 32px;
    border-radius: 20px;
    bottom: -4.8px;
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

const StepStyle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #A9A9A9;
    transition: 1.4s ease;
`

const cardFooterStyle = {
    display: 'flex',
    justifyContent: 'space-between',
}

const buttonStyle = {
    borderRadius: '100px',
    borderColor: 'white',
    width: '55px',
    height: '55px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
}

const arrowsStyle = {
    fontSize: '55px',
}

const buttonContainerStyle = {
    display: 'flex',
    wrap: 'no-wrap',
    direction: 'rtl',
    borderColor: 'white',
    backgroundColor: 'white',
    gap: '10px'
}

return (
    <>
    {props.forward ? (
        props.step === 0 ? (
            <div style={cardFooterStyle}>
                <StepContainer>
                    <StepWrapper>
                        <motion.div
                            initial={{x: 10}}
                            animate={{x: 11}}
                            transition={{duration: 0}}
                        >
                            <StepProgress></StepProgress>
                        </motion.div>
                        <StepStyle></StepStyle>
                        <StepStyle></StepStyle>
                        <StepStyle></StepStyle>
                        <StepStyle></StepStyle>
                    </StepWrapper>
                </StepContainer>
                <div style={buttonContainerStyle}>
                    <Button onClick={props.nextStep} style={buttonStyle} >
                        <i className="bi bi-arrow-right-circle-fill text-dark" style={arrowsStyle}></i>
                    </Button>
                </div>
            </div>
        ) : props.step === 1 ? (
            <div style={cardFooterStyle}>
                <StepContainer>
                    <StepWrapper>
                    <motion.div
                            initial={{x: 11}}
                            animate={{x: 33.3}}
                            transition={{duration: 0.4}}
                        >
                            <StepProgress></StepProgress>
                        </motion.div>
                        <StepStyle></StepStyle>
                        <StepStyle></StepStyle>
                        <StepStyle></StepStyle>
                        <StepStyle></StepStyle>
                    </StepWrapper>
                </StepContainer>
                <div style={buttonContainerStyle}>
                    <Button onClick={props.nextStep} style={buttonStyle} >
                        <i className="bi bi-arrow-right-circle-fill text-dark" style={arrowsStyle}></i>
                    </Button>
                    <Button onClick={props.prevStep} style={buttonStyle}>
                        <i className="bi bi-arrow-left-circle text-dark" style={arrowsStyle}></i>
                    </Button>
                </div>
            </div>
        ) : (
            <div style={cardFooterStyle}>
                <StepContainer>
                    <StepWrapper>
                        <motion.div
                            initial={{x: 33.3}}
                            animate={{x: 56.4}}
                            transition={{duration: 0.4}}
                        >
                            <StepProgress></StepProgress>
                        </motion.div>
                        <StepStyle></StepStyle>
                        <StepStyle></StepStyle>
                        <StepStyle></StepStyle>
                        <StepStyle></StepStyle>
                    </StepWrapper>
                </StepContainer>
                <div style={buttonContainerStyle}>
                    <Button onClick={props.prevStep} style={buttonStyle}>
                        <i className="bi bi-arrow-left-circle text-dark" style={arrowsStyle}></i>
                    </Button>
                </div>
            </div>
        )
    ) : (
        props.step === 0 ? (
            <div style={cardFooterStyle}>
                <StepContainer>
                    <StepWrapper>
                        <motion.div
                            initial={{x: 33.3}}
                            animate={{x: 11}}
                            transition={{duration: 0.4}}
                        >
                            <StepProgress></StepProgress>
                        </motion.div>
                        <StepStyle></StepStyle>
                        <StepStyle></StepStyle>
                        <StepStyle></StepStyle>
                        <StepStyle></StepStyle>
                        
                    </StepWrapper>
                </StepContainer>
                <div style={buttonContainerStyle}>
                    <Button onClick={props.nextStep} style={buttonStyle} >
                        <i className="bi bi-arrow-right-circle-fill text-dark" style={arrowsStyle}></i>
                    </Button>
                </div>
            </div>)
        : props.step === 1 ? (
            <div style={cardFooterStyle}>
                <StepContainer>
                    <StepWrapper>
                    <motion.div
                            initial={{x: 56.4}}
                            animate={{x: 33.3}}
                            transition={{duration: 0.4}}
                        >
                            <StepProgress></StepProgress>
                        </motion.div>
                        <StepStyle></StepStyle>
                        <StepStyle></StepStyle>
                        <StepStyle></StepStyle>
                        <StepStyle></StepStyle>
                    </StepWrapper>
                </StepContainer>
                <div style={buttonContainerStyle}>
                    <Button onClick={props.nextStep} style={buttonStyle} >
                        <i className="bi bi-arrow-right-circle-fill text-dark" style={arrowsStyle}></i>
                    </Button>
                    <Button onClick={props.prevStep} style={buttonStyle}>
                        <i className="bi bi-arrow-left-circle text-dark" style={arrowsStyle}></i>
                    </Button>
                </div>
            </div>
        ) : (
            <div style={cardFooterStyle}>
                <StepContainer>
                    <StepWrapper>
                        <motion.div
                            initial={{x: 56.4}}
                            animate={{x: 33.3}}
                            transition={{duration: 0.4}}
                        >
                            <StepProgress></StepProgress>
                        </motion.div>
                        <StepStyle></StepStyle>
                        <StepStyle></StepStyle>
                        <StepStyle></StepStyle>
                        <StepStyle></StepStyle>
                    </StepWrapper>
                </StepContainer>
                <div style={buttonContainerStyle}>
                    <Button onClick={props.prevStep} style={buttonStyle}>
                        <i className="bi bi-arrow-left-circle text-dark" style={arrowsStyle}></i>
                    </Button>
                </div>
            </div>
        )
    )}
    </>
)




}

export default Indicator