import { foo } from "./foo.js";
import "./style.css";
import { userName } from "./userName.js";

const wrap = document.querySelector("#app");
// console.log(wrap);
console.log(foo());

wrap.innerHTML = foo();
console.log(foo());
// console.log(userName);
