import '../UI/CardItem.css'
const CardWrapper=(data)=>
{
    const classN = "card "+data.className
    return(
        <div className={classN}>{data.children}</div>
    )
}




export default CardWrapper