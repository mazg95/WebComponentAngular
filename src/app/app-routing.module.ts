import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateListComponent } from './template-list/template-list.component'
import { TemplateEditorComponent } from './template-editor/template-editor.component'

const routes: Routes = [ 
  { path: 'template-list', component:  TemplateListComponent },
  { path: 'editor/:advertiserId',      component: TemplateEditorComponent },
  { path: '', redirectTo: '/template-list', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
