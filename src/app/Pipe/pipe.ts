import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalizeFirst' })
export class CapitalizeFirstPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
  
    const words = value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

    return words.join(' ');
  }
}