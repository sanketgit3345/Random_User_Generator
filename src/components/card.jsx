import React from "react";

export function Card(props){
   return (
    <div className="card">
      <img src={props.pic} alt="" />
      <span><h4>Hi, My name is</h4></span>
      <span><h1>{props.Fname} {props.Lname}</h1></span>

      <span><h4>My Email is</h4></span>
      <span><h1>{props.email}</h1></span>
    </div>
   )
}