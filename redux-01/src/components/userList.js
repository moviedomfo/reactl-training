import React, { useState, useEffect, Fragment } from "react";

const list = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
];
const divStyle  = {
    width: '18rem',
};

const UserList = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col col-md-6">
          <ul className="list-group">
            {list.map((item, index) => (
              <li key={index} class="list-group-item">
                {index} -- {item.first_name}{" "}
              </li>
            ))}
          </ul>
        </div>
        <div  className="col col-md-6">
            {list.map((item, index) => (
                <div key={item.id} className="card" style={divStyle }>
                <img src={item.avatar} className="card-img-top" alt="{item.last_name}"></img>
                <div className="card-body">
                    <h5 className="card-title">{item.last_name} {item.first_name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>
            </div>
            ))}
        </div>
      </div>

      <div className="row">
    
      </div>
    </Fragment>
  );
};

export default UserList;
