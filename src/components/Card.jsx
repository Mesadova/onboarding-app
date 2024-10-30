import { Card, CardBody } from "react-bootstrap"
import Indicator from "./Indicator"
import RenderButtons from "./RenderButtons"
import styled from 'styled-components'

const CardStyled = styled(Card)`
        position: absolute;
        width: 25rem;
        border-radius: 50px;
        overflow: hidden;
        min-height: 600px;
        max-height: 800px;
        transition: 0.8s ease-in-out;

        &.prevCard {
          left: -100%;
          opacity: 0;
          transform: translateX(-200%)
          z-index: -1;
        }

        &.activeCard {
          left: 50%;
          transform: translateX(-50%);
        }

        &.nextCard {
          left: 100%;
          transform: translateX(100%);
          opacity: 0;
          z-index: -1;
        }
    `;

const AppCard = (props) => {

    const cardImgStyle = {
        backgroundColor: props.bgColor,
        paddingTop: '110px',
        paddingBottom: '110px',
        paddingLeft: '10px',
        paddingRight: '10px',
        minHeight: '420px',
        maxHeight: '420px',
        overflow: 'hidden',
    }

    const cardTextStyle = {
        fontFamily: 'Poppins',
        fontSize: '14px',
        paddingLeft: '10px',
        paddingRight: '20px',
        paddingBottom: '25px',
        justifyContent: 'end',
        textAlign: 'start',
        color: 'DarkSlateGray',
        whiteSpace: 'pre-wrap'
    }

    const cardTitleStyle = {
        fontFamily: 'Poppins',
        fontSize: '18px',
        paddingTop: '15px',
        paddingBottom: '10px',
        paddingLeft: '10px'
    }

    const cardFooterStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    }

    return (
            <CardStyled className={props.position} >
                <Card.Img variant="top" src={props.image} style={cardImgStyle} />
                <CardBody>
                    <Card.Title style={cardTitleStyle}><b>{props.title}</b></Card.Title>
                    <Card.Text style={cardTextStyle}>{props.description}</Card.Text>
                    <div style={cardFooterStyle}>
                        <Indicator
                            tutorialData={props.tutorialData}
                            step={props.step} setStep={props.setStep} 
                         />
                        <RenderButtons
                            tutorialData={props.tutorialData} index={props.index}
                            nextStep={props.nextStep} prevStep={props.prevStep}
                        />
                    </div>
                </CardBody>
            </CardStyled>
    )
}

export default AppCard;