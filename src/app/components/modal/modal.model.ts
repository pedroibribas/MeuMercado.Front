import { Type } from "@angular/core";

export class Modal {
    public title: string;
    public component?: Type<any>;
  
    constructor(init: Modal) {
      this.title = init.title;
      this.component = init.component;
    }
  }