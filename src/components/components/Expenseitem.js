import '../UI/ExpenseItem.css'
import {AboutItem,CardItem} from './AboutItem'
const NavItem = ()=>
{
    const title  = "LOGO"
    const menu1  = "Home"
    const menu2  = "About"
    const menu3  = "Contact"
    const expdate  = new Date()
    return (
        <div>
            <div className="w3-top">
            <div className="w3-bar w3-white w3-padding w3-card" >
                <a href="#home" className="w3-bar-item w3-button">{title}</a>
                <div className="w3-right w3-hide-small">
                <a href="#about" className="w3-bar-item w3-button">{menu1}</a>
                <a href="#menu" className="w3-bar-item w3-button">{menu2}</a>
                <a href="#contact" className="w3-bar-item w3-button">{menu3}</a>
                <a href="#contact" className="w3-bar-item w3-button">{expdate.toDateString}</a>
                </div>
            </div>
            </div>
        </div>
        )
}

const HeaderItem = (data)=>
{
    return (
        <div>
            <header className="w3-display-container w3-content w3-wide"   id="home">
            <img className="w3-image" src="https://www.w3schools.com/w3images/hamburger.jpg"   />
            <div className="w3-display-bottomleft w3-padding-large w3-opacity">
                <h1 className="w3-xxlarge">Le Catering</h1>
            </div>
            </header>
            <AboutItem heading1={data.heading1}  heading2={data.heading2}  description1={data.description1}  description2={data.description2}/>
            <CardItem/>
        </div>
        )
}

 
export  {
    NavItem,
    HeaderItem
}