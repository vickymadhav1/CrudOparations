import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  username:string;
  password:string;
  constructor(private _http:Http,private router:Router) { }

  ngOnInit() {
  }
  onSubmit(a)
  {
   this.username=a.username;
   this.password=a.password;
    console.log(this.username+"   "+this.password);
 // console.log(a);
  var headers= new Headers();
  headers.append('Content-Type', 'application/json');
  let options = new RequestOptions({ headers: headers });
  
this._http.post('/api/signin',a, options)
.subscribe(data => {
  alert("success");
   this.router.navigate(['api/data'])
}, error => {
   alert("invalid user")
// console.log(JSON.stringify(error.json()));
})
}
}


