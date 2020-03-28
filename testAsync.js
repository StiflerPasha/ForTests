/*const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

delay(2000)
  .then(() => console.log('Hello!'));*/

/*const test = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});*/

/*test
  .then(res1 => res1 + 1)
  .then(res2 => {
    throw new Error('Error');
  })
  .then(res3 => console.log(res3))
  .catch(err => console.log(err.message))
  .then(() => console.log('after catch'));*/


const timer = async (how) => {
  let i = 0;
  while (true) {
    await new Promise(resolve => setTimeout(() => {
      ++i;
      resolve()
    }, 1000));
    
    console.log(i);
    if (i >= how) break;
  }
};

timer(5).then(() => console.log('Done!'));
