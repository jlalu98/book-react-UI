/* eslint-disable array-callback-return */
import React, { useState } from "react";
import Details from "./details"
import {books} from "./addbook";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import SearchBar from "../components/search-area"
import StarComponent from "../components/star-component"
function BookList(){
    const [searchArray,setsearchArray]=useState(books);
    const handleSearchSubmit=(searchText:any)=>{
    let searchList:any=[];
    books.map((book:any) =>{
            if(book.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1){
                searchList.push(book)
            }
            else if(book.author.toLowerCase().indexOf(searchText.toLowerCase()) !== -1){
                searchList.push(book)
            }
            else if(book.description.toLowerCase().indexOf(searchText.toLowerCase()) !== -1){
                searchList.push(book)
            }
        })
        setsearchArray(searchList);

        console.log(searchList);
        //return searchList;
       
    }
     return (
              <>
                 {/* VIVEKS HELP */}
                    <SearchBar onSearch={handleSearchSubmit}></SearchBar>
                <br/><br/>
                {searchArray.map(function(book:any,index:any){
                    return(
                        <div className="grid">
                        <HashRouter>
                            <NavLink to={"/details/"+book.id}>
        
                        <div className="book-card" id={book.id}>
                        <br/>
                        <img id="img" src={book.cover} alt={book.title}/>
                        <h3>{book.title}</h3>
                        <p>Rating:<StarComponent min={book.rating} max={5}></StarComponent></p>
                        <p className="price"><strong>₹{book.price}</strong></p>
                        </div>
                       
                        </NavLink>
                            <Route path={"/details/"+book.id} component={Details}/>
                        </HashRouter>
                        </div>
                    );
                })}
              </>
            );

}

// class BookList extends Component<{},any>{
//     constructor(props:any){
//         super(props);
//         this.state={
//             searchText:"",
//             searchArray:books
//         }
//       this.handleSearchSubmit = this.handleSearchSubmit.bind(this)

//     }
//     // handleSearchSubmit=(searchText:any)=>{
//     //     //console.log(this.state.searchText);
        
//     //     let searchList:any=[];
//     //     books.map((book:any) =>{
//     //         if(book.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1){
//     //             searchList.push(book)
//     //         }
//     //         else if(book.author.toLowerCase().indexOf(searchText.toLowerCase()) !== -1){
//     //             searchList.push(book)
//     //         }
//     //         else if(book.description.toLowerCase().indexOf(searchText.toLowerCase()) !== -1){
//     //             searchList.push(book)
//     //         }
//     //     })
//     //     this.setState({
//     //         searchArray:searchList
//     //     })

//     //     console.log(searchList);
//     //     //return searchList;
       
//     // }
//   render() {
//     return (
//       <>
//          {/* VIVEKS HELP */}
//             <SearchBar onSearch={this.handleSearchSubmit}></SearchBar>

//         {this.state.searchArray.map(function(book:any,index:any){
//             return(
//                 <HashRouter>
//                     <NavLink to={"/details/"+book.id}>
//                 <div className="book-card" id={book.id}>
//                 <br/>
//                 <img id="img" src={book.cover} alt={book.title}/>
//                 <h3>{book.title}</h3>
//                 <p>Rating:{book.rating}</p>
//                 <p className="price"><strong>₹{book.price}</strong></p>
//                 </div>
//                 </NavLink>
//                     <Route path={"/details/"+book.id} component={Details}/>
//                 </HashRouter>
//             );
//         })}
//       </>
//     );
// }
// }
 
export default BookList;