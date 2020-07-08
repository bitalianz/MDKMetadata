export default function PageForm1DC_ContadorRTR(context) {
	return context.read('/SAPAssetManager/Services/AssetManager.service', "ZZCamposAdicionales('" + context.getPageProxy().binding.OrderId + "')", [], '$select=ContadorRTR').then(function(result) {
        return result.getItem(0).ContadorRTR;
    });
}
