import React, { useState } from "react";
import axios from "axios";

const FormInput = ({ history }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const redirectTO = () => {
    history.push("/diaries");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      description: description,
    };
    await axios
      .post("http://localhost:1337/diaries", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    redirectTO();
  };

  return (
    <form className="container mb-2" onSubmit={handleSubmit}>
      <h2>Add a new Entry</h2>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter title"
          value={title}
          onChange={onTitleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          How was your day?
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="20"
          value={description}
          onChange={onDescriptionChange}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-success">
        Make new memory
      </button>
    </form>
  );
};

export default FormInput;
