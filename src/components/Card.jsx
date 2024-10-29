import { Card, CardBody } from "react-bootstrap"
import Indicator from "./Indicator"
import RenderButtons from "./RenderButtons"

const AppCard = (props) => {
    const currentCardData = props.tutorialData[props.step]
    const backgroundColor = currentCardData.bgColor

    const cardImgStyle = {
        backgroundColor: backgroundColor,
        paddingTop: '110px',
        paddingBottom: '110px',
        paddingLeft: '10px',
        paddingRight: '10px',
        minHeight: '420px',
        maxHeight: '420px',
        overflow: 'hidden',
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
    
    return(
        <Card style={cardStyle}>
            {Object.entries(currentCardData).map(([key, value]) => {
                if (key === "image") {
                    return (
                        <Card.Img key={key} variant="top" src={value} style={cardImgStyle}/>
                    )
                } else { null }})}
            <CardBody>
                {Object.entries(currentCardData).map(([key, value]) => {
                    if (key === "title") {
                        return <Card.Title key={key} style={cardTitleStyle}><b>{value}</b></Card.Title>
                    } else if (key === "description") {
                        return <Card.Text key={key} style={cardTextStyle}>{value}</Card.Text>
                    } else { null }})}
                <div style={cardFooterStyle}>
                    <Indicator 
                        tutorialData={props.tutorialData} 
                        step={props.step} forward={props.forward} 
                        nextStep={props.nextStep} prevStep={props.prevStep}  />
                    <RenderButtons 
                        step={props.step} forward={props.forward} 
                        nextStep={props.nextStep} prevStep={props.prevStep} 
                        />
                </div>
            </CardBody>
        </Card>
    )
}


export default AppCard