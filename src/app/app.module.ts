import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { TemplateEditorComponent } from './template-editor/template-editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    TemplateListComponent,
    TemplateEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    NgxDatatableModule
  ],
  providers: [],
  entryComponents: [AppComponent, TemplateListComponent, TemplateEditorComponent]
})
export class AppModule {
  constructor(private injector: Injector){}
  ngDoBootstrap(){
    const app = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('ng-mail-template', app);

    const mail_list = createCustomElement(TemplateListComponent, {injector: this.injector});
    customElements.define('ng-mail-template-list', mail_list);

    const mail_editor = createCustomElement(TemplateEditorComponent, {injector: this.injector});
    customElements.define('ng-mail-template-editor', mail_editor);
  }
 }
