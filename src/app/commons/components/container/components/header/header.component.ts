import { Component, inject, OnInit } from '@angular/core';
import { PATHS_AUTH_PAGES } from 'src/app/commons/config/path-pages';
import { ChannelHeaderService } from 'src/app/commons/services/local/channel-header.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	readonly loginPath = PATHS_AUTH_PAGES.loginPage.withSlash;
	readonly registerPath = PATHS_AUTH_PAGES.registerPage.withSlash;
	private _channelHeaderService = inject(ChannelHeaderService);

	private _subscriptionHeaderChannel() {
		this._channelHeaderService.channelHeader$.subscribe((show) => {
			console.log('--_subscriptionHeaderChannel--', show);
		});
	}

	ngOnInit(): void {
		this._subscriptionHeaderChannel();
	}
}
