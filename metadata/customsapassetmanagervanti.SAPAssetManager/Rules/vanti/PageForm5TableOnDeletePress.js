export default function PageForm5TableOnDeletePress(context) {
	
	var oBinding = context.getPageProxy().binding;
	
	oBinding.Consec = context.getPageProxy().getActionBinding().Consec;
	
	return context.executeAction('/SAPAssetManager/Actions/vanti/OnDeleteRecintoPressed.action');
	
}