import { NgModule } from '@angular/core';

import { Proj1SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [Proj1SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [Proj1SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Proj1SharedCommonModule {}
