import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Proj1SharedModule } from 'app/shared';
import {
    LocationComponent,
    LocationDetailComponent,
    LocationUpdateComponent,
    LocationDeletePopupComponent,
    LocationDeleteDialogComponent,
    locationRoute,
    locationPopupRoute
} from './';

const ENTITY_STATES = [...locationRoute, ...locationPopupRoute];

@NgModule({
    imports: [Proj1SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        LocationComponent,
        LocationDetailComponent,
        LocationUpdateComponent,
        LocationDeleteDialogComponent,
        LocationDeletePopupComponent
    ],
    entryComponents: [LocationComponent, LocationUpdateComponent, LocationDeleteDialogComponent, LocationDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Proj1LocationModule {}
