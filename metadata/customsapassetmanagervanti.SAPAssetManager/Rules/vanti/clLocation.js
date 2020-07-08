import * as geolocation from "nativescript-geolocation";
import {
	Accuracy
} from "tns-core-modules/ui/enums";

export default class {

	static init(context) {
		if (this._instance == null) {
			this._instance = "Location";
			this._lat = '1.0000';
			this._long = '2.0000';

			console.log("iniciando ubicación");
			this.getLocation(context);
		}
	}

	static getLocation(context) {
		let that = this;
		setTimeout(function () {
			if (!geolocation.isEnabled()) {
				// request for the user to enable it
				geolocation.enableLocationRequest();
			}
			// Get current location with high accuracy
			geolocation.getCurrentLocation({
				desiredAccuracy: Accuracy.high, //This will return the finest location available
				updateDistance: 5, //Update distance filter in meters.
				timeout: 910000 //How long to wait for a location in ms.
			}).then(function (loc) {
				if (loc) {

					that._lat = loc.longitude;
					that._long = loc.latitude;

					//Actualizar nuevo entity
					context.executeAction("/SAPAssetManager/Actions/vanti/ZZCoordenadas_create.action");

				}
			}, function (e) {
				console.log(e.message);
			});

			that.getLocation();
		}, 900000, context);
	}

	static getCurrentLocation(context,callback = "") {
		if (!geolocation.isEnabled()) {
			geolocation.enableLocationRequest();
		}

		geolocation.getCurrentLocation({
			desiredAccuracy: Accuracy.high,
			updateDistance: 5,
			timeout: 5000
		}).then(function (loc) {
			if (loc) {
				if(callback){
					callback(loc);
				}
			}
		}, function (e) {
			console.log(e.message);
		});

	}

}