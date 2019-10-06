import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactHomeComponent } from './contact-home/contact-home.component';


const contactRoutes: Routes = [
  {
    path: '',
    component: ContactHomeComponent,
    children: [
      {
        path: '',
        component: ContactComponent,
        children: [
          {
            path: 'list',
            component: ContactListComponent
          },
          {
            path: ':id',
            component: ContactDetailComponent
          }
        ]
      }
    ]
  },
  {
    path: 'ls',
    component: ContactListComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(contactRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule { }