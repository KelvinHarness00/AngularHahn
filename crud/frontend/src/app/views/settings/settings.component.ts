import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

import { Country } from '@angular-material-extensions/select-country';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  title = 'select-country';

  countryFormControl = new FormControl();

  onCountrySelected($event: Country) {
    console.log($event);
  }

  toggleChanged(event: MatSlideToggleChange) {
    console.log('Botão de alternância mudou:', event.checked);
  }
  
  onInput(event: any) {
    const input = event.target;
    const value = input.value;
    input.value = value.replace(/\D/g, '');
  }

}
