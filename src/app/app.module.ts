import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent }  from './event-app.component';
import {NavBarComponent} from "./nav/navbar.component";
import {EventsListComponent} from "./events/events-list.component";
import {EventThumbnailComponent} from "./events/event-thumbnail.component";
import {EventService} from "./shared/event.service";
import {ToastrService} from "./common/toastr.service";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ EventsAppComponent, NavBarComponent, EventsListComponent, EventThumbnailComponent],

  providers: [EventService, ToastrService],
  bootstrap:    [ EventsAppComponent ]
})
export class AppModule { }
