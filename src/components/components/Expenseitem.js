import React,{useState} from 'react'
import '../UI/ExpenseItem.css'
import {AboutItem,CardItem} from './AboutItem'
const NavItem = ()=>
{
    const title  = "LOGO"
    const menu1  = "Home"
    const menu2  = "About"
    const menu3  = "Contact"
    //const expdate  = new Date().toISOString
    return (
        <div>
            <div className="w3-top">
            <div className="w3-bar w3-white w3-padding w3-card" >
                <a href="#home" className="w3-bar-item w3-button">{title}</a>
                <div className="w3-right w3-hide-small">
                <a href="#about" className="w3-bar-item w3-button">{menu1}</a>
                <a href="#menu" className="w3-bar-item w3-button">{menu2}</a>
                <a href="#contact" className="w3-bar-item w3-button">{menu3}</a>
                <a href="#contact" className="w3-bar-item w3-button">12-12-2021</a>
                </div>
            </div>
            </div>
        </div>
        )
}

const HeaderItem = (data)=>
{
    const [title, setTitle] = useState(data.heading1)
    const chaneHandler = ()=>{
        setTitle('unni krishnan'+Math.random())
        console.log("hi")
    }
    return (
        <div>
            <header className="w3-display-container w3-content w3-wide"   id="home">
            <img className="w3-image" src="https://www.w3schools.com/w3images/hamburger.jpg"  alt="test" />
            <div className="w3-display-bottomleft w3-padding-large w3-opacity">
                <h1 className="w3-xxlarge">{title}</h1>
            </div>
            </header>
            <button onClick={chaneHandler}>Update slider test</button>
            <AboutItem heading1={data.heading1}  heading2={data.heading2}  description1={data.description1}  description2={data.description2}/>
            <CardItem/>
            <CardItem/>
        </div>
        )
}

const FormsItem = ()=>{
    
    const [enterdName,setEnterdName] =useState('')
    const [enterdLName,setEnterdLName] =useState('')
    /*const [userInput,setuserInput] = useState({
        enterdName: '',
        enterdLName: ''
    })*/
    const fnameChangeHandler = (event)=>{
        setEnterdName(event.target.value) 
        /*setuserInput({
            ...userInput,
            enterdName: event.target.value
        }) */
        /*setuserInput((prevState)=>{
            return{ 
                ...prevState,
                enterdName: event.target.value
            }
         })*/
    }
    const lnameChangeHandler = (event)=>{
        setEnterdLName(event.target.value)
        /*setuserInput({
            ...userInput,
            enterdLName: event.target.value
        }) */
        /*setuserInput((prevState)=>{
           return{ 
               ...prevState,
               enterdLName: event.target.value
           }
        })*/
    }
    const submitHandler = (event)=>{
        event.preventDefault()
        const userData = {
            fName:enterdName,
            lName:enterdLName
        }
        console.log(userData)
        setEnterdName('')
        setEnterdLName('')
    }
return(
    <div className=""><br/><br/><br/><br/><br/>
    <form onSubmit={submitHandler} >
    <label >First name: 
        <span>{enterdName}</span>
        </label><br/>
    <input type="text" id="fname" name="fname" value={enterdName} onChange={fnameChangeHandler} /><br/>
    <label >Last name: 
        <span>{enterdLName}</span>
        </label><br/>
    <input type="text" id="lname" name="lname" value={enterdLName} onChange={lnameChangeHandler}/><br/><br/>
    <input type="submit" value="Submit"/>
    </form> 
    </div>
)
}

 
export  {
    NavItem,
    HeaderItem,
    FormsItem
}