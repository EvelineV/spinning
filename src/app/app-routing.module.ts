import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpinToCrimpComponent } from './spin-to-crimp/spin-to-crimp.component';
import { KnitSocksComponent } from './knit-socks/knit-socks.component';
import { YardsPerPoundComponent } from './yards-per-pound/yards-per-pound.component';

const routes: Routes = [
  { path: "spin-to-crimp", component: SpinToCrimpComponent },
  { path: "knit-socks", component: KnitSocksComponent },
  { path: "yards-per-pound", component: YardsPerPoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
