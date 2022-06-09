import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouteReuseStrategy,
  DetachedRouteHandle,
} from "@angular/router";

@Injectable()
export class CustomReuseStrategyService implements RouteReuseStrategy {
  handlers: { [key: string]: DetachedRouteHandle } = {};

  shouldDetach(route: ActivatedRouteSnapshot) {
    console.log('shouldDetach: "%s"', route.url.join(""));
    return true;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle) {
    console.log('store: "%s"', route.url.join(""));
    this.handlers[route.routeConfig.path] = handle;
  }

  shouldAttach(route: ActivatedRouteSnapshot) {
    console.log('shouldAttach: "%s"', route.url.join(""));
    return !!route.routeConfig && !!this.handlers[route.routeConfig.path];
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    console.log('retrieve: "%s"', route.url.join(""));
    if (!route.routeConfig) return null;
    return this.handlers[route.routeConfig.path];
  }

  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ) {
    console.log(
      'shouldReuseRoute: "%s" => "%s"',
      future.url.join(""),
      curr.url.join("")
    );
    return future.routeConfig === curr.routeConfig;
  }
}
