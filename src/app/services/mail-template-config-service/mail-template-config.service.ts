import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailTemplateConfigService {
  private apiUrl: string;

  constructor() { }

  getApiUrl():string{
    return this.apiUrl;
  }

  setApiUrl(apiUrl:string){
    this.apiUrl = apiUrl;
  }
}
