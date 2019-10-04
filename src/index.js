const container = document.getElementById("content");
const btn1 = document.createElement("input");
btn1.setAttribute("type", "button");
btn1.id = "btn1";

btn1.value = "第一个three";
btn1.onclick = () => {
  console.log("hello");
};

container.append(btn1);
