import { Component } from "react";
import PrintLogo from "../assets/print-solid.svg";
import ViewLogo from "../assets/eye-solid.svg";
import "./floatButton.css";

export default class FloatButton extends Component {
  render() {
    function print() {
      window.print();
    }

    function viewPreview() {
      const preview = document.querySelector(".preview");
      if (preview.style.visibility === "hidden") {
        preview.style.visibility = "visible";
      } else {
        preview.style.visibility = "hidden";
      }
    }

    return (
      <div className="float-btn">
        <button onClick={viewPreview}>
          <img src={ViewLogo} alt="view" />
        </button>
        <button onClick={print}>
          <img src={PrintLogo} alt="print" />
        </button>
      </div>
    );
  }
}
