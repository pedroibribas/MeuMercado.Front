import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadFileService } from './shared/services/read-file.service';
import { FileInputService } from './shared/services/file-input.service';
import { LocalStorageService } from './shared/services/local-storage.service';
import { AlertModule } from './components/alert/alert.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule
  ],
  providers: [
    FileInputService,
    ReadFileService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
