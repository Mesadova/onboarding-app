import { Button, Card, CardBody } from "react-bootstrap"
import styled from 'styled-components'
import { motion } from "framer-motion"

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

const StepStyle = styled.button`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #A9A9A9;
    transition: 1.4s ease;
`

const Indicator = (props) => {

    return (
        <>
        {props.forward ? (
            props.step === 0 ? (
                    <StepContainer>
                        <StepWrapper onClick={props.nextStep} >
                            <motion.div
                                initial={{x: 10}}
                                animate={{x: 11}}
                                transition={{duration: 0}}
                            >
                                <StepProgress></StepProgress>
                            </motion.div>
                            <StepStyle></StepStyle>
                            <StepStyle></StepStyle>
                            <StepStyle onClick={props.nextStep}></StepStyle>
                            <StepStyle onClick={props.nextStep}></StepStyle>
                        </StepWrapper>
                    </StepContainer>
            ) : props.step === 1 ? (
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
            ) : (
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
            )
        ) : (
            props.step === 0 ? (
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
            ) : props.step === 1 ? (
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
            ) : (
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
            )
        )}
        </>
    )
}

export default Indicator