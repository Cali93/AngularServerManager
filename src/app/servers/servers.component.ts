import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations'

@Component({
  // selector: '[app-servers]', by attribute
  // selector: '.app-servers', by class
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  animations: [

    trigger('serving', [
      transition('* => *', [
        query(':enter', style({opacity:0}), {optional:true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity:0, transform:'translateY(-75%)', offset:0}),
            style({opacity:.5, transform:'translateY(35px)', offset:0.3}),
            style({opacity:1, transform:'translateY(0)', offset:1}),
          ]))
        ]),{optional:true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity:1, transform:'translateY(0)', offset:0}),
            style({opacity:.5, transform:'translateY(35px)', offset:0.3}),
            style({opacity:0, transform:'translateY(-75%)', offset:1}),
          ]))
        ]),{optional:true})
      ])
    ])

  ]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server Creation';
  serverName = 'Test server';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2']
  constructor() {
    setTimeout( ()=> {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created ! Name is ' + this.serverName;
  }

  onUpdateServerName(event:any){
   this.serverName = (<HTMLInputElement>event.target).value;
  }

  removeItem(i){
    this.servers.splice(i, 1)
  }

}
