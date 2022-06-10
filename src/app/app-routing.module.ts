import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpinToCrimpComponent } from './spin-to-crimp/spin-to-crimp.component';

const routes: Routes = [
  { path: "", component: SpinToCrimpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
