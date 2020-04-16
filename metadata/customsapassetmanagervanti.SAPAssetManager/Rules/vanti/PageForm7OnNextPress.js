import PageFields from './PageFields';
export default function PageForm1OnNextPress(context) {

	var sMsg = PageFields.checkRequiredFields(context, "pageTestForm7a");

	if (sMsg) {

		context.binding.sMsg = sMsg;
		return context.executeAction('/SAPAssetManager/Actions/vanti/MandatoryFieldMessage.action');

	} else {

			PageFields.goNextActionPage(context, "PRECINTOS");
		
	}

}