const maxPoints = 100;

function updateBar(bar, points) {
  let percentage = Math.abs(points) / maxPoints * 100;
  percentage = Math.min(percentage, 100);

  bar.style.width = percentage + '%';

  bar.classList.remove('positive', 'zero', 'negative');

  if (points > 0) {
    bar.classList.add('positive');
  } else if (points < 0) {
    bar.classList.add('negative');
  } else {
    bar.classList.add('zero');
  }
}

function updateUI() {
  const f1 = Number(localStorage.getItem('f1')) || 0;
  const f2 = Number(localStorage.getItem('f2')) || 0;

  document.getElementById('p1').innerText = f1;
  document.getElementById('p2').innerText = f2;

  updateBar(document.getElementById('b1'), f1);
  updateBar(document.getElementById('b2'), f2);
}

updateUI();
setInterval(updateUI, 1000);