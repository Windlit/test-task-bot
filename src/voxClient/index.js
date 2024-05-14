import * as VoxImplant from 'voximplant-websdk';

export default class VoxClient {
  constructor() {
    this.sdk = VoxImplant.getInstance();
  }

  async login() {
    try {
      await this.sdk.init({
        // showDebugInfo: true,
        node: VoxImplant.ConnectionNode.NODE_3,
      });
      console.log('SDK is ready!');
      try {
        await this.sdk.connect();
        console.log('Connected');
      } catch (e) {
        console.log('Connection failed!');
      }
      try {
        await this.sdk.login('test-user@robot.smirnov-test-js.voximplant.com', 'qwnms378st');
        console.log('Logged in!');
      } catch (e) {
        console.log('Login failure!');
      }
    } catch (e) {
      console.log('SDK init failure!');
    }
  }

  async call() {
    await this.sdk.call({ number: '699111522', video: { sendVideo: false, receiveVideo: false } });
  }
}
