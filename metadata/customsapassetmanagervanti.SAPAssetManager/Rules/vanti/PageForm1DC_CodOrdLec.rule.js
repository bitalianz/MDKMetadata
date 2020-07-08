export default function PageForm1DC_CodOrdLec(context) {
	return context.read('/SAPAssetManager/Services/AssetManager.service', "ZZCamposAdicionales('" + context.getPageProxy().binding.OrderId + "')", [], '$select=CodigoOrdenLectura').then(function(result) {
        return result.getItem(0).CodigoOrdenLectura;
    });
}
