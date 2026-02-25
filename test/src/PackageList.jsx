import Item from "./Item"
function Package(){
    return(
        <div>
            <h1>Package list </h1>
            <Item name={"phone"} isPacked={true} />
            <Item name={"laptop"} isPacked={false} />
           <Item name={"bag"} isPacked={true} />
           <Item name={"Keyboard"} isPacked={false} />
        </div>
    )
}
export default Package