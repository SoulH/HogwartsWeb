import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { CharacterPageComponent } from './character-page/character-page.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { TeachersPageComponent } from './teachers-page/teachers-page.component';
import { RequestPageComponent } from './request-page/request-page.component';
import { RequestFormPageComponent } from './request-form-page/request-form-page.component';


@NgModule({
  declarations: [
    CharacterPageComponent,
    StudentsPageComponent,
    TeachersPageComponent,
    RequestPageComponent,
    RequestFormPageComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ]
})
export class PagesModule { }
