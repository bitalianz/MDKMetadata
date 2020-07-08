export default function PageForm1DC_TelefonoBP(context) {
	return context.read('/SAPAssetManager/Services/AssetManager.service', "ZZCamposAdicionales('" + context.getPageProxy().binding.OrderId + "')", [], '$select=TelefonoBP').then(function(result) {
        return result.getItem(0).TelefonoBP;
    });
}
