import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { VitalTaskComponent } from './vital-task/vital-task.component';
import { MyTaskComponent } from './my-task/my-task.component';
import { CategoriesComponent } from './categories/categories.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'homePage', component: HomepageComponent },
      { path: 'vitalTask', component: VitalTaskComponent },
      { path: 'myTask', component: MyTaskComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'help', component: HelpComponent },
      { path: '', redirectTo: 'homePage', pathMatch: 'full' },
      { path: '**', redirectTo: 'errors/error404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
