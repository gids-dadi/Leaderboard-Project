import _ from 'lodash';
import './style.css';



import { getScores, postScore } from './scoresLoad';
import renderScore from './scoresRender';

const refBtn = document.querySelector('#refresh');
const form = document.querySelector('form');
const msg = document.querySelector('#msg');

refBtn.addEventListener('click', async () => {
  const list = await getScores();
  renderScore(list);
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const score = {
    user: form.elements.user.value,
    score: form.elements.score.value,
  };

  form.reset();
  await postScore(score);

  setTimeout(() => {
    // msg.innerHTML = 'Your score has been added, press Refresh to see';
    msg.innerHTML = `"${score.score}" by "${score.user}" has been added, press Refresh to see`;
    setTimeout(() => {
      msg.innerHTML = '';
    }, 3000);
  }, 3000);
});
