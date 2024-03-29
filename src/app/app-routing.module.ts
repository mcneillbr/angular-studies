import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { AboutSiteComponent } from "./components/about-site/about-site.component";
import { CountryComponent } from "./components/country/country.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { TemplateFormComponent } from './components/template-form/template-form.component';

const routes: Routes = [
  {
    path: "template-form",
    component: TemplateFormComponent,
    data: { name: "form template" }
  },
  {
    path: "about",
    component: AboutSiteComponent,
    data: { name: "angular" }
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./components/contact/contact.module").then(
        mod => mod.ContactModule
      ),
    data: { preload: true }
  },

  {
    path: "404",
    component: PageNotFoundComponent
  },

  {
    path: "open/:id",
    component: MainComponent,
    pathMatch: "prefix"
  },

  {
    path: "countries",
    component: CountryComponent
  },

  {
    path: "",
    component: MainComponent,
    pathMatch: "full"
  },

  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
