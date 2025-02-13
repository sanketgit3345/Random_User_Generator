//import React from "react";

async function Api(){
    return (await fetch('https://randomuser.me/api/')).json();
}
export default Api;