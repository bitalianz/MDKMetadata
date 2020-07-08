import PageFields from './PageFields';

export default function PageForm6OnAcceptPress(context) {

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

					//Si no se ha agregado equipos al recinto muestra error, de lo contrario crea el recinto
					return context.read('/SAPAssetManager/Services/AssetManager.service', "ZZHistEquipos", [],
						"$filter=OrderId eq '" + oBinding.OrderId + "' and ConsecRecinto eq '" + oBinding.Consec + "'&$orderby=ConsecEquipo desc").then(
						function (result) {

							if (result.length > 0) {

								oBinding.oPages.pageTestForm6.lstPickTipoRecinto.descriptionValue = context.getPageProxy().getControl(
									"frmContForm6").getControl("lstPickTipoRecinto").getValue()[0].DisplayValue;

								//Agregar Recinto
								return context.executeAction('/SAPAssetManager/Actions/vanti/ZZHistRecintos_Create.action');

							} else {

								oBinding.sMsg = "Se debe agregar por lo menos un Equipo";
								return context.executeAction('/SAPAssetManager/Actions/vanti/MandatoryFieldMessage.action');

							}
						});
				}
			});
		}
	}
}