const InstaHeadingProgress = () => {
    return (
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#5a5b5f",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "25%",
            height: "100%",
            backgroundColor: "#ff732e",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></div>
      </div>
    );
}

export default InstaHeadingProgress;