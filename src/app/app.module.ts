import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlertModule } from './components/alert/alert.module';
import { ModalModule } from './components/modal/modal.module';

import { ReadFileService } from './shared/services/read-file.service';
import { FileInputService } from './shared/services/file-input.service';
import { LocalStorageService } from './shared/services/local-storage.service';
import { ExportFileService } from './shared/services/export-file.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule,
    ModalModule
  ],
  providers: [
    FileInputService,
    ReadFileService,
    ExportFileService,
    LocalStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
