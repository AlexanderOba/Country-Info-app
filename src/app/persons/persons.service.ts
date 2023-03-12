import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class PersonsService{
    personsChanged = new Subject<string[]> ()

    persons = ['max', 'manuel', 'anna']; 

   constructor(private http: HttpClient){}
   
   fetchPersons(){
     this.http.get('https://restcountries.com/v3.1/all').subscribe(resData=>{
         console.log(resData)
     })  
   }
   
    addPerson(name: string){
        this.persons.push(name);
        this.personsChanged.next(this.persons);
        console.log(this.persons)
    }

    removePerson (name: string){
        this.persons = this.persons.filter(person=>{
            return person !== name
        })
        this.personsChanged.next(this.persons);
        console.log(this.persons)
    }
}


// subject library acts like an event listener that updates angular whenever there is a change to an object or array.
// we use .next when we are adding to the arrar and subscribe when we listen for a change
//services in angular acts like a middle man between component allowing datas to interact with other components