/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component} from "react";
import { match, RouteComponentProps } from "react-router-dom";
import {books} from "./addbook";
import {
    Route,
    Link,
    HashRouter
  } from "react-router-dom";
import { useHistory } from "react-router-dom";
import BookList from "./booklist";
function Details(props: any) {
  let history =useHistory();
    function handleClick(index: any) {
      books.splice(index, 1);
      localStorage.setItem("books", JSON.stringify(books));
      history.push("/books");
    }
  
    const id = props.match.params.id;
    return (
      <div>
        {/* eslint-disable-next-line */}
        {books.map((book: any, index: any) => {
          if (book.id === id) {
            return (
              <div className="card">
                <img id="imgDetails" src={book.cover} alt={book.title} />
                <div className="book-info">
                <p>
                  <strong>Author:{book.author}</strong>
                </p>
                <p>
                  <strong>Rating:{book.rating}</strong>
                </p>
                <p>
                  <strong>Price :₹{book.price}</strong>
                </p>
                </div>
                <h1>{book.title}</h1>
                <br />
                <p>
                  <strong>{book.description}</strong>
                </p>
                {/* <HashRouter>
                  <Link
                    to="/books"
                    id="del-button"
                    onClick={() => handleClick(index)}
                  >
                    DELETE
                  </Link>
                  <Route path="/books" component={BookList} />
                </HashRouter> */}
                <button type="button" id="del-button" onClick={()=>handleClick(index)}>DELETE</button>
              </div>
            );
          }
        })}
      </div>
    );
  }
  
  export default Details;
  
// class Details extends Component<RouteComponentProps<any>>{
//     constructor(props:any){
//         super(props);
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick(index:any){
//         books.splice(index,1);
//         localStorage.setItem("books",JSON.stringify(books));
//     }
//     render(){
//         const id=this.props.match.params.id;
//         return(
//             <div>
//                {books.map((book:any,index:any) =>{
//                    if(book.id===id){
//                        return(
//                         <div className="card">
//                         <img id="imgDetails" src={book.cover} alt={book.title}/>
//                         <p><strong>Author:{book.author}</strong></p> 
//                         <p><strong>Rating:{book.rating}</strong></p>
//                         <p><strong>Price :₹{book.price}</strong></p>
//                         <h1>{book.title}</h1>
//                         <br/>
//                         <p><strong>{book.description}</strong></p>
//                         <HashRouter>
//                             <Link to="/books" id="del-button" onClick={()=>this.handleClick(index)}>
//                                 DELETE
//                             </Link>
//                             <Route path="/books" component={BookList}/>
//                         </HashRouter>                        
//                         </div>
//                        );
//                    }
//                })}
//             </div>
//         );
//     }
// }
// export default Details;