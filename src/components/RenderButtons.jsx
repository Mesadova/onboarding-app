import { Button } from "react-bootstrap"

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

const RenderButtons = (props) => {
    const renderButtons = () => {
        switch(props.step) {
            case 0:
                return (<div style={buttonContainerStyle}>
                            <Button onClick={props.nextStep} style={buttonStyle} >
                                <i className="bi bi-arrow-right-circle-fill text-dark" style={arrowsStyle}></i>
                            </Button>
                        </div>)
            case 1:
                return (<div style={buttonContainerStyle}>
                            <Button onClick={props.nextStep} style={buttonStyle} >
                                <i className="bi bi-arrow-right-circle-fill text-dark" style={arrowsStyle}></i>
                            </Button>
                            <Button onClick={props.prevStep} style={buttonStyle}>
                                <i className="bi bi-arrow-left-circle text-dark" style={arrowsStyle}></i>
                            </Button>
                        </div>)
            case 2:
                return (<div style={buttonContainerStyle}>
                            <Button onClick={props.prevStep} style={buttonStyle}>
                                <i className="bi bi-arrow-left-circle text-dark" style={arrowsStyle}></i>
                            </Button>
                        </div>)
            default:
                return null
        }
    }

    return (
        <div>
            {renderButtons()}
        </div>
    )
}

export default RenderButtons