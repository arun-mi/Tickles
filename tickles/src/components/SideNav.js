import React from "react";

const SideNav = (props) => {
  const styles = {
    colorCircle: {
      borderRadius: "50%",
      background: "#FFFFFF",
      width: 25,
      height: 25,
    },
    bigButton: {
      padding: 10,
      borderBottom: "5px solid  #39495E",
      paddingTop: 20,
      width: "100%",
      //background: "#39495E",
      transition: "background 500ms",
    },
  };
  function handleTitleClick(titleRef) {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#58687E",
        alignItems: "center",
      }}
    >
      <div
        style={{
          ...styles.bigButton,
          background: props.showMotion ? "#39495E" : "none",
        }}
        onClick={() => handleTitleClick(props.motionRef)}
        className="button"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#FFFFFF",
          }}
        >
          <div
            style={{
              ...styles.colorCircle,
              background: "#3b82f6",
            }}
          ></div>
          <div>Motion</div>
        </div>
      </div>
      <div
        style={{
          ...styles.bigButton,
          background:
            props.showEvents && !props.showMotion ? "#39495E" : "none",
        }}
        onClick={() => handleTitleClick(props.eventsRef)}
        className="button"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#FFFFFF",
          }}
        >
          <div style={{ ...styles.colorCircle, background: "#fbbf24" }}></div>
          <div>Events</div>
        </div>
      </div>
      <div
        style={{
          ...styles.bigButton,
          background: props.showLooks && !props.showEvents ? "#39495E" : "none",
        }}
        onClick={() => handleTitleClick(props.looksRef)}
        className="button"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#FFFFFF",
          }}
        >
          <div style={{ ...styles.colorCircle, background: "#8b5cf6" }}></div>
          <div>Looks</div>
        </div>
      </div>
      <div
        style={{
          ...styles.bigButton,
          background:
            props.showControls && !props.showLooks ? "#39495E" : "none",
        }}
        onClick={() => handleTitleClick(props.controlsRef)}
        className="button"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#FFFFFF",
          }}
        >
          <div style={{ ...styles.colorCircle, background: "#fbbf24" }}></div>
          <div>Controls</div>
        </div>
      </div>
    </div>
  );
};
export default SideNav;
