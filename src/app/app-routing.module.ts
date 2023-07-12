import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DownloadComponent } from './download/download.component';
import { GraphicComponent } from './graphic/graphic.component';
import { HoddyComponent } from './hoddy/hoddy.component';
import { IndexComponent } from './index/index.component';
import { JoggerComponent } from './jogger/jogger.component';
import { KidComponent } from './kid/kid.component';
import { MessiComponent } from './messi/messi.component';
import { MessishowComponent } from './messishow/messishow.component';
import { OuterComponent } from './outer/outer.component';
import { PoloComponent } from './polo/polo.component';
import { PoloshowComponent } from './poloshow/poloshow.component';
import { SaleComponent } from './sale/sale.component';
import { UnderwearComponent } from './underwear/underwear.component';
import { WishComponent } from './wish/wish.component';

const routes: Routes = [
  {
  path:'',component:IndexComponent
  },
{
  path:'polo',component:PoloComponent
},
{
  path:'poloshow',component:PoloshowComponent
},
{
  path:'jogger',component:JoggerComponent
},
{
  path:'outer',component:OuterComponent
},
{
  path:'hoddy',component:HoddyComponent
},
{
  path:'kid',component:KidComponent
},
{
  path:'messi',component:MessiComponent
},
{
  path:'underwear',component:UnderwearComponent
},
{
  path:'graphic',component:GraphicComponent
},
{
  path:'cart',component:CartComponent
},
{
  path:'download',component:DownloadComponent
},
{
  path:'wish',component:WishComponent
},
{
  path:'messishow',component:MessishowComponent
},
{
  path:'sale',component:SaleComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
