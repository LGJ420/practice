import Storage from "./storage.js";
import Display from "./display.js";
import Button from "./button.js";
import Calculator from "./caculate.js";


const display = new Display();
const calculate = new Calculator();
const storage = new Storage(display, calculate);
const button = new Button(storage);