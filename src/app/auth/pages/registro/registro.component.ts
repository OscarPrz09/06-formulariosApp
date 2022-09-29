import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidationErrors } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.pattern( this.validatorService.nombreApellidoPattern ) ] ],
    email: ['', [ Validators.required, Validators.pattern( this.validatorService.emailPattern ) ], [ this.emailValidator ] ],
    username: ['', [ Validators.required, this.validatorService.noPuedeSerStrider ] ],
    password: ['', [ Validators.required, Validators.minLength(6) ]  ],
    password2: ['', [ Validators.required ]  ],
  }, {
    validators: [ this.validatorService.camposIguales('password','password2') ]
  });

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if ( errors?.['required'] ) {
      return 'El correo es obligatorio';  
    } else if ( errors?.['pattern']){
        return 'El correo ingresado no tiene formato de correo';
    } else if ( errors?.['emailTomado']){
      return 'El correo ingresado ya existe';
  }
      return '';  
    }

  constructor( private fb: FormBuilder,
                private validatorService:ValidatorService,
                private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Oscar Perez',
      email: 'oscarperez@gmail.com',
      username: 'oscarprz2609',
      password: '123456',
      password2: '123456'
    })
  }

  campoNoValido( campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }

}
