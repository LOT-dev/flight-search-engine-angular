import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

    public apiServer: string;
    public apiCredentials: {
      apiKey: string,
      appId: string,
      secretKey: string
    };

    constructor() {
      this.apiServer = environment.server;
      this.apiCredentials = environment.apiCredentials;
    }

}
