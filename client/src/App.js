import "./App.css";
import DiariesComponent from "./components/diaries/diaries.component";
import DiaryComponent from "./components/diary/diary.component";
import { Switch, Route } from "react-router-dom";
import FormInput from "./components/form/form.component";
import Navbar from "./components/navbar/navbar.component";
import React from "react";
import EditForm from "./components/editform/editform.component";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <h1>My Diary</h1>
      <Switch>
        <Route exact path="/diaries" component={DiariesComponent} />
        <Route
          exact
          path="/diaries/:id"
          render={(props) => <DiaryComponent {...props} />}
        />
        <Route exact path="/newinput" component={FormInput} />
        <Route exact path="/editinput/:id" component={EditForm} />
      </Switch>
    </div>
  );
};
export default App;
