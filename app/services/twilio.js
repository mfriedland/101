const twilio = require('twilio')

const accountSid= 'ACa27b532e08a0012b47d827b83e3bc051';
const authToken = '855d1f3e54907f481e1d3000cd6480a7';
// ACCOUNT SID
// ACa27b532e08a0012b47d827b83e3bc051
// AUTH TOKEN
// 855d1f3e54907f481e1d3000cd6480a7
// add to .gitignore

// +12133944645

module.exports = new twilio.Twilio(accountSid, authToken);
