console.log(process.env.ENV_MODE);


console.log('start');
process.nextTick(() => {
  console.log('nextTick callback');
});
console.log('scheduled');


console.log(process.platform);