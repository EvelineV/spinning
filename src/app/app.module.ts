import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinToCrimpComponent } from './spin-to-crimp/spin-to-crimp.component';
import { KnitSocksComponent } from './knit-socks/knit-socks.component';
import { GristComponent } from './grist/grist.component';
import { UnitSelectorComponent } from './unit-selector/unit-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinToCrimpComponent,
    KnitSocksComponent,
    GristComponent,
    UnitSelectorComponent
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
