import { Component } from '@angular/core';
import { ChatservicesService } from '../chatservices.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-chatlobby',
  templateUrl: './chatlobby.component.html',
  styleUrls: ['./chatlobby.component.css']
})
export class ChatlobbyComponent {

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
      this.chatService.readUser2Message().subscribe({
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
      this.chatService.sendUser1Message(this.formData).subscribe(response=>{
        alert("Message Sent");
      }),
  
      form.resetForm();
     }
     else {
  
   alert("Error");
    }

  }

}
