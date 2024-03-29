const localhost = 'localhost:3001';
const staging = '';
const runningUrl = process.env.NODE_ENV === 'production' ? staging : localhost;
const httpUrl = `http://${runningUrl}`;
const mediaBaseUrl = `http://${runningUrl}/api/util/file/`;

export default class Connection {
  static getBaseUrl() {
    return 'https://boligfondetpre.azurewebsites.net/';
  }

  static getMedia(id) {
    return `${mediaBaseUrl}/${id}`;
  }

  static getStaticContent(url) {
    return `${httpUrl}/${url}`;
  }
}
