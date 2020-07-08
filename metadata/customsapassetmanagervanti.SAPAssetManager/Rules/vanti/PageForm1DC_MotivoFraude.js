export default function PageForm1DC_MotivoFraude(context) {
	return context.read('/SAPAssetManager/Services/AssetManager.service', "ZZCamposAdicionales('" + context.getPageProxy().binding.OrderId + "')", [], '$select=DescMotFraude' ).then(function(result) {
        return result.getItem(0).DescMotFraude;
    });
}