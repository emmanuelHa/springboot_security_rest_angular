import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Proj1SharedModule } from 'app/shared';
import {
    JobHistoryComponent,
    JobHistoryDetailComponent,
    JobHistoryUpdateComponent,
    JobHistoryDeletePopupComponent,
    JobHistoryDeleteDialogComponent,
    jobHistoryRoute,
    jobHistoryPopupRoute
} from './';

const ENTITY_STATES = [...jobHistoryRoute, ...jobHistoryPopupRoute];

@NgModule({
    imports: [Proj1SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        JobHistoryComponent,
        JobHistoryDetailComponent,
        JobHistoryUpdateComponent,
        JobHistoryDeleteDialogComponent,
        JobHistoryDeletePopupComponent
    ],
    entryComponents: [JobHistoryComponent, JobHistoryUpdateComponent, JobHistoryDeleteDialogComponent, JobHistoryDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Proj1JobHistoryModule {}
