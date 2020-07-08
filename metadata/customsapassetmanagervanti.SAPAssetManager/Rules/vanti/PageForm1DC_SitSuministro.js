export default function PageForm1DC_SitSuministro(context) {
	return context.read('/SAPAssetManager/Services/AssetManager.service', "ZZCamposAdicionales('" + context.getPageProxy().binding.OrderId + "')", [], '$select=DescSitSuministro' ).then(function(result) {
        return result.getItem(0).DescSitSuministro;
    });
}