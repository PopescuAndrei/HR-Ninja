import { Injectable } from '@angular/core';

declare var $:any;

@Injectable()
export class NotificationService {
	
	constructor() {}

	showInfo(notificationMessage: string): void {
		$.notify({
			icon: "ti-gift",
			message: notificationMessage
		},{
			type: 'info',
			timer: 4000,
			placement: {
				from: 'top',
				align: 'right'
			}
		});
	}

	showSuccess(notificationMessage: string): void {
		$.notify({
			icon: "ti-gift",
			message: notificationMessage
		},{
			type: 'success',
			timer: 4000,
			placement: {
				from: 'top',
				align: 'right'
			}
		});
	}

	showError(notificationMessage: string): void {
		$.notify({
			icon: "ti-gift",
			message: notificationMessage
		},{
			type: 'danger',
			timer: 4000,
			placement: {
				from: 'top',
				align: 'right'
			}
		});
	}
}
