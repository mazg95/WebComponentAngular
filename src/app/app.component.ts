import { Component, ViewEncapsulation, Input, Output, OnInit } from '@angular/core';
import { EventEmitter } from 'events';
import { MailTemplateConfigService } from './services/mail-template-config-service/mail-template-config.service';
import { Router } from '@angular/router';

@Component({
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit{
  @Input() apiUrl: string;

  @Output() savedTemplate = new EventEmitter();

  constructor(private router: Router, private mailTemplateConfig: MailTemplateConfigService){
    router.initialNavigation(); 
  }

  ngOnInit(){
    this.mailTemplateConfig.setApiUrl(this.apiUrl);
  }

}
