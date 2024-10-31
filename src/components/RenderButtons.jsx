import { Button } from "react-bootstrap";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
    border-radius: 100px;
    border-color: white;
    color: white;
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    background-color: white;
    justify-content: center;

    &:hover {
        color: white;
        background-color: white;
        border-color: white;
    }
`

const arrowsStyle = {
    fontSize: '55px',
    backgroundColor: 'white',
};

const ButtonContainerStyle = styled.div`
    display: flex;
    wrap: no-wrap;
    direction: rtl;
    border-color: white;
    background-color: white;
    gap: 10px;
`

const RenderButtons = ({ tutorialData, nextStep, prevStep, index }) => {

    const renderButtons = () => {
        if (index === 0) {
            return (
                <ButtonContainerStyle>
                    <ButtonStyled onClick={nextStep}>
                        <i className="bi bi-arrow-right-circle-fill text-dark" style={arrowsStyle}></i>
                    </ButtonStyled>
                </ButtonContainerStyle>
            )

        } else if (index < tutorialData.length - 1) {
            return (
                <ButtonContainerStyle>
                    <ButtonStyled onClick={nextStep}>
                        <i className="bi bi-arrow-right-circle-fill text-dark" style={arrowsStyle}></i>
                    </ButtonStyled>
                    <ButtonStyled onClick={prevStep}>
                        <i className="bi bi-arrow-left-circle text-dark" style={arrowsStyle}></i>
                    </ButtonStyled>
                </ButtonContainerStyle>
            )
        } else {
            return (
                <ButtonContainerStyle>
                    <ButtonStyled onClick={prevStep}>
                        <i className="bi bi-arrow-left-circle text-dark" style={arrowsStyle}></i>
                    </ButtonStyled>
                </ButtonContainerStyle>
            )
        }
    }

    return <>{renderButtons()}</>;
}

export default RenderButtons;