import { NgModule, LOCALE_ID } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import locale from '@angular/common/locales/en';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'app/core/in-memory-data.service';
import { BUILD_PROFILE } from 'app/app.constants';

@NgModule({
    imports: [
        HttpClientModule,
        BUILD_PROFILE === 'standalone'
            ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 2000, passThruUnknownUrl: true })
            : []
    ],
    exports: [],
    declarations: [],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
        DatePipe
    ]
})
export class Proj1CoreModule {
    constructor() {
        registerLocaleData(locale);
    }
}
