import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CoreRoutingModule } from "./core-routing.module";
import { AppComponent } from "./components/app/app.component";
import { HelloComponent } from "./components/hello/hello.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { CustomReuseStrategyService } from "./services/custom-reuse-strategy.service";

@NgModule({
  imports: [BrowserModule, CoreRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HomePageComponent,
    ContactPageComponent,
  ],
  bootstrap: [AppComponent],
  providers: [CustomReuseStrategyService],
})
export class CoreModule {}
