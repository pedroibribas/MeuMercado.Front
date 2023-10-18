import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ReadFileService {

  public readAsTextAsync(file: Blob): Promise<string | undefined> {
    return new Promise<string | undefined>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => resolve(reader.result?.toString());
      reader.onerror = reject;
      
      reader.readAsText(file);
    });
  }

}