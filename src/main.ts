import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './book-tracker-app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));