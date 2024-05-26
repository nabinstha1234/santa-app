import Http from 'lib/Http';

const http = new Http();

export default class SantaMessageService {
  static listAll() {
    return http.get<any>({
      endpoint: '/santa-messages/',
    });
  }

  static create(args: any) {
    return http.post<any>({
      endpoint: '/santa-messages/',
      payload: args,
    });
  }
}
