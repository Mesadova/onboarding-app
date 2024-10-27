const Card = (props) => {
    const currentCardData = props.tutorialData[props.step]
    return(
      <div>
        {Object.entries(currentCardData).map(([key, value]) => {
          if (key === "title") {
            return <h3 key={key}>{value}</h3>
          } else if (key === "description") {
            return <p key={key}>{value}</p>
          }
          return null
        })}
      </div>
    )
}


export default Card