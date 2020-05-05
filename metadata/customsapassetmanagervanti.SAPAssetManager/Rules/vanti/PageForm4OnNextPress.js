import PageFields from './PageFields';
export default function PageForm4OnNextPress(context) {

	var sMsg = PageFields.checkRequiredFields(context, "pageTestForm4");

	if (sMsg) {
		context.binding.sMsg = sMsg;
		return context.executeAction('/SAPAssetManager/Actions/vanti/MandatoryFieldMessage.action');
	} else {
		
		let oDefectos = context.getPageProxy().binding.oPages.pageTestForm4.lstPickDefectos.value;
		if(typeof oDefectos === 'string'){
			context.getPageProxy().binding.oPages.pageTestForm4.lstPickDefectos.value = []
			context.getPageProxy().binding.oPages.pageTestForm4.lstPickDefectos.value.push(oDefectos);
			oDefectos = context.getPageProxy().binding.oPages.pageTestForm4.lstPickDefectos.value;
		}
		
		PageFields.goNextActionPage(context, "INSP_CE_MEDICION");
	}
}