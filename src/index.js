import VoxClient from './voxClient';

const voxClient = new VoxClient();
(async () => {
  await voxClient.login();
})();
