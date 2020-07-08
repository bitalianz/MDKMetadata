export default function PartsDetailView_TipoDeMovimiento(context) {
	return context.read('/SAPAssetManager/Services/AssetManager.service', "MyWorkOrderComponents('" + context.getPageProxy().binding.OrderId + "')", [], '$select=MovementType' ).then(function(result) {
        return result.getItem(0).MovementType;
    });
}