import {
    cleanEnv, str, port,
  } from 'envalid';

class validEnv {
  static validateEnv: any;

  public validateEnv() {
    cleanEnv(process.env, {
      MONGO_PASSWORD: str(),
      MONGO_PATH: str(),
      MONGO_USER: str(),
      PORT: port(),
    });
  }

}

  export default  validEnv;