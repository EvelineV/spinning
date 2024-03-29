import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinToCrimpComponent } from './spin-to-crimp/spin-to-crimp.component';
import { KnitSocksComponent } from './knit-socks/knit-socks.component';
import { KnitGaugeComponent } from './knit-gauge-component/knit-gauge.component';
import { GristComponent } from './grist/grist.component';
import { PliedWpiComponent } from './plied-wpi/plied-wpi.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinToCrimpComponent,
    KnitSocksComponent,
    KnitGaugeComponent,
    GristComponent,
    PliedWpiComponent,
    TooltipComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
