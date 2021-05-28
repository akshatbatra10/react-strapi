import React, { useState, useEffect } from "react";
import axios from "axios";

const DiaryComponent = ({ match, history }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:1337/diaries/${match.params.id}`
      );
      setPost(response.data);
    }
    fetchData();
  }, [match.params.id]);

  const redirectTO = () => {
    history.push("/diaries");
  };

  const hanldeDelete = async () => {
    await axios
      .delete(`http://localhost:1337/diaries/${match.params.id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    redirectTO();
  };

  const { title, description, id } = post;
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{description}</p>
        </div>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => history.push(`/editinput/${id}`)}
      >
        Edit
      </button>
      <button className="btn btn-danger" onClick={hanldeDelete}>
        Delete
      </button>
    </div>
  );
};

export default DiaryComponent;
