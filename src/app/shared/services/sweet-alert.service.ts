import { Injectable, Injector } from "@angular/core";


import Swal from "sweetalert2";

@Injectable({ providedIn: "root" })
export class SweetAlertServices {
  constructor(private injector: Injector) {}

  alertMessage(message: string, icon: any, timer: any) {
    Swal.fire({
      title: message,
      icon: icon,
      timer: timer,
      showCancelButton: false,
      showConfirmButton: false,
    });
  }

  confirmMessage(title: string, text: string): Promise<any> {
    return Swal.fire({
      title: title,
      text: text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes Remove',
      cancelButtonText: 'No Cancel',
    });
  }

  // new function

  successMessage(message: any) {

    Swal.fire({
      title: message,
      icon: "success",
      timer: 4000,
      showCancelButton: false,
      showConfirmButton: false,
    });
  }

  errorMessage() {

    Swal.fire({
      title: "Remove",
      icon: "error",
      timer: 4000,
      showCancelButton: false,
      showConfirmButton: false,
    });
  }

  updateMessage() {

    Swal.fire({
      title: "Update Message",
      icon: "success",
      timer: 4000,
      showCancelButton: false,
      showConfirmButton: false,
    });
  }

  warningMessage() {

    Swal.fire({
      title: "Warning",
      icon: "warning",
      timer: 4000,
      showCancelButton: false,
      showConfirmButton: false,
    });
  }

  // custom message[ key from json file translate ] and icon [ success - error - info ]
  customMessage(message: any, icon: any) {

    Swal.fire({
      title: message,
      icon: icon,
      timer: 4000,
      showCancelButton: false,
      showConfirmButton: false,
    });
  }
}
