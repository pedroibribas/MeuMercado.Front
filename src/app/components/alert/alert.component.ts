import { Component, OnDestroy, OnInit } from "@angular/core";
import { AlertService } from "./alert.service";
import { Alert, AlertType } from "./alert.model";
import { NavigationStart, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  providers: [AlertService]
})
export class AlertComponent implements OnInit, OnDestroy {
  public alerts: Alert[] = [];
  private alertSubscription!: Subscription;
  private routeSubscription!: Subscription;

  constructor(
    private alertService: AlertService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.alertSubscription = this.handleAlert();
    this.routeSubscription = this.clearAlertOnNavigation();
  }

  ngOnDestroy(): void {
    this.alertSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  private handleAlert(): Subscription {
    return this.alertService.onAlert()
      .subscribe((alert) => {
        if (!alert.message)
          return;

        this.alerts.push(alert);

        setTimeout(() =>
          this.removeAlert(alert), 3000);
      });
  }

  private clearAlertOnNavigation(): Subscription {
    return this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart)
          this.alertService.clear();
      });
  }

  public removeAlert(alert: Alert) {
    if (!this.alerts.includes(alert))
      return;

    this.alerts = this.alerts.filter((a) =>
      a !== alert);
  }

  public styleClasses(alert: Alert) {
    if (!alert)
      return;

    const classes = ['alert'];

    const classByAlertType = {
      [AlertType.Success]: 'alert-success',
      [AlertType.Error]: 'alert-danger',
      [AlertType.Info]: 'alert-info',
      [AlertType.Warning]: 'alert-warning',
    }

    if (alert.type !== undefined) {
      classes.push(
        classByAlertType[alert.type]
      );
    }

    return classes.join(' ');
  }
}