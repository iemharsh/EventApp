import {Component, OnInit } from "@angular/core";
import {EventService} from "../shared/event.service";
import {ToastrService} from "../common/toastr.service";



@Component({
  selector: 'events-list',
  template: `
      <div class="container">
        <h1>Upcoming Angular 2 Events</h1>
        <hr />
        <div class="row">
          <div>
            <div *ngFor="let event of events" class="col-md-5">
              <event-thumbnail [event]="event" (click)="handleThumbnailClick(event.name)"></event-thumbnail>
            </div>
          </div>
        </div>
      </div>
  `
})
export class EventsListComponent implements OnInit {


  events:any[]

  constructor(private eventService: EventService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName:any) {
    this.toastr.success(eventName);
  }

}
