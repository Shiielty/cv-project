import { Component } from "react";
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
        <button onClick={viewPreview}>View</button>
        <button onClick={print}>print</button>
      </div>
    );
  }
}
