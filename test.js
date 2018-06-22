const runSpin = require('./index.js');

(async () => {
  await runSpin('sleep 3','Sleeping..');
  await runSpin('ls -lah','Listing');
  await runSpin('sleep 1', 'Wait..');
  await runSpin('echo done>status', 'Finished');  
})().catch(console.error);
