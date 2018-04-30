import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GeneralService {
  // configUrl = '../assets/data.json';
  /**
   * @class
   * @param {HttpClient} http
   */

  constructor(private http: HttpClient) {
  }

  getGeneral() {
    return this.http.get('assets/data.json');
  }

  // getGeneralResponse(): Observable<HttpResponse<General>> {
  //   return this.http.get<General>(
  //     this.configUrl, {observe: 'response'}
  //   );
  // }

}
