import PageFields from './PageFields';
export default function PageForm1OnNextPress(context) {

	var sMsg = PageFields.checkRequiredFields(context, "pageTestForm1");

	if (sMsg) {
		context.binding.sMsg = sMsg;
		return context.executeAction('/SAPAssetManager/Actions/vanti/MandatoryFieldMessage.action');
	} else {
		let oAnomalias = context.getPageProxy().binding.oPages.pageTestForm1.lstPickAnomalias.value;
		if(typeof oAnomalias === 'string'){
			context.getPageProxy().binding.oPages.pageTestForm1.lstPickAnomalias.value = []
			context.getPageProxy().binding.oPages.pageTestForm1.lstPickAnomalias.value.push(oAnomalias);
			oAnomalias = context.getPageProxy().binding.oPages.pageTestForm1.lstPickAnomalias.value;
		}

		let fieldValue = context.getPageProxy().getControl("frmContResODS").getControl("swInstalacion").getValue();

		if (fieldValue) {
			return context.executeAction('/SAPAssetManager/Actions/vanti/Open_form_2.action');
		} else {
			PageFields.goNextActionPage(context, "RESULTADO_ODS");
		}
	}
}