import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";

import buttonStyle from "./button.module.css";
import viteLogo from "./vite-logo.png";
import imageStyles from "./image.module.css";
import { user } from "./data.json";
import sum from "./sum";

const a = 4,
  b = 5;
console.log(`Sum of ${a} + ${b} = ${sum(a, b)}`);
const modules = import.meta.glob("./modules/*.js");

console.log(modules);

for (const path in modules) {
  modules[path]().then((module) => {
    module.load();
  });
}
document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <button id="btn">Click!</button>
    <img id="vite-logo"/>
    <pre>${JSON.stringify(user)}</pre>
  </div>
`;

document.getElementById("btn").className = buttonStyle.btn;

const image = document.getElementById("vite-logo");
image.src = viteLogo;
image.className = imageStyles.img;

setupCounter(document.querySelector("#counter"));
