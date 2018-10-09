import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
name:string;
email:string;
username:string;
password:string;
  constructor(private _http:Http,private router:Router) { }

  ngOnInit() {
  }
 onSubmit(a)
 {
   
  this.name=a.name;
  this.email=a.email;
  this.username=a.username;
  this.password=a.password;
 
  console.log(this.name);
  console.log(a);
  var headers= new Headers();
  headers.append('Content-Type', 'application/json');
  let options = new RequestOptions({ headers: headers });
  
this._http.post('/api/signup',a, options)
          .subscribe(data => 
            {
                alert('Registered Successfully');
                this.router.navigate(['/api/signin']);
                
          }, error => {
              console.log(JSON.stringify(error.json()));
          })

 }

}




