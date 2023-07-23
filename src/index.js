const h1 = document.querySelector("h1");
const button = document.querySelector("button")

const replaceWords = (element) => {
  const text = element.innerText;
  const words = text.split(" + ");
  element.innerText = `${words[1]} + ${words[0]}`
}

button.addEventListener('click', () => replaceWords(h1));
