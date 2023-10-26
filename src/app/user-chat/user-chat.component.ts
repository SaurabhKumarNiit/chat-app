import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatservicesService } from '../chatservices.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.css']
})
export class UserChatComponent {

  formData = {
    message: '',
  };


  public resItems:any;

  restaurantItem:any;


  public searchTerm !: string;
  public totalItem : number = 0;
  public filterCategory : any
  searchKey:string ="";
 

  constructor(private chatService:ChatservicesService,private activateRoute:ActivatedRoute) { }


  ngOnInit(): void {
      this.chatService.readUser1Message().subscribe({
      next:data=>{
        // this.restaurant=data;
        this.filterCategory=data;

      },
      error:e=>{
      console.log("Failed due to Network Error");
      }
    })
  }


  sendMessage(form: NgForm){

    if(form.valid){
      this.chatService.sendUser2Message(this.formData).subscribe(response=>{
        alert("Message Sent");
      }),
  
      form.resetForm();
     }
     else {
  
   alert("Error");
    }

  }

}
