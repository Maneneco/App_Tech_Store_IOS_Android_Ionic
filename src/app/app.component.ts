import { Component, OnInit, ElementRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {

  logged = false;
  showsearchbar = false;

  form: FormGroup;
  createForm: FormGroup;
  submit: boolean;
  createSubmit: boolean;

  @ViewChild('topbar') pRef: ElementRef;

  constructor( public formBuild: FormBuilder, private menu: MenuController, private router: Router ) {
    //Put submit initializing with false
    this.submit = false;
    this.createSubmit = false;
  }

  //Validators to forms
  ngOnInit() {
    this.form = this.formBuild.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.createForm = this.formBuild.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', [Validators.required, Validators.minLength(8)]]
    });
  }


    //Open Main Menu
  menuteste() {
    this.menu.enable(true,'main-menu');
    this.menu.open('main-menu');
  }


    //close Menu
  closemenu() {
    this.menu.close();
  }


    //Menu choose Login
  menuchoose() {
    this.menu.enable(true, 'menu-choose');
    this.menu.open('menu-choose');
  }


    //Menu Login
  menulogin() {
    this.menu.enable(true, 'menu-login');
    this.menu.open('menu-login');
  }


    //Menu My account
  menuprofile() {
    this.menu.enable(true, 'menu-profile');
    this.menu.open('menu-profile');
  }


  //Page Mobile
  menumobile() {
    this.router.navigate(['/mobile']);
  }


  //Meru create
  menucreate() {
    this.menu.enable(true, 'menu-create');
    this.menu.open('menu-create');
  }


  //Menu Login with Email
  menuloginemail() {
    this.menu.enable(true, 'menu-login-email');
    this.menu.open('menu-login-email');
  }


  //Menu Cart
  menucart() {
    this.menu.enable(true, 'menu-cart');
    this.menu.open('menu-cart');
  }


   //temporarely login
  logout() {
    this.logged = false;
    localStorage.setItem('logged', String(this.logged));
  }



  //show and hide search bar
  togglesearchbar() {
    if (this.showsearchbar == false) {
      this.showsearchbar = true;
      document.getElementById('topbar').style.height = '120px';


    } else {
      this.showsearchbar = false;
      document.getElementById('topbar').style.height = '74px';
    }
  }



  //Search bar go to search with previous value
  search($event){
    this.router.navigate(['/search'])

    if($event.bubbles==true){
      document.getElementById('topbar').style.height = '74px';
      this.showsearchbar = false;
    }
    console.log($event);
  }



  //Need help robot
  buttonClick(){
    this.router.navigate(['/help'])
  }


  //temporarily login
  login() {

    this.submit = true;

    if(!this.form.valid){

      this.logged = false;
      console.log("Wrong Credentials");
      return false;

    }else if(this.form.valid){

      console.log("log in");
      this.logged = true;
      localStorage.setItem('logged', String(this.logged));

    } else {

      console.log("I am Getting Crazy") //Easter Egg 2

    }
  }

  createAccount(){

    this.createSubmit = true;
    console.log(this.createForm.value.password)
    console.log(this.createForm.value.password2)

    if(this.createForm.value.password != this.createForm.value.password2){


          Swal.fire({
            heightAuto: false,
            icon: 'error',
            title: 'Oops...',
            text: 'Passwords dont match',
          })

          //swal("Error!", "Passwords don't match!", "error");
          // alert("Passwords dont match")
          console.log("Passwords dont match");
          return false;


    }else{

          if(!this.createForm.valid){

            this.logged = false;
            console.log("Wrong Credentials");
            return false;

          }else if(this.createForm.valid){

            console.log(this.createForm.value);
            console.log("log in");
            this.logged = true;
            localStorage.setItem('logged', String(this.logged));

          } else {
            console.log("Nothing to do") //Easter Egg 3
          }}
        }

  get formControl() {
    return this.form.controls, this.createForm.controls;
  }

  warranty(){
    this.router.navigate(['pages/warranty']);
  }
}
