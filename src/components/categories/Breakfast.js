import React, { Fragment } from "react";

const Breakfast = (props) => {
  let userItemTemplate = (
    <Fragment>
      <p>Title:</p>
      <p>Carbohydrates:</p>
      <p>Proteins:</p>
      <p>Fats:</p>
    </Fragment>
  );
  let macroData = props.data;

  console.log(macroData[0][0]);

  const item = macroData.map((macroData, index) => {
    let holder = "";
    holder = <Fragment>
      <p>Title:{macroData[0]}</p>
      <p>Carbohydrates:{macroData[1]}</p>
      <p>Proteins:{macroData[2]}</p>
      <p>Fats:{macroData[3]}</p>
    </Fragment>
    return holder;

  });

  userItemTemplate = item;

  

  // <p>Title:{props.macroData[0].title}</p>
  // <p>Carbohydrates:{props.macroData[0].Carbohydrates}</p>
  // <p>Proteins:{props.macroData[0].protein}</p>
  // <p>Fats:{props.macroData[0].fats}</p>

  return userItemTemplate;
};

export default Breakfast;
