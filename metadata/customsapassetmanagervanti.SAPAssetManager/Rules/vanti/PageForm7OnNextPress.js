import PageFields from './PageFields';
export default function PageForm7OnNextPress(context) {

	var sMsg = PageFields.checkRequiredFields(context, "pageTestForm7a");
	let p = Promise.resolve();

	if (sMsg) {
		context.binding.sMsg = sMsg;
		return context.executeAction('/SAPAssetManager/Actions/vanti/MandatoryFieldMessage.action');
	} else {
		let oBinding = context.getPageProxy().binding;
		let oPage = oBinding.oPages.pageTestForm7a;
		let oPage2 = oPage;

		let oPrecinto = {
			ReadLink: "",
			OrderId: oBinding.OrderId,
			IsInd: false,
			Indice: '',
			SerieActual: '',
			EstadoActual: '',
			SerieNuevo: '',
			EstadoNuevo: '',
			Caracteristica: '',
			CaractEstado: ''
		};
		let oPrecintoClear = oPrecinto;

		Object.keys(oPage).forEach(oField => {
			p = p.then(() => new Promise(resolve => {

				oPrecinto = oPrecintoClear;

				if ((oPage[oField].idx === 3 && oPage[oField].value) || (oPage[oField].idx === 2 && oPage[oField].updated)) {
					Object.keys(oPage2).forEach(oField2 => {
						if (oPage2[oField2].grupo === oPage[oField].grupo) {

							if (oPage2[oField2].idx === 1) {

								oPrecinto.IsInd = oPage2[oField2].IsOnlyInd ? 'X' : '';
								oPrecinto.Indice = oPage2[oField2].Indice;
								oPrecinto.SerieActual = oPage2[oField2].value ? oPage2[oField2].value : "";
								oPrecinto.Caracteristica = oPage2[oField2].CaractName ? oPage2[oField2].CaractName : "";
								oPrecinto.ReadLink = "ZZPrecintos(OrderId='" + oPrecinto.OrderId + "',IsInd='" + oPrecinto.IsInd + "',Indice='" + oPrecinto.Indice +
									"',SerieActual='" + oPrecinto.SerieActual + "')";
							}

							if (oPage2[oField2].idx === 2) {
								oPrecinto.EstadoActual = oPage2[oField2].value ? oPage2[oField2].value : "";
								oPrecinto.CaractEstado = oPage2[oField2].CaractName ? oPage2[oField2].CaractName : "";

								/*if (oPage[oField].updated) {
								 	var bStateUpdated = oPage[oField].updated;
								}*/

							}

							if (oPage2[oField2].idx === 3) {
								oPrecinto.SerieNuevo = oPage2[oField2].value ? oPage2[oField2].value : "";
								if (oPrecinto.SerieNuevo) {
									oPrecinto.EstadoNuevo = '01';
								}
								//bStateUpdated = false;

							}

						}
					});

					//oPrecinto.SerieNuevo = oPage[oField].value;
					//oPrecinto.EstadoNuevo = '01';

					context.getPageProxy().setActionBinding(oPrecinto);
					context.executeAction('/SAPAssetManager/Actions/vanti/ZZPrecintos_Update.action').then(() => {
						resolve();
					});
				} else {
					resolve();
				}
			}));
		})

		p = p.then(() => new Promise(resolve => {

			var oBinding = context.getPageProxy().binding;

			if (oBinding) { 
				oBinding.initialized = true;
			}

			context.getPageProxy().setActionBinding(context.getPageProxy().binding);
			PageFields.goNextActionPage(context, "PRECINTOS");
			resolve();
		}));
	}
}