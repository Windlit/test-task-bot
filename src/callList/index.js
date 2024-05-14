const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const path = require('path');

const str = '9377150;test-user';
const buf = Buffer.from(str);

const client = new VoximplantApiClient(path.join(process.cwd(), 'credentials.json'));

client.onReady = async function onReady() {
  await client.CallLists.createCallList({
    rule_id: 7025033,
    priority: 1,
    max_simultaneous: 1,
    num_attempts: 5,
    name: 'callList',
    file_content: buf,
    interval_seconds: 600,
  });
  console.log('successfully generated call list');
};
