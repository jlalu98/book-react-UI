import react, { FunctionComponent } from "react";
interface StarProps{
    min:any,
    max:any
}
const StarComponent:FunctionComponent<StarProps>=({min,max})=>{
    let percentage=parseFloat(min)*parseFloat("5")/parseFloat(max)*15
    return(
        <div className="fa inner" id="star-block" style={{width:percentage+"px"}} >
        </div>
    );
}
export default StarComponent;