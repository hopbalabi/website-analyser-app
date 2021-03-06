export default class ServerConfig {

  static SERVER_PORT = (process.env.PORT || '3030');
  // static SERVER_HOST = (process.env.NODE_ENV === 'development' ? 'localhost' : '0.0.0.0');
  static SERVER_HOST = 'localhost';
  static SERVER_URL = `http://${ServerConfig.SERVER_HOST}:${ServerConfig.SERVER_PORT}`;
  static QUERY_TIMEOUT = 60000;

}