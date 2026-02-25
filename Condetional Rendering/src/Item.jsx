// function Item({name,isPacked}){
//     if(isPacked){
//         return <li>{name} + 👍</li>
//     }
//     else{
//         return  <li>{name} </li>
//     }
// }


function Item({name="Bags",isPacked=true}){
    if(isPacked){
        return <li>{name} + 👍</li>
    }
    else{
        return  <li>{name} </li>
    }
}
export default Item

// ternery operstor 
//  <li>{name} {isPacked? "👍":  "❤️"}</li>