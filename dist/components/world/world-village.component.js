System.register(['@angular/core', '@angular/router-deprecated', 'angular2-jwt'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, router_deprecated_2, angular2_jwt_1;
    var WorldVillageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
                router_deprecated_2 = router_deprecated_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }],
        execute: function() {
            WorldVillageComponent = (function () {
                function WorldVillageComponent() {
                    var _this = this;
                    this.getWorldRadius = function () {
                        return _this.diameter / 2 + 20;
                    };
                }
                WorldVillageComponent.prototype.ngOnInit = function () {
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], WorldVillageComponent.prototype, "i", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], WorldVillageComponent.prototype, "x", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], WorldVillageComponent.prototype, "y", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], WorldVillageComponent.prototype, "diameter", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], WorldVillageComponent.prototype, "repo", void 0);
                WorldVillageComponent = __decorate([
                    core_1.Component({
                        selector: 'world-village',
                        templateUrl: './src/components/world/world-village.component.html',
                        styleUrls: ['./src/components/world/world-village.component.css'],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                    }),
                    router_deprecated_2.CanActivate(function () { return angular2_jwt_1.tokenNotExpired(); }), 
                    __metadata('design:paramtypes', [])
                ], WorldVillageComponent);
                return WorldVillageComponent;
            }());
            exports_1("WorldVillageComponent", WorldVillageComponent);
        }
    }
});
