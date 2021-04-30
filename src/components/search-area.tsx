/* eslint-disable no-restricted-globals */
/* eslint-disable array-callback-return */
import  { FunctionComponent, useState } from "react";
  //VIVEKS HELP!!!!!
 export interface SearchProps{
     onSearch:Function,
 } 
const SearchBar:FunctionComponent<SearchProps>=({onSearch})=>{
    const [searchText,setsearchText]=useState("");
    function handleSearch(e:any){
        setsearchText(e.target.value);
    }
    return(
        <div>
            <input type="text" name="search" required placeholder="Search..."   onChange={handleSearch}/>
            <button id="search-button" type="submit" onClick={()=>onSearch(searchText)}>Search</button>
    
        </div>
    );
}
export default SearchBar;
// class SearchBar extends Component<SearchProps,any>{
//     constructor(props:any){
//         super(props);
//         this.state={
//             searchText:""
//         }
//        this.handleSearch = this.handleSearch.bind(this)

//     }
//     handleSearch(event:any){
//         this.setState({
//             searchText : event.target.value,
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <input type="text" name="search" required placeholder="Search..."  value={this.state.name} onChange={this.handleSearch}/>
//                 <button id="search-button" type="submit" onClick={()=>this.props.onSearch(this.state.searchText)}>Search</button>
        
//             </div>
//         );
//     }
// }