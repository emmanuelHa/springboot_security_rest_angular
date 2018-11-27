import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Proj1SharedModule } from 'app/shared';
import {
    EmployeeComponent,
    EmployeeDetailComponent,
    EmployeeUpdateComponent,
    EmployeeDeletePopupComponent,
    EmployeeDeleteDialogComponent,
    employeeRoute,
    employeePopupRoute
} from './';

const ENTITY_STATES = [...employeeRoute, ...employeePopupRoute];

@NgModule({
    imports: [Proj1SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        EmployeeComponent,
        EmployeeDetailComponent,
        EmployeeUpdateComponent,
        EmployeeDeleteDialogComponent,
        EmployeeDeletePopupComponent
    ],
    entryComponents: [EmployeeComponent, EmployeeUpdateComponent, EmployeeDeleteDialogComponent, EmployeeDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Proj1EmployeeModule {}
