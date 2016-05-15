System.register(['@angular/core', '@angular/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var RepoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            RepoService = (function () {
                function RepoService(http) {
                    this.http = http;
                }
                RepoService.prototype.loadRepoByUser = function (user) {
                    var urlRepos = 'https://api.github.com/users/johnpapa/repos';
                    return this.http.get(urlRepos)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                RepoService.prototype.loadBranch = function (user, repo) {
                    user = "johnpapa";
                    var urlRepos = 'https://api.github.com/repos/' + user + '/' + repo + '/branches';
                    return this.http.get(urlRepos)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                RepoService.prototype.extractData = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    return res.json() || {};
                };
                RepoService.prototype.handleError = function (error) {
                    var errMsg = error.message || 'Server error';
                    console.error(errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                RepoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RepoService);
                return RepoService;
            }());
            exports_1("RepoService", RepoService);
        }
    }
});
