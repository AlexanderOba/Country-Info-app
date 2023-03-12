import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})

export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[] = [];

  private PersonsListSubs: Subscription 

  constructor(private prsList: PersonsService) {
      // this.personList = prsList.persons
  }

  ngOnInit(): void {
    // this.personList = this.prsList.persons
    this.prsList.fetchPersons()
    this.PersonsListSubs = this.prsList.personsChanged.subscribe(persons => {
      this.personList = persons;
    })
  }

  onRemovePerson(personName: string){
    this.prsList.removePerson(personName);
  }
  
  ngOnDestroy(): void {
    this.PersonsListSubs.unsubscribe()
  }
}

//@input is a decorator from angular that u add in front of a property, it is used to tell angular
//that the property can be bound from outside that particular component
// The four types of data binding in angular is
// -Property Binding
// -event binding
// -string Interpolation
// -two way binding: allows us to get a value and still write to dat value