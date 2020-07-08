export default function PageForm1DC_UnidadLectura(context) {
	return context.read('/SAPAssetManager/Services/AssetManager.service', "ZZCamposAdicionales('" + context.getPageProxy().binding.OrderId + "')", [], '$select=UnidadLectura').then(function(result) {
        return result.getItem(0).UnidadLectura;
    });
}
