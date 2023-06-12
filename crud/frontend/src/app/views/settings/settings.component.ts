import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import {Country} from '@angular-material-extensions/select-country';

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

}
