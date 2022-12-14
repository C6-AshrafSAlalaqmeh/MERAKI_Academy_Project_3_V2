import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import users from "../../../../backend/models/users";

const Dashboard = ({ token }) => {
  const params = useParams();
  const [article, setArticle] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [commit, setCommit] = useState("");
  const [userId, setUserId] = useState("");

  const getAllArticles = () => {
    if (token) {
      axios
        .get("http://localhost:5000/articles", {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((result) => {
          console.log(result.data.articles);
          setArticle(result.data.articles);
          setUserId(result.data.userId);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    getAllArticles();
  }, []);

  const deleteItem = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/articles/${id}`)
      .then((result) => {
        getAllArticles();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateItem = (id) => {
    setShowInput(true);
    if (showInput) {
      axios
        .put(`http://localhost:5000/articles/${id}`, {
          title: newTitle,
          description: newDescription,
        })
        .then((result) => {
          getAllArticles();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const addCommit = (id) => {
    
    axios
      .post(
        `http://localhost:5000/articles/${id}/comments/`,
        {
          comment: commit,
        },
        {
          headers: {
            authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      )
      .then((result) => {
        //function مقارنة الادي عشان يضيف الكومنت
        getAllArticles();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {article.length &&
        article.map((elem, idx) => {
          return (
            <div className="bodydash" key={idx}>
              <div className="contanrDash">
                <div className="titileDesc">
                  <p className="titleDash">{elem.title}</p>
                  <p className="descDash">{elem.description}</p>
                  <div className="comment">
                    {elem.comments.length &&
                      elem.comments.map((item) => {
                        return <p>{item.comment}</p>;
                      })}
                  </div>
                </div>
                {showInput && (
                  <div className="new">
                    
                    <input
                      placeholder="Title"
                      onChange={(e) => {
                        setNewTitle(e.target.value);
                      }}
                    />
                    <input
                      placeholder="description"
                      onChange={(e) => {
                        setNewDescription(e.target.value);
                      }}
                    />
                  </div>
                )}
                <div className="buttonAndInputDash">
                  <div className="inputIndash">
                    <input
                      className="inputIndiv"
                      onChange={(e) => {
                        setCommit(e.target.value);
                      }}
                      placeholder="Comment..."
                    />
                  </div>
                  <div className="allbutton">
                    <button className="add" onClick={() => addCommit(elem._id)}>
                      {" "}
                      Add Comment
                    </button>

                    {elem.author === userId && (
                      <>
                        <button
                          className="update"
                          onClick={() => updateItem(elem._id)}
                        >
                          update
                        </button>
                        <button
                          className="delete"
                          onClick={() => deleteItem(elem._id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
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
