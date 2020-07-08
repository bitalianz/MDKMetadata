export default function PageForm1DC_DescTipoCorte(context) {
	return context.read('/SAPAssetManager/Services/AssetManager.service', "ZZCamposAdicionales('" + context.getPageProxy().binding.OrderId + "')", [], '$select=DescTipoCorte' ).then(function(result) {
        return result.getItem(0).DescTipoCorte;
    });
}