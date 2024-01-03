export const createNode = (parent, type, content, className) => {
  const child = document.createElement(type);
  const textNode = document.createTextNode(content);
  child.appendChild(textNode);
  if (className) {
    child.classList.add(className);
  }
  parent.appendChild(child);
};

export const clearNode = (node) => {
  node.innerHTML = "";
};
