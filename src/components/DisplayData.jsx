import React from "react";

const DisplayData = ({ data }) => {
  console.log(data);
  return (
    <div className="container1">
      {data?.length > 0 &&
        data.map((item) => {
          return (
            <div className="card" key={item.id}>
              <img
                src={`https://via.placeholder.com/100x80`}
                className="card-img-top"
                alt="nothing"
              />
              <div className="card-body">
                <h5 className="card-title">{item.type}</h5>
                <h5 className="card-title">{item.status}</h5>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default DisplayData;
