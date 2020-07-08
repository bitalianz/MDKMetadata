import PageFields from './PageFields';

export default function PageForm6_2aOnAcceptPress(context) {

	var sMsg = PageFields.checkRequiredFields(context, "pageTestForm6_2a");

	if (sMsg) {
		context.binding.sMsg = sMsg;
		return context.executeAction('/SAPAssetManager/Actions/vanti/MandatoryFieldMessage.action');
	} else {

		sMsg = PageFields.validateTextFields(context, "");

		if (sMsg) {
			context.binding.sMsg = sMsg;
			return context.executeAction('/SAPAssetManager/Actions/vanti/MandatoryFieldMessage.action');
		} else {
			
			var oProxy = context.getPageProxy();
			
			oProxy.binding.oPages.pageTestForm6_2a.lstPickEquipo.descriptionValue = oProxy.getControl("frmContPage62a").getControl("lstPickEquipo").getValue()[0].DisplayValue;
			oProxy.binding.oPages.pageTestForm6_2a.lstPickEstado.descriptionValue = oProxy.getControl("frmContPage62a").getControl("lstPickEstado").getValue()[0].DisplayValue;
			
			//Agregar Recinto
			return context.executeAction('/SAPAssetManager/Actions/vanti/ZZHistEquipos_Create.action');
		
		}
	}
}