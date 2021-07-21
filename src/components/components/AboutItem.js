import CardWrapper from './CardItem'

const AboutItem = (data)=>
{
    return(
        <div className="w3-row w3-padding-64" id="about">
        <div className="w3-col m6 w3-padding-large w3-hide-small">
         <img src="https://www.w3schools.com/w3images/tablesetting2.jpg" alt="test" className="w3-round w3-image w3-opacity-min" />
        </div>
        <div className="w3-col m6 w3-padding-large">
          <h1 className="w3-center">{data.heading1}</h1><br/>
          <h5 className="w3-center">{data.heading2}</h5>
          <p className="w3-large">{data.description1} <span className="w3-tag w3-light-grey">seasonal</span> ingredients.</p>
          <p className="w3-large w3-text-grey w3-hide-medium">{data.description2}</p>
        </div>
      </div>
    )
}

const CardItem = (data)=>
{
    const changeHandler = (k)=>{
        console.log("Clicked......")
        // console.log(k)
    }
    return(
        <div>
        <CardWrapper className="float-left">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="test" />
        <div className="container">
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
        </div>
        <button onClick={changeHandler}>Submit</button>
        </CardWrapper>
        </div>
    )
}

export  {
    AboutItem,
    CardItem
}