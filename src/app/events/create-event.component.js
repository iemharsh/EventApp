"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var event_service_1 = require("./shared/event.service");
var CreateEventComponent = (function () {
    function CreateEventComponent(route, eventService) {
        this.route = route;
        this.eventService = eventService;
        this.isDirty = true;
    }
    CreateEventComponent.prototype.cancel = function () {
        this.route.navigate(['events']);
    };
    CreateEventComponent.prototype.saveEvent = function (formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.route.navigate(['events']);
    };
    return CreateEventComponent;
}());
CreateEventComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/events/create-event.component.html',
        styles: ["\n    em {\n      float: right;\n      color: #E05C65;\n      padding-left: 10px;\n    }\n\n    .error input {\n      background-color: #E3C3C5;\n    }\n\n    .error ::-webkit-input-placeholder {\n      color: #999;\n    }\n\n    .error ::-moz-placeholder {\n      color: #999;\n    }\n\n    .error :-moz-placeholder {\n      color: #999;\n    }\n\n    .error :-ms-input-placeholder {\n      color: #999;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [router_1.Router, event_service_1.EventService])
], CreateEventComponent);
exports.CreateEventComponent = CreateEventComponent;
//# sourceMappingURL=create-event.component.js.map