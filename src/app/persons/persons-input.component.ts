import { Component, Output, EventEmitter } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
    selector: 'app-persons-input',
    templateUrl: './persons-input.component.html',
    styleUrls:["./persons-input.component.css"]
})

export class PersonsInputComponent {
    enterPersonName = '';
//   @Output() personCreate = new EventEmitter<string>();
    constructor(private personsService: PersonsService){};  
    onCreatePerson(){
        console.log(`${this.enterPersonName} was created`)
        // this.personsService.emit(this.enterPersonName)
        this.personsService.addPerson(this.enterPersonName)
        this.enterPersonName = '';
    }
}
// output()decorator  is used for event binding or it tells the angular dat d data will come from the dom
// output decorator is also used infront of an eventEmitter