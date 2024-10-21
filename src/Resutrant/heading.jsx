
import Items from "./items";

// var a="https://media.istockphoto.com/id/2149219718/photo/3d-render-of-cafe-restaurant-interior.webp?a=1&b=1&s=612x612&w=0&k=20&c=7s7SMQ4OqEX8QaXMqzd1Fus-hjcTa-dqmUggLP5GSZA="
function Heading(){
    return(
        
        <>
        <h1>KARTHIK RESTURANT</h1>
      
        <img src="https://media.istockphoto.com/id/2149219718/photo/3d-render-of-cafe-restaurant-interior.webp?a=1&b=1&s=612x612&w=0&k=20&c=7s7SMQ4OqEX8QaXMqzd1Fus-hjcTa-dqmUggLP5GSZA=" alt={"img"}  width={1000}/>
        
        <Items/>
        
        </>
    )
}
export default Heading;