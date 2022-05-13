const gameID = 'RSRgo040GSWjFrJlWRw3';

const postScore = async (score) => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores`,
    {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(score),
    },
  );
  return response.json();
};

const getScores = async () => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores`,
  );
  return response.json();
};

export { getScores, postScore };
