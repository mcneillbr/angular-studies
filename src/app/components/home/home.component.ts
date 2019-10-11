import { Component, OnInit, AfterViewInit, Input } from "@angular/core";
import { formatDate, registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import localeBr from "@angular/common/locales/pt";
import localeEs from "@angular/common/locales/es";
import { Subject, Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, AfterViewInit {
  showDivSubject: Subject<any> = new Subject<any>();
  @Input("show") hasShow: boolean = true;
  constructor() {
    this.showDiv.subscribe(value => console.log(value));
    this.showDivSubject.next(true);
    this.hasShow = false;
  }

  ngOnInit() {
    this.showDivSubject.next(false);
    this.hasShow = true;
  }

  ngAfterViewInit() {
    setTimeout(() => this.showDivSubject.next("true"), 2000);
    setTimeout(() => this.showDivSubject.next("B"), 9000);
  }

  get showDiv(): Observable<any> {
    return this.showDivSubject.asObservable();
  }

  get dateToString(): string {
    try {
      const d = new Date();
      registerLocaleData(localeFr, "fr");
      registerLocaleData(localeBr, "br");
      registerLocaleData(localeEs, "es");
      console.log({
        br: formatDate(d, "dd/MM/yyyy", "br"),
        es: formatDate(d, "dd/MM/yyyy", "es"),
        fr: formatDate(d, "dd/MM/yyyy", "fr"),
        en: formatDate(d, "dd/MM/yyyy", "e")
      });
      return formatDate(d, "dd/MM/yyyy", "es");
    } catch (e) {
      console.error(e);
    }
    return "e";
  }
}
