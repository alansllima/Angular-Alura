import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ap-vmessage',
    templateUrl: './vmessage.component.html',
    
})
export class VMessageComponent implements OnInit {

   @Input() text : string =''
    constructor() { }

    ngOnInit(): void { 

        
    }
}
