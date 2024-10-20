import Third from "./child"


var fake=[{
    "id": 19,
    "title": "Opna Women's Short Sleeve Moisture",
    "price": 7.95,
    "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "id": 20,
    "title": "DANVOUY Womens T Shirt Casual Cotton Short",
    "price": 12.99,
    "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "rating": {
      "rate": 3.6,
      "count": 145
    }
  }]


  function Parent(){
    return(
        <>
        <h1>FAKE STORE API</h1>
       
        <Third>

            <Second a={fake}></Second>
        </Third>
        
        

        </>
    )
  }

  export default Parent;

  function Second(props){


    console.log(props.a)
    
    var b=props.a
    var c=b.map((val,ind)=>{
        return(
            <>
            <tr x={ind}>
                <td>{val["id"]}</td>
                <td>{val["title"]}</td>
        
                <td>{val["description"]}</td>
                <td><img src={val["image"]} alt={"img"} width={100} /></td>
                <td>{val["rating"]["count"]}</td>
                <td>{val["rating"]["rate"]}</td>
            </tr>
            </>
        )
    })
return(
    <>
    
    
    <h1>PRODUCTS of fake</h1>
    <ul>{c}</ul>
    
    </>
)
}
