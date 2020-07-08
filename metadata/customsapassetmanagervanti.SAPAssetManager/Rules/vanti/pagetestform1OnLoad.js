import loc from './GetLocation';

export default function pagetestform1OnLoad (context) {
	
	var oBinding = context.getPageProxy().binding;
	
	oBinding.oPages = oBinding.oPagesClear;
	
	loc(context);
	
	//Guarda los datos de campos adicionales
	context.read('/SAPAssetManager/Services/AssetManager.service', "ZZCamposAdicionales('" + context.getPageProxy().binding.OrderId + "')", [], '$select=*').then(function(result) {
        var oBinding = context.getPageProxy().binding;
        oBinding.saveCamposAdicionales = result.getItem(0);
    });
	
	
}
