export default function PageForm1DC_MotSuspension(context) {
	return context.read('/SAPAssetManager/Services/AssetManager.service', "ZZCamposAdicionales('" + context.getPageProxy().binding.OrderId + "')", [], '$select=DescMotSuspension' ).then(function(result) {
        return result.getItem(0).DescMotSuspension;
    });
}