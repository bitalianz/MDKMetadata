import pFields from './PageFields';

export default function ValidateFields(context) {
	
	let sControlName = context.getName();
	
	let sMsg = pFields.validateTextFields(context, sControlName);
	
	if(sMsg){
		context.binding.sMsg = sMsg;
		return context.executeAction('/SAPAssetManager/Actions/vanti/MandatoryFieldMessage.action');
	}
	   
}