/**
 * @Author Nicolas Hong-Lao
 * matricule: 1460618
 * Github user: NicolasH-L
 */

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {

  constructor(private dom: DomSanitizer) { }

  transform(url: any): unknown {
    return this.dom.bypassSecurityTrustResourceUrl(url);
  }
  
}