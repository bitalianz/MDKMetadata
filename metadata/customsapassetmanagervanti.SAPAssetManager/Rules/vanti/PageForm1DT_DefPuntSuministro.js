export default function PageForm1DC_DefectosPSuministro(context) {
	return context.read('/SAPAssetManager/Services/AssetManager.service', "ZZCamposAdicionales('" + context.getPageProxy().binding.OrderId + "')", [], '$select=DefectosPSuministro' ).then(function(result) {
        return result.getItem(0).DefectosPSuministro;
    });
}