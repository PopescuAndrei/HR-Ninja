import { Injectable } from '@angular/core';

export interface IconFiles {
  imageFile: string,
  alt: string,
  link: string
}

export interface SharedConfigSettings {
  showLanguageSelector? : boolean,
  showUserControls? : boolean,
  showStatusBar? : boolean,
  showStatusBarBreakpoint? : number,
  socialIcons? : Array<IconFiles>
}

@Injectable()
export class SharedConfigService {

  showUserControls = true;
  showStatusBar = true;
  showStatusBarBreakpoint = 0;
  socialIcons = new Array<IconFiles>();
  
  configure(settings: SharedConfigSettings) : void {
    Object.assign(this, settings);
  }
}
