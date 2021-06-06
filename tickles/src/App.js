import React from "react";
import Sidebar from "./components/Sidebar";
import SideNav from "./components/SideNav";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import Icon from "./components/Icon";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCat, selectFish } from "./actions/selectActions";
import useOnScreen from "./utils/useOnScreen";
import { resetEverything } from "./actions/actions";

export default function App() {
  const sprite = useSelector((state) => state.select.sprite);
  const dispatch = useDispatch();
  const looksRef = React.useRef();
  const motionRef = React.useRef();
  const eventsRef = React.useRef();
  const controlsRef = React.useRef();
  const showLooks = useOnScreen(looksRef);
  const showMotion = useOnScreen(motionRef);
  const showEvents = useOnScreen(eventsRef);
  const showControls = useOnScreen(controlsRef);

  return (
    <div
      className="bg-blue-100 font-sans"
      style={{ height: "100vh", background: "#58687E" }}
    >
      <div
        style={{
          textAlign: "center",
          font: "normal normal normal 40px/48px Roboto",
          color: "#FFFFFF",
          padding: 7,
          paddingTop: "-1.5rem",
        }}
      >
        Scratch
      </div>
      <div
        className="h-screen overflow-hidden flex flex-row  "
        style={{ height: "90vh" }}
      >
        <div
          className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2"
          style={{
            height: "90vh",
            background: "#39495E",
            border: "none",
            borderRadius: "2%",
          }}
        >
          <SideNav
            looksRef={looksRef}
            motionRef={motionRef}
            eventsRef={eventsRef}
            controlsRef={controlsRef}
            showControls={showControls}
            showEvents={showEvents}
            showLooks={showLooks}
            showMotion={showMotion}
          />{" "}
          <Sidebar
            looksRef={looksRef}
            motionRef={motionRef}
            eventsRef={eventsRef}
            controlsRef={controlsRef}
          />
          <MidArea />
        </div>
        <div
          className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2"
          style={{
            height: "90vh",
            background: "#39495E",
            border: "none",
            borderRadius: "2%",
          }}
        >
          <PreviewArea />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 80,
          right: 50,
        }}
      >
        <div style={{ display: "flex" }}>
          <button
            style={{
              padding: "15px 10px",
              background: "#58687E",
              borderRadius: "50%",
              marginRight: 10,
            }}
            className="iconButton"
            onClick={() => {
              dispatch(resetEverything());
              window.location.reload();
            }}
          >
            <Icon name="sync-alt" size={50} className="text-white mx-2" />
          </button>
          {sprite == 1 ? (
            <button
              style={{
                padding: "15px 10px",
                background: "#58687E",
                borderRadius: "50%",
              }}
              className="iconButton"
              onClick={() => {
                dispatch(selectFish());
              }}
            >
              <Icon name="fish" size={50} className="text-white mx-2" />
            </button>
          ) : (
            <button
              style={{
                padding: "15px 10px",
                background: "#58687E",
                borderRadius: "50%",
              }}
              className="iconButton"
              onClick={() => {
                dispatch(selectCat());
              }}
            >
              <Icon name="cat" size={50} className="text-white mx-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
