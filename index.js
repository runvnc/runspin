const spin = require('ora').promise, shell = require('execa').shell;

const runSpin = async (cmd, msg) => { 
  let pr = shell(cmd);
  spin(pr, msg);
  return await pr;
}

module.exports = runSpin;
