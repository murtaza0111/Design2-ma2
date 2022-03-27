export function showMessage(field, errorMessage, messageColor) {
    field.style.display = "block";
    field.style.color = messageColor;
    field.style.textAlign = "center";
    field.style.fontSize = "2rem";
    field.style.background = "#88888855";
    field.style.border = `1px solid ${messageColor}`;
    field.innerHTML = errorMessage;
  }
  