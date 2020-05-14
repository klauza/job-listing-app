var CronJob = require('cron').CronJob;

const fetchGithub = require('./tasks/fetch-github');

var job = new CronJob('*/1 * * * *', fetchGithub, null, true, 'America/Los_Angeles');
job.start();