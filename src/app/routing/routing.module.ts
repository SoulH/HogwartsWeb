import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterPageComponent } from '../pages/character-page/character-page.component';
import { RequestFormPageComponent } from '../pages/request-form-page/request-form-page.component';
import { RequestPageComponent } from '../pages/request-page/request-page.component';
import { StudentsPageComponent } from '../pages/students-page/students-page.component';
import { TeachersPageComponent } from '../pages/teachers-page/teachers-page.component';

const routes: Routes = [
  { path: '', component: CharacterPageComponent },
  { path: 'students', component: StudentsPageComponent },
  { path: 'teachers', component: TeachersPageComponent },
  { path: 'characters', component: CharacterPageComponent },
  { path: 'requests', component: RequestPageComponent },
  { path: 'request/form', component: RequestFormPageComponent },
  { path: 'request/form/:id', component: RequestFormPageComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
