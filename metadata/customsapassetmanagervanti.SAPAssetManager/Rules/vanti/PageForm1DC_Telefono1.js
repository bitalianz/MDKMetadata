export default function PageForm1DC_Telefono1(context) {
	return context.read('/SAPAssetManager/Services/AssetManager.service', "ZZCamposAdicionales('" + context.getPageProxy().binding.OrderId + "')", [], '$select=Telefono1').then(function(result) {
        return result.getItem(0).Telefono1;
    });
}