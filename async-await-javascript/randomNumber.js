function getRandomNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 100) + 1;
      resolve(randomNum);
    }, 500);
  });
}

async function printRandomNumber() {
  const randomNumber = await getRandomNumber();
  console.log(randomNumber);
}

printRandomNumber();
