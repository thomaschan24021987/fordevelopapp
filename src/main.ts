import { platformNativeScriptDynamic } from '@nativescript/angular';
import { AppModule } from './app/app.module';
import { runNativeScriptAngularApp } from '@nativescript/angular';

runNativeScriptAngularApp({
    appModuleBootstrap: () => platformNativeScriptDynamic().bootstrapModule(AppModule),
});