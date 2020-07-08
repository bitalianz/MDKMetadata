export default function OnCancelOrderTreatment(context) {

	var oBinding = context.getPageProxy().binding;

	//Cancela la información recolectada de recintos y equipos
	var oActBnd = {
		"OrderId": oBinding.OrderId,
		"ValuePartR": "",
		"ValuePartE": ""
	};

	context.getPageProxy().setActionBinding(oActBnd);

	context.executeAction("/SAPAssetManager/Actions/vanti/ZZRecEquipos_Update.action").then(() => { 
		var oPageProxy = context.getPageProxy();
		oPageProxy.setActionBinding(oBinding);
	});
	/*context.executeAction("/SAPAssetManager/Actions/vanti/ZZRecEquipos_Update.action").then(() => {

		var oPageProxy = context.getPageProxy();
		oPageProxy.setActionBinding(oBinding.saveCamposAdicionales);
		context.executeAction('/SAPAssetManager/Actions/vanti/ZZCamposAdicionalesUpdateClear.action').then(() => {
			oPageProxy.setActionBinding(oBinding);
		});
 
	});*/

}