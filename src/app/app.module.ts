import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { PoloComponent } from './polo/polo.component';
import { PoloshowComponent } from './poloshow/poloshow.component';
import { HeaderComponent } from './header/header.component';
import { JoggerComponent } from './jogger/jogger.component';
import { OuterComponent } from './outer/outer.component';
import { HoddyComponent } from './hoddy/hoddy.component';
import { GraphicComponent } from './graphic/graphic.component';
import { KidComponent } from './kid/kid.component';
import { MessiComponent } from './messi/messi.component';
import { UnderwearComponent } from './underwear/underwear.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { DownloadComponent } from './download/download.component';
import { FooterComponent } from './footer/footer.component';
import { WishComponent } from './wish/wish.component';
import { MessishowComponent } from './messishow/messishow.component';
import { SaleComponent } from './sale/sale.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PoloComponent,
    PoloshowComponent,
    HeaderComponent,
    JoggerComponent,
    OuterComponent,
    HoddyComponent,
    GraphicComponent,
    KidComponent,
    MessiComponent,
    UnderwearComponent,
    CartComponent,
    DownloadComponent,
    FooterComponent,
    WishComponent,
    MessishowComponent,
    SaleComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
