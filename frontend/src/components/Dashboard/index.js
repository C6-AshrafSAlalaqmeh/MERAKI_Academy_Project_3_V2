import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Dashboard = ({ token }) => {
  const params = useParams();
  const [article, setArticle] = useState([]);


const getAllArticles =()=>{

    if(token){

        axios
          .get("http://localhost:5000/articles", {
            headers: {
                authorization : `Bearer ${token}`
            }
          })
          .then((result) => {
            console.log(result.data.articles);
            setArticle(result.data.articles);
          })
          .catch((err) => {
            console.log(err.message);
          });
        }
    
}


  useEffect(() => {
    getAllArticles()
  },[]);

  const deleteItem = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/articles/${id}`)
      .then((result) => {
        console.log(result);
        getAllArticles()
      
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {article.length && article.map((elem,idx) => {
        return (
          <div className="bodydash" key={idx} >
            <div className="contanrDash">
              <div className="titileDesc">
                <p className="titleDash">{elem.title}</p>
                <p className="descDash">{elem.description}</p>
              </div>
              <div className="buttonAndInputDash">
                <div className="inputIndash">
                  <input className="inputIndiv" placeholder="Comment..." />
                </div>
                <div className="allbutton">
                  <button className="add"> Adding Comment</button>
                  <button className="update">update</button>
                  <button className="delete" onClick={() =>deleteItem(elem._id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Dashboard;
