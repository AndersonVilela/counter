const result = document.getElementById('count');
const btn = document.getElementById('btn');
let count = 0

btn.addEventListener('click', ( event ) => {
  let seletor = event.target.id;

  if (seletor === 'decrase') {
    count = count - 1;
    result.textContent = `${count}`;
  }else if (seletor === 'reset') {
    count = 0;
    result.textContent = `${count}`;
  }else if (seletor === 'increase') {
    count++;
    result.textContent = `${count}`;
  }
});




