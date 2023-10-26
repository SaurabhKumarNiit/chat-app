import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatlobbyComponent } from './chatlobby/chatlobby.component';
import { UserChatComponent } from './user-chat/user-chat.component';

const routes: Routes = [
  // {path:'',component:ChatlobbyComponent},
  {path:'chat', component :ChatlobbyComponent},
  {path:'user', component :UserChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
