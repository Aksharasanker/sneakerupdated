import React from "react";
import Pboys from "../Subpages/Pboys";
import Details from "../Subpages/Details";

const Boys = () => {
  return (
    <>
      <div className="boys_collection " style={{marginTop:'70px'}}>
        <div className="b_heading">
          <h2 style={{ textAlign: "center" }}>Boys Collection</h2>
          <div className="b_box"></div>
        </div>
        <div className="b_contents mt-5">
          <Pboys />
            {/*--------------------------modified---------------------* */}
<Details/>
          
              {/*--------------------------modified---------------------* */}
        </div>
      </div>
    </>
  );
};

export default Boys;
