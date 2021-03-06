import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent
}
from './events/index';


import { EventsAppComponent }  from './event-app.component';
import {NavBarComponent} from "./nav/navbar.component";
import {ToastrService} from "./common/toastr.service";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {Error404Component} from "./errors/404.component";
import {AuthService} from "./user/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes) ],
  declarations: [ EventsAppComponent, NavBarComponent, EventsListComponent, EventThumbnailComponent, EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent
  ],

  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    EventListResolver,
    AuthService
  ],
  bootstrap:    [ EventsAppComponent ]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty) {
    return window.confirm('Event is not Saved. Do you really want to cancel');
  }
  return true;
}
