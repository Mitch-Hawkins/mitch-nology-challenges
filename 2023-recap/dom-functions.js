export const createNode = (parent, type, content, success = true) => {
  const child = document.createElement(type);
  const textNode = document.createTextNode(content);
  child.appendChild(textNode);
  if (success) {
    child.classList.add("success");
  } else {
    child.classList.add("danger");
  }
  parent.appendChild(child);
};
