import { Component, EventEmitter, Output } from "@angular/core";
import { ReadFileService } from "src/app/shared/services/read-file.service";
import { FileInputService } from "src/app/shared/services/utils/file-input.service";

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html'
})
export class FileInputComponent {
  @Output() newFileDataAsStringEvent = new EventEmitter<string>();

  constructor(
    private fileInputService: FileInputService,
    private readFileService: ReadFileService
  ) { }
  
  public readTextFile(event: Event) {
    const fileList = this.fileInputService.getFileList(event);

    if (fileList) {
      this.readFileService.readAsTextAsync(fileList[0])
        .then((text) => this.newFileDataAsStringEvent.emit(text));
    }
  }
}