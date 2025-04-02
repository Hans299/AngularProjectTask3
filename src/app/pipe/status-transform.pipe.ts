import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'statusTransform'
})
export class StatusTransformPipe implements PipeTransform {
  constructor(private sanitizer:DomSanitizer){}

  transform(value: string): SafeHtml {
    if (!value) return '';  // Pastikan jika value kosong, kembalikan string kosong
    return this.sanitizer.bypassSecurityTrustHtml(`<i>${value}</i>`);  // Menambahkan tag <i> untuk italic
  }
}


