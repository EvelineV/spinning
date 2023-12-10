import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpinToCrimpComponent } from './spin-to-crimp/spin-to-crimp.component';
import { KnitSocksComponent } from './knit-socks/knit-socks.component';
import { PliedWpiComponent } from './plied-wpi/plied-wpi.component';
import { GristComponent } from './grist/grist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "spin-to-crimp", component: SpinToCrimpComponent },
  { path: "knitting/socks", component: KnitSocksComponent },
  { path: "grist", component: GristComponent },
  { path: "plied-wpi", component: PliedWpiComponent },
  { path: "", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
