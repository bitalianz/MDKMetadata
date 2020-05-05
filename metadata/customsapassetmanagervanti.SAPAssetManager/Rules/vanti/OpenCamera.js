export default function OpenCamera(context) {
	
	var sOrderId = context.getPageProxy().binding.OrderId;
	
	return context.read('/SAPAssetManager/Services/AssetManager.service', "MyWorkOrderHeaders('" + sOrderId + "')", [], '').then(function(result) {
        
        context.setActionBinding(result.getItem(0));
        return context.executeAction('/SAPAssetManager/Actions/Documents/DocumentsBDSListNav.action');
        
    });
	
}