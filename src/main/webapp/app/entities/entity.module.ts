import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Proj1RegionModule } from './region/region.module';
import { Proj1CountryModule } from './country/country.module';
import { Proj1LocationModule } from './location/location.module';
import { Proj1DepartmentModule } from './department/department.module';
import { Proj1TaskModule } from './task/task.module';
import { Proj1EmployeeModule } from './employee/employee.module';
import { Proj1JobModule } from './job/job.module';
import { Proj1JobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        Proj1RegionModule,
        Proj1CountryModule,
        Proj1LocationModule,
        Proj1DepartmentModule,
        Proj1TaskModule,
        Proj1EmployeeModule,
        Proj1JobModule,
        Proj1JobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Proj1EntityModule {}
