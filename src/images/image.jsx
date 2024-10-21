import image1 from "./image1.jpg"
import image2 from "./image2.jpeg"

import image3 from "./image3.jpeg"

import image4 from "./image4.jpeg"

import image5 from "./image5.jpeg"




var a=[image1,image2,image3,image4,image5]
var b=a.map((image,ind)=>{
    return(
        <img src={image} alt={"im"}  width={200}/>
    )
})

function Image(){
    return(
        
            
            <>
            <h1>Display Images</h1>
            {/* <img src={} alt={"imge"} /> */}
{b}
            </>
        
    )
}
export default Image