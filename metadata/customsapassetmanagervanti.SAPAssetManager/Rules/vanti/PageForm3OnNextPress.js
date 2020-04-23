import PageFields from './PageFields';
export default function PageForm3OnNextPress(context) {

	var sMsg = PageFields.checkRequiredFields(context, "pageTestForm3");

	if (sMsg) {

		context.binding.sMsg = sMsg;
		return context.executeAction('/SAPAssetManager/Actions/vanti/MandatoryFieldMessage.action');

	} else {

		PageFields.goNextActionPage(context, "IND_ODORIZACION");
		
	}

}