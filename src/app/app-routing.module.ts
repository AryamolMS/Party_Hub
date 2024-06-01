import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PartiesListComponent } from './parties-list/parties-list.component';
import { PartiesAddComponent } from './parties-add/parties-add.component';
import { PartiesEditComponent } from './parties-edit/parties-edit.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"parties-list", component:PartiesListComponent},
  {path:"parties-add", component:PartiesAddComponent},
  {path:"parties-edit/:id", component:PartiesEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
