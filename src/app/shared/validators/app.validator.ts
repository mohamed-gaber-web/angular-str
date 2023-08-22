import {
  FormGroup,
  FormControl,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

export function matchingPasswords(
  passwordKey: string,
  passwordConfirmationKey: string
): any {
  return (formGroup: FormGroup) => {
    let password = formGroup.controls[passwordKey];
    let passwordConfirmation = formGroup.controls[passwordConfirmationKey];

    if (password.value !== passwordConfirmation.value) {
      // return passwordConfirmation.setErrors({ mismatchedPasswords: true });
      return { mismatchedPasswords: true };
    }
    return null;
  };
}

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value != null || control.value !== '') {
      var value = control.value;
      if (Number.isNaN(Number(value)) || containsSpecialChar(value)) {
        return { minLengthValidator: true };
      }
      return null;
    }
    return { minLengthValidator: true };
  };
}

export function emailValidator(control: FormControl) {
  var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  if (control.value && !emailRegexp.test(control.value)) {
    return { invalidEmail: true };
  }
  return null;
}
export function TextOnlyValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value != null || control.value !== '') {
      var value = control.value;
      if (containsNumbers(value)) {
        return { patternValidator: true };
      }
      return null;
    }
    return { patternValidator: true };
  };
}
export function startsWith(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value != null || control.value !== '') {
      var value: string = control.value;
      if (control.value !== undefined) {
        if (value.charAt(0) !== '0') {
          return { minLengthValidator: true };
        }
        return null;
      }
    }
    return { minLengthValidator: true };
  };
}
export function onlySpaces(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value != null || control.value !== '') {
      var value = control.value;
      if (containtsOnlySpaces(value)) {
        return { spacesValidator: true };
      }
      return null;
    }
    return { spacesValidator: true };
  };
}
export const phoneNumber =
  '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{4}[-s.]?[0-9]{4,5}$';

function containsNumbers(val: any) {
  return /[0-9]/.test(val);
}

function containtsOnlySpaces(val: any) {
  return !val.replace(/\s/g, '').length;
}

function containsSpecialChar(val: any) {
  let format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return format.test(val);
}
export function DateFutureValidation(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value != null || control.value !== '') {
      var value = new Date(control.value);
      var date = new Date();
      if (value.setDate(value.getDate()) > date.setDate(date.getDate() - 1))
        return { invalidDate: true };
    }
    return null;
  };
}
