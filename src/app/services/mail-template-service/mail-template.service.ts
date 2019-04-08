import { Injectable } from '@angular/core';
import { MailTemplate } from '../../models/mail-template'
import {  Observable, of } from 'rxjs';
import { MailTemplateConfigService } from '../mail-template-config-service/mail-template-config.service';

@Injectable({
  providedIn: 'root'
})
export class MailTemplateService {
  mail_templates: Array<MailTemplate> = [{
    'advertiserId': 1,
    'advertiserName': 'Google',
    'lastUpdatedDate': new Date('03/02/2019'),
    'template': '<html><body>Hello World</body></html>'
  }, {
    'advertiserId': 2,
    'advertiserName': 'Yahoo',
    'lastUpdatedDate': new Date('03/02/2019'),
    'template': '<html><body>Hello World</body></html>'
  }]

  constructor(private mailTemplateConfig: MailTemplateConfigService) { }

  getAllTemplates(): Observable<any[]>{
    /* Fetch All code */ 
    return of(this.mail_templates.map(o => {
      return { advertiserId: o.advertiserId, advertiserName: o.advertiserName,
      lastUpdateDate: o.lastUpdatedDate}
    }));
  }

  getTemplateByAdvertiser(advertiserId:Number): Observable<string>{
      /* fetch one template by advertiser id */
      const mt = this.mail_templates.find(o => o.advertiserId == advertiserId)
      return of(mt ? mt.template : null);
  }

  saveMailTemplate(advertiserId, template): Observable<boolean>{
    /* Code to post to service the new or updated template */
    let mt = new MailTemplate();
    mt.advertiserId = advertiserId;
    mt.template = template;
    this.mail_templates.push(mt);
    return of(true);
  }

  deletMailTemplate(advertiserId:number):boolean{
    return true;
  }
}
