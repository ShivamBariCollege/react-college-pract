// function Item({name,isPacked}){
//     if(isPacked){
//         return <li>{name} + 👍</li>
//     }
//     else{
//         return  <li>{name} </li>
//     }
// }


function Item({name="Bags",isPacked=false}){
// ternery operator 
    return (
        <li>{name} {isPacked? "👍":  "❤️"}</li>
    )
    // if(isPacked){
    //     return <li>{name} + 👍</li>
    // }
    // else{
    //     return  <li>{name} </li>
    // }
}
export default Item


