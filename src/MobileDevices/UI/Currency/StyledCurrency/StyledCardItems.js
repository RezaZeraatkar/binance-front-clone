import styled from "styled-components";

const StyledCardItems = styled.div({
  flexBasis: "33%",
  alignItems: "center",
  margin: "0px",
  cursor: "pointer",
  display: "inline-flex",
  height: "48px",
  width: "120px",
  minWidth: "0px",
  "& span": {
    height: "24px",
    width: "24px",
    marginLeft: "24px",
    marginRight: "8px",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    borderRadius: "100%",
    border: "1px solid rgb(75, 77, 81)",
    textAlign: "center"
  },
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.04)",
    color: "#F0B90B"
  }
});

export default StyledCardItems;
