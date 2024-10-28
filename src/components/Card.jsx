import { Button, Card, CardBody } from "react-bootstrap"
import styled from 'styled-components'

const AppCard = (props) => {
    const currentCardData = props.tutorialData[props.step]
    const backgroundColor = currentCardData.bgColor

    const left = `${props.step}` * 22

    const StepContainer = styled.div`
        display: flex;
        position: relative;
        
        :after {
            content: '';
            position: absolute;
            background: #4a154b;
            height: 20%;
            width: 42%;
            top: 40%;
            border-radius: 30%;
            transition: 1.4s ease;
            left: ${left}px;
        }
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

    const cardImgStyle = {
        backgroundColor: backgroundColor,
        paddingTop: '110px',
        paddingBottom: '110px',
        paddingLeft: '10px',
        paddingRight: '10px',
        minHeight: '420px',
        maxHeight: '420px',
    }
    const cardStyle = {
        marginTop: '30px',
        marginBottom: '30px',
        width: '25rem',
        borderRadius: '50px',
        overflow: 'hidden',
        minHeight: '600px',
        maxHeight: '800px'
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
    const cardFooterStyle = {
        display: 'flex',
        justifyContent: 'space-between',
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
    
    return(
        <Card style={cardStyle}>
            {Object.entries(currentCardData).map(([key, value]) => {
                if (key === "image") {
                    return <Card.Img key={key} variant="top" src={value} style={cardImgStyle}/>
                } else { null }})}
            <CardBody>
            {Object.entries(currentCardData).map(([key, value]) => {
                if (key === "title") {
                    return <Card.Title key={key} style={cardTitleStyle}><b>{value}</b></Card.Title>
                } else if (key === "description") {
                    return <Card.Text key={key} style={cardTextStyle}>{value}</Card.Text>
                } else { null }})}
            {props.step === 0 ? (
                <div style={cardFooterStyle}>
                    <StepContainer>
                        <StepWrapper>
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
             ) }
            
            </CardBody>
        </Card>
    )
}


export default AppCard