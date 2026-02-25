import Item from "./Item"
// function Package(){
//     return(
//         <div>
//             <h1>Package list </h1>
//             <Item name={"phone"} isPacked={true} />
//             <Item name={"laptop"} isPacked={false} />
//            <Item name={"bag"} isPacked={true} />
//            <Item name={"Keyboard"} isPacked={false} />
//         </div>
//     )
// }

function Package(...props){ // using props forwarding 
    return(
        <div>
           <Item{...props}/>
        </div>
    )
}
export default Package