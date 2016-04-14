import { bootstrap } from 'angular2/platform/browser';
import { App } from './app/app';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import {enableProdMode} from 'angular2/core';

enableProdMode();

bootstrap(App, [HTTP_PROVIDERS]).catch(err => console.error(err));