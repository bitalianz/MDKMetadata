import libPagesConf from './PagesConfigurationLibrary';
import PageFields from './PageFields';
import Logger from '../Log/Logger';
export default function PageForm1OnChangeStatus(context) {

	//Bindea Anomalias
	try {
		var aPages = [
			"pageTestForm1",
			"pageTestForm2",
			"pageTestForm3",
			"pageTestForm4",
			"pageTestForm6",
			"pageTestForm6_2a",
			"pageTestForm7a"
		];

		let formCellContainer = context.getPageProxy().getControl('frmContResODS');
		let cmbStatus = formCellContainer.getControl('lstPickStatus');
		let cmbAnomalias = formCellContainer.getControl('lstPickAnomalias');
		let dDate = new Date();

		var anomSpecifier = cmbAnomalias.getTargetSpecifier();
		var sStatusValue = cmbStatus.getValue()[0].ReturnValue;
		var aStatusValue = sStatusValue.split("/");

		anomSpecifier.setQueryOptions("$filter=OrderId eq '" + context.getPageProxy().binding.OrderId + "' and StatusUsr eq '" + aStatusValue[0] +
			"'");

		cmbAnomalias.setTargetSpecifier(anomSpecifier);

		//setea editables y visibles los campos segun parametrización
		var oPages = new libPagesConf();
		context.getPageProxy().binding.sUserStatus = sStatusValue;
		context.getPageProxy().binding.sUserStatusChar = aStatusValue[0];
		context.getPageProxy().binding.fInicio = dDate.getFullYear() + "-" + (dDate.getMonth() + 1).toString().padStart(2, "0") + "-" + dDate.getDate()
			.toString().padStart(2, "0");
		context.getPageProxy().binding.hInicio = dDate.getHours().toString().padStart(2, "0") + ':' + dDate.getMinutes().toString().padStart(2,
			"0") + ':' + dDate.getSeconds().toString().padStart(2, "0");
		context.getPageProxy().binding.oPages = oPages.conf;

		var p = Promise.resolve();
		//var pageFields = new PageFields();
		/*aPages.forEach(pageName => {
			p = p.then(() => new Promise(resolve => {
				PageFields.getFieldProperties(context, context.getPageProxy().binding, pageName, context.getPageProxy().binding.WOHeader.MaintenanceActivityType,
					aStatusValue[1]);
				resolve();
			}));
		});*/
		
		p = p.then(() => new Promise(resolve => {
			
			aPages.forEach(pageName => {
				PageFields.getFieldProperties(context, context.getPageProxy().binding, pageName, context.getPageProxy().binding.WOHeader.MaintenanceActivityType,
					aStatusValue[1], function(){
						resolve();	
					});
			});
		}));
		
		p = p.then(() => new Promise(resolve => {
			cmbAnomalias.redraw();

			//Setea valores de Tipo de lectura si las órdenes son de SUSPENSIÓN (DC00) O RECONEXIÓN (RC00)
			let oPage = context.getPageProxy().binding.oPages.pageTestForm1;
			let preDefLec = context.getPageProxy().getControl('frmContResODS').getControl('lstPickTipoLectura');
			let sOrderType = context.getPageProxy().binding.WOHeader.OrderType;
			
			if (preDefLec && oPage.lstPickTipoLectura.visible && oPage.lstPickTipoLectura.editable) {
				if (sOrderType === 'DC00') {
					oPage.lstPickTipoLectura.value = "1";
					preDefLec.setValue(oPage.lstPickTipoLectura.value);
				} else if (sOrderType === 'RC00') {
					oPage.lstPickTipoLectura.value = "2";
					preDefLec.setValue(oPage.lstPickTipoLectura.value);
				} else {
					oPage.lstPickTipoLectura.value = "";
					preDefLec.setValue(oPage.lstPickTipoLectura.value);
				}
			}
			
			//cmbAnomalias.redraw();
			
			resolve();
			
			/*context.read('/SAPAssetManager/Services/AssetManager.service', "MyWorkOrderHeaders('" + context.getPageProxy().binding.OrderId + "')", [],
				'$select=OrderType').then(function (result) {
				if (result.length > 0) {
					var orderType = result.getItem(0).OrderType;
					let oPage = context.getPageProxy().binding.oPages.pageTestForm1;
					//let formControl = context.getPageProxy().getControl('frmContResODS').getControl('lstPickTipoLectura');
					let preDefLec = context.getPageProxy().getControl('frmContResODS').getControl('lstPickTipoLectura');

					if (preDefLec && oPage.lstPickTipoLectura.visible && oPage.lstPickTipoLectura.editable) {
						if (orderType === 'DC00') {
							oPage.lstPickTipoLectura.value = "1";
							preDefLec.setValue(oPage.lstPickTipoLectura.value);
						} else if (orderType === 'RC00') {
							oPage.lstPickTipoLectura.value = "2";
							preDefLec.setValue(oPage.lstPickTipoLectura.value);
						} else {
							oPage.lstPickTipoLectura.value = "";
							preDefLec.setValue(oPage.lstPickTipoLectura.value);
						}
					}
					resolve();
				} else {
					resolve();
				}
			});*/
		}));

		//	}
		//Fin de setea valores para RC00 / DC00
	} catch (err) {
		/**Implementing our Logger class*/
		Logger.error(context.getPageProxy().getGlobalDefinition('/SAPAssetManager/Globals/Logs/CategoryWorkOrders.global').getValue(),
			`updateOrderType Error: ${err}`);
	}
}