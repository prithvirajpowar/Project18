import React, { Component } from "react";
import axios from "axios";

export default class About extends Component {
  constructor() {
    super();
    console.log("Constructor called");
    this.state = {
      apiData: [],
      catName:"",
    };
  }
  componentDidMount() {
    console.log("Did Mount cycle called?");
    axios.get("https://fakestoreapi.com/products").then((response) => {
      // console.log(response);
      console.log(response.data);
      this.setState({
        apiData: response.data,
      });
    });
  }
  componentDidUpdate() {
    console.log("Did Update cycle called?");
  }

  componentWillUnmount() {
    console.log("Did Will  Unmount cycle called?");
  }

  myFunction(){
    alert();
  }
  render() {
    console.log("Render called");
    var record = this.state.apiData;
    return (
      <div className="container">
        <h1>Life Cycle</h1>
        <input type="text"></input>
        <button onClick={()=>{
            this.myFunction()
        }}>Enter</button>

        <div className="row">
        {record &&
          record.map((values) => (
            <div className="col-3">
                <img src={values.image} className="img-fluid"/>
              <h2>{values.price}</h2>
              <p>{values.title}</p>
            </div>
          ))}
      </div>
      </div>
    );
  }
}
