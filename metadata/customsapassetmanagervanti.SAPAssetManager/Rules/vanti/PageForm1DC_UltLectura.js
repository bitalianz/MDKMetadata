export default function PageForm1DC_UltLectura(context) {
	return context.read('/SAPAssetManager/Services/AssetManager.service', "ZZCamposAdicionales('" + context.getPageProxy().binding.OrderId + "')", [], '$select=UltimaLectura').then(function(result) {
        return result.getItem(0).UltimaLectura;
    });
}