import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
import { MapComponent } from './map/map.component';

const appRoutes: Routes = [
	{
		path: 'facebook-login',
		component: FacebookLoginComponent
	},
	{
		path: 'map',
		component: MapComponent
	}
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);