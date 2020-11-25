import {Component, Input, Output, EventEmitter, HostListener} from '@angular/core'

@Component({
selector: 'cardlist',
templateUrl: './templates/cardlist-component.html',
})

export class cardlistcomponent {

    


    @Output() loginclick: EventEmitter<any> = new EventEmitter;


    toggle(event) {
        var id = event.target.id; 
        this.loginclick.emit(id)
     }
    
     @HostListener('click', ['$event']) 
     onClick (event : MouseEvent) {
    }

}