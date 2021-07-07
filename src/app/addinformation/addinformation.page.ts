import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addinformation',
  templateUrl: './addinformation.page.html',
  styleUrls: ['./addinformation.page.scss'],
})
export class AddinformationPage implements OnInit {

  @ViewChild('dateTime') dateTime;

  form: FormGroup;
  date: FormControl = new FormControl('', Validators.required);

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form =this.fb.group({
      date: this.date
    });

    setTimeout(_ => {
      this.dateTime.setValue(new Date().toISOString());
    });
  }

    warrantydone(){
        Swal.fire({
          heightAuto: false,
          title: 'Are you sure?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, ask warranty!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              heightAuto: false,
              title: 'Process Done',
              html: 'Your request has been added.',
              icon: 'success'
            });
            this.router.navigate(['/warrantydone']);
          }
        });
    }

}
