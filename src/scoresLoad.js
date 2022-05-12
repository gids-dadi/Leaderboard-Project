const gameID = 'Zl4d7IVkemOTTVg2fUdz';

// const baseURL =
//  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const postScore = async (score) => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores`,
    {
      method: 'POST',
      // mode: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(score),
    }
  );
  return response.json();
  // return result;
};

const getScores = async () => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores`
  );
  // const { result } = await
  return response.json();

  // return result;
};
export { getScores, postScore };
