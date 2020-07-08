import PageFields from './PageFields';

export default function PageForm6OnAddPress(context) {

	var oBinding = context.getPageProxy().binding;

	var sMsg = PageFields.checkRequiredFields(context, "pageTestForm6");

	if (sMsg) {
		oBinding.sMsg = sMsg;
		return context.executeAction('/SAPAssetManager/Actions/vanti/MandatoryFieldMessage.action');
	} else {

		sMsg = PageFields.validateTextFields(context, "");

		if (sMsg) {
			oBinding.sMsg = sMsg;
			return context.executeAction('/SAPAssetManager/Actions/vanti/MandatoryFieldMessage.action');
		} else {

			PageFields.validateDuplicateRecinto(context, context.getPageProxy().getControl("frmContForm6").getControl("lstPickRecinto").getValue()[
				0].DisplayValue, function (sMsg) {

				if (sMsg) {
					oBinding.sMsg = sMsg;
					return context.executeAction('/SAPAssetManager/Actions/vanti/MandatoryFieldMessage.action');
				} else {

					oBinding.oPages.pageTestForm6.lstPickTipoRecinto.descriptionValue = context.getPageProxy().getControl(
						"frmContForm6").getControl("lstPickTipoRecinto").getValue()[0].DisplayValue;

					return context.executeAction('/SAPAssetManager/Actions/vanti/Open_Form_6_1.action');

				}

			});

		}
	}
}