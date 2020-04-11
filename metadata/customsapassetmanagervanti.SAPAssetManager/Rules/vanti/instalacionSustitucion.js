export default function InstalacionSustitucion(context) {

	let fieldValue = context.evaluateTargetPath('#Page:pageTestForm1/#Control:FormCellSwitch1/#Value');

	if (fieldValue === true) {

		return context.executeAction('/SAPAssetManager/Actions/vanti/Open_form_2.action');

	} else {

		return context.executeAction('/SAPAssetManager/Actions/vanti/Open_form_3.action');

	}

}