/// <reference path="../../../typings/tsd.d.ts" />

namespace angularLoad {
  export interface IAngularLoadService{
    loadScript: (src: string) => angular.IPromise<any>;
    loadCSS: (src: string) => angular.IPromise<any>;
  }
}