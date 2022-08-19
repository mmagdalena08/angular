import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CantonesService } from '../servicio/cantones.service';



@Component({
  selector: 'app-cantones',
  templateUrl: './cantones.component.html',
  styleUrls: ['./cantones.component.css']
})
export class CantonesComponent implements OnInit {

  formve: FormGroup;
  provincia: any[] = [];
  canton: any[] = [];
  image: any;

  constructor(
    private fb: FormBuilder,
    private CantonesService:CantonesService
  ) { 
    this.formve = this.fb.group({
      canton: ['', Validators.required],
      imagen: ['', Validators.required],
      id_provincia: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this. getprovincia();
    this.getcanton();
  }

  getImagen(event: any) {
    this.image = event.target.files[0];
  }
  register(){
    if(this.formve.valid){
      const canton = {
        canton: this.formve.controls["canton"].value,
        imagen: this.image,
        id_provincia: this.formve.controls["id_provincia"].value
      
      }

      this.CantonesService.postcanton(canton).subscribe({
        next:(res)=> console.log(res),
        error:(err)=>console.log(err)
      });
    }else{
      alert('Hay campos invalidos')
    }
    
  }

  getprovincia(){
    this.CantonesService.getprovincia().subscribe({
      next:(res)=> {
        this.provincia = res;
      },
      error:(err)=> console.log(err)
    });
  }
  getcanton(){
    this.CantonesService.getcanton().subscribe({
      next:(res)=> {
        this.canton = res;
      },
      error:(err)=> console.log(err)
    });
  }

  deletecanton(id:any){
    this.CantonesService.deletecanton(id, this.formve).subscribe(data=>(console.log(data)));
   
  }
}

