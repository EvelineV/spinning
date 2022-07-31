import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpinToCrimpComponent } from './spin-to-crimp/spin-to-crimp.component';
import { KnitSocksComponent } from './knit-socks/knit-socks.component';
import { PliedWpiComponent } from './plied-wpi/plied-wpi.component';
import { GristComponent } from './grist/grist.component';

const routes: Routes = [
  { path: "spin-to-crimp", component: SpinToCrimpComponent },
  { path: "knit-socks", component: KnitSocksComponent },
  { path: "grist", component: GristComponent },
  { path: "plied-wpi", component: PliedWpiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
