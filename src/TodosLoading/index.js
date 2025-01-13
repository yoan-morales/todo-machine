import React from "react";
import "./TodosLoading.css";

function TodosLoading () {

    return (
      <div class="loader">
        <div class="wrapper">
            <div class="circle"></div>
            <div class="line-1"></div>
            <div class="line-2"></div>
        </div>
      </div>
    );
  }

 export { TodosLoading };