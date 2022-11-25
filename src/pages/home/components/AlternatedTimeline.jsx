import React from "react";

const AlternatedTimeline = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <div
            style={{
              backgroundColor: "blue",
              width: "30vw",
              height: "30vh",
              marginTop: "20px",
            }}
          >
            <img
              src="https://images.pexels.com/photos/1417255/pexels-photo-1417255.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              style={{ width: "30vw", height: "30vh" }}
            />
          </div>
          <div
            style={{
              width: "30vw",
              height: "30vh",
              marginTop: "20px",
              padding: 20,
            }}
          >
            <div style={{ fontSize: 22 }}>Relationship</div>
            <div style={{ fontSize: 12 }}>Summer 2019</div>
            <div style={{ fontSize: 12, marginTop: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </div>
          </div>
          <div
            style={{
              backgroundColor: "blue",
              width: "30vw",
              height: "30vh",
              marginTop: "20px",
            }}
          >
            <img
              src="https://images.pexels.com/photos/912473/pexels-photo-912473.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              style={{ width: "30vw", height: "30vh" }}
            />
          </div>
          <div
            style={{
              width: "30vw",
              height: "30vh",
              marginTop: "20px",
              padding: 20,
            }}
          >
            <div style={{ fontSize: 22 }}>Counting days</div>
            <div style={{ fontSize: 12 }}>Right now</div>
            <div style={{ fontSize: 12, marginTop: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#f5f5f5",
              width: "30vw",
              height: "30vh",
              marginTop: "20px",
            }}
          >
            <img
              src="https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              style={{ width: "30vw", height: "30vh" }}
            />
          </div>
        </div>

        {/* middle */}
        <div
          style={{
            backgroundColor: "grey",
            marginLeft: 20,
            marginRight: 20,
            width: 0.1,
            marginTop: "20px",
          }}
        ></div>
        {/* middle end */}

        <div>
          <div
            style={{
              width: "30vw",
              height: "30vh",
              marginTop: "20px",
              padding: 20,
            }}
          >
            <div style={{ fontSize: 22 }}>How we met</div>
            <div style={{ fontSize: 12 }}>29. 03. 2019.</div>
            <div style={{ fontSize: 12, marginTop: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </div>
          </div>

          <div
            style={{
              backgroundColor: "blue",
              width: "30vw",
              height: "30vh",
              marginTop: "20px",
            }}
          >
            <img
              src="https://images.pexels.com/photos/38870/pexels-photo-38870.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              style={{ width: "30vw", height: "30vh" }}
            />
          </div>
          <div
            style={{
              width: "30vw",
              height: "30vh",
              marginTop: "20px",
              padding: 20,
            }}
          >
            <div style={{ fontSize: 22 }}>Proposal</div>
            <div style={{ fontSize: 12 }}>February 2020</div>
            <div style={{ fontSize: 12, marginTop: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </div>
          </div>
          <div
            style={{
              backgroundColor: "blue",
              width: "30vw",
              height: "30vh",
              marginTop: "20px",
            }}
          >
            <img
              src="https://images.pexels.com/photos/634848/pexels-photo-634848.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              style={{ width: "30vw", height: "30vh" }}
            />
          </div>
          <div
            style={{
              width: "30vw",
              height: "30vh",
              marginTop: "20px",
              padding: 20,
            }}
          >
            <div style={{ fontSize: 22 }}>Wedding day</div>
            <div style={{ fontSize: 12 }}>20. 09. 2020.</div>
            <div style={{ fontSize: 12, marginTop: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlternatedTimeline;
