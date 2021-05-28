import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./diaries.styles.css";

const DiariesComponent = () => {
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:1337/diaries");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container mb-3">
      <div className="card-container">
        {posts.map(({ id, title, description }) => (
          <div className="card" key={id}>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p className="card-text">{description}</p>
              <Link to={`diaries/${id}`} className="btn btn-primary">
                Read More...
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link to="/newinput" className="btn btn-info">
        Add a new memory
      </Link>
    </div>
  );
};

export default DiariesComponent;
