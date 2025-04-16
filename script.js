function changeContent() {
  const textEl = document.getElementById('dynamic-text');
  textEl.textContent = 'Content has been changed successfully!';
  textEl.style.color = 'white';
  textEl.style.backgroundColor = 'green';
  textEl.style.padding = '0.5rem';
}

function toggleElement() {
  const container = document.getElementById('toggle-container');
  const existing = document.getElementById('extra-element');

  if (existing) {
    container.removeChild(existing);
  } else {
    const newEl = document.createElement('p');
    newEl.id = 'extra-element';
    newEl.textContent = 'New Paragraph added.';
    container.appendChild(newEl);
  }
}
