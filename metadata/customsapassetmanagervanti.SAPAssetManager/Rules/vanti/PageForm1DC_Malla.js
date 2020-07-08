export default function PageForm1DC_Malla(context) {
	return context.read('/SAPAssetManager/Services/AssetManager.service', "ZZCamposAdicionales('" + context.getPageProxy().binding.OrderId + "')", [], '$select=Malla').then(function(result) {
        return result.getItem(0).Malla;
    });
}
