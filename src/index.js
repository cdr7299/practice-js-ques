// import "./styles.css";
// import _ from "lodash";

const input = [
  { text: "One", indent: 0, type: "ordered" },
  { text: "Two", indent: 0, type: "ordered" },
  { text: "Alpha", indent: 1, type: "bullet" },
  { text: "Beta", indent: 1, type: "bullet" },
  { text: "I", indent: 2, type: "ordered" },
  { text: "II", indent: 2, type: "ordered" },
  { text: "Gamma", indent: 1, type: "bullet" },
  { text: "Three", indent: 0, type: "ordered" },
  { text: "bomb", indent: 1, type: "ordered" }
];

let r = "";

const dfs = (input, currIndent, start, visited) => {
  for (let i = start; i < input.length; i++) {
    const { text, indent, type } = input[i];
    if (indent === currIndent && !visited[i]) {
      visited[i] = true;
      if (type === "ordered" && i === 0) {
        r += `<ol><li>${text}`;
        dfs(input, indent, i + 1, visited);
        r += "</li></ol>";
      } else if (type !== "ordered" && i === 0) {
        r += `<ul><li>${text}`;
        dfs(input, indent, i + 1, visited);
        r += "</li></ul>";
      } else {
        r += `<li>${text}</li>`;
      }
    } else if (indent > currIndent && !visited[i]) {
      visited[i] = true;
      if (type === "ordered") {
        r += `<ol><li>${text}`;
        dfs(input, currIndent + 1, i + 1, visited);
        r += "</li></ol>";
      } else {
        r += `<ul><li>${text}</li>`;
        dfs(input, currIndent + 1, i + 1, visited);
        r += "</ul>";
      }
    } else if (indent < currIndent) return;
  }
};

const deltaToHtml = (parsedInput) => {
  const visited = Array(parsedInput.length).fill(false);
  dfs(parsedInput, 0, 0, visited);
  console.log(r);
  return r;
};

document.getElementById("root").innerHTML = deltaToHtml(input);

const numbers = {
  numberA: 5,
  numberB: 10,
  sum() {
    console.log(this, "I am a this in sum function");
    function calculate() {
      console.log(this, "I am a this in calculate function");
      return this.numberA + this.numberB;
    }
    return calculate();
  }
};

numbers.sum();

// Write a code which can do following
// […4] returns [0, 1, 2, 3, 4]

var a = { p: 5, q: { r: 6 } };
var b = Object.assign({}, a);
console.log({ a, b }, "1st log");
b.p = 10;
b.q.r = 11;
console.log({ a, b }, "2nd log");

// O/P
[1, 2, 3].map((x) => {
  [4, 5, 6].map((y) => {
    [7, 8, 9].map((z) => {
      console.log(x, y, z);
    });
  });
});

// O/P

var a = [1, 2, 3, 4];
var b = a.splice(-1, 1, 10, 100, Infinity); // (2, 1, 10)
console.log(a, b);

// O/P
var a = [1, 2, 3, 4];
var b = a.splice(undefined, undefined, undefined);
console.log(a, b);

// O/P
var a = [1, 2, 3, 4];
var b = a.splice(1, undefined);
console.log(a, b);

// O/P
var a = [1, 2, 3, 4];
var b = a.splice(1);
console.log(a, b);

// O/P
var a = [1, 2, 3];
let result;
for (let i in a) {
  result = result ? result + i : i;
}
console.log(result);

// O/P
function test(a, b) {
  console.log({ arguments, a, b });
}
test`2, 5`;

// O/P
function test() {
  console.log({ arguments });
  return arguments.join("");
}

console.log(test(100, 200));

// O/P
var a = { p: 5 };
with (a) {
  p = 6;
  var b = { q: 7 };
}
console.log(a, b);

// O/P
function alterObj(obj1, obj2) {
  obj1.b = 7;
  obj1 = null;
  obj2 = null;
  console.log("obj inside func", obj1, obj2);
}

var obj1 = { a: 5 };
var obj2 = { p: 1 };

alterObj(obj1, obj2);

console.log(obj1, obj2);
