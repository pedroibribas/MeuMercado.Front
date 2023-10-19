import { Injectable } from "@angular/core";

Injectable({
  providedIn: 'root'
})
export class FileInputService {

  public getFileList(event: Event): FileList | null {
    const input = event.currentTarget as HTMLInputElement;
    return input.files;
  }
  
}