import { React, Suspense } from "react";
import Header from "../../components/layout/Header";
import RsvpFooter from "../../components/layout/RsvpFooter";
import AlternatedTimeline from "./components/AlternatedTimeline";
import Loader from "../../components/loader/loader";
import Carousel from "./components/Carousel";

const HomeScreen = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div>
        <Header />
        <div>
          <Carousel />
        </div>
        <div className="homeContainer">
          <div>
            <div style={header}>BEGINNING OF TRUE LOVE</div>
            <div style={subHeader}>A short timeline of our story</div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={body}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusm od tempor incidi dunt ut labore et dolore magna aliqua ut
                enim minim veniam, quis nostrud.
              </div>
            </div>

            <div style={{ marginTop: 40 }}>
              <AlternatedTimeline />
            </div>
          </div>
        </div>
        <div style={{ marginTop: 15 }}>
          <RsvpFooter />
        </div>
      </div>
    </Suspense>
  );
};

const header = { fontSize: 10, textAlign: "center", marginTop: 5 };
const subHeader = {
  fontSize: 25,
  display: "flex",
  justifyContent: "center",
  marginTop: 5,
};
const body = {
  fontSize: 15,
  maxWidth: "70ch",
  textAlign: "center",
  marginTop: 5,
};

export default HomeScreen;
