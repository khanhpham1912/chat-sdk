import { setupCounter } from "./counter.js";
import "./styles.css";
import html from "./test.html";
document.body.innerHTML = html;

setupCounter(document.querySelector("#counter"));
