import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;


  constructor() { }

  ngOnInit(): void {
  }

  nombreValido():boolean {
    return this.miFormulario?.controls['producto']?.invalid && this.miFormulario?.controls['producto']?.touched;
    
  }

  
  precioValido():boolean {
    return this.miFormulario?.controls['precio']?.touched && this.miFormulario?.controls['precio']?.invalid;
    //return this.miFormulario?.controls['precio']?.touched || this.miFormulario?.controls['precio']?.value < 0;
    //return this.miFormulario?.controls['precio']?.touched && (this.miFormulario?.controls['precio']?.value > 0 ||  this.miFormulario?.controls['precio']?.value == ' ');
  }

  // guardar( miFormulario: NgForm ) {
    guardar() {
      // console.log( this.miFormulario );
      console.log('Posteo correcto');
  
      this.miFormulario.resetForm({
        precio: 0,
        existencias: 0
      });
    }

}
