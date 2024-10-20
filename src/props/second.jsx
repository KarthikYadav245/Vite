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
export default Second;