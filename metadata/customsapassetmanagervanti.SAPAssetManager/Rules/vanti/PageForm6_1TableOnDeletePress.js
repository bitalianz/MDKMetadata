export default function PageForm6_1TableOnDeletePress(context) {
	
	var oBinding = context.getPageProxy().binding;
	
	oBinding.ConsecEquipo = context.getPageProxy().getActionBinding().ConsecEquipo;
	
	return context.executeAction('/SAPAssetManager/Actions/vanti/OnDeleteEquipoPressed.action');
	
}