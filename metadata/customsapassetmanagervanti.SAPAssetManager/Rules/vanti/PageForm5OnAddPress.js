function clearEquipos(context) {

	var oBinding = context.getPageProxy().binding;
	var pDelete = Promise.resolve();

	context.read('/SAPAssetManager/Services/AssetManager.service', "ZZHistEquipos", [],
		"$filter=OrderId eq '" + oBinding.OrderId + "' and ConsecRecinto eq '" + oBinding.Consec + "'").then(function (result) {

		if (result.length > 0) {

			result._array.forEach(item => {

				pDelete = pDelete.then(() => new Promise(resolve => {

					context.getPageProxy().binding.ConsecEquipo = item.ConsecEquipo;
					context.executeAction("/SAPAssetManager/Actions/vanti/ZZHistEquipos_Delete.action").then(() => {
						resolve();
					});

				}));

			});

			pDelete = pDelete.then(() => new Promise(resolve => {
				//let oControl = context.getPageProxy().getControl("frmContForm6").getControl("txtCargaRecintoKW");
				//oControl.setValue("0");
				context.executeAction("/SAPAssetManager/Actions/vanti/Open_form_6.action");
				resolve();
			}));

		}else{
			context.executeAction("/SAPAssetManager/Actions/vanti/Open_form_6.action");
		}

	});
}

export default function PageForm5OnAddPress(context) {

	var oBinding = context.getPageProxy().binding;

	context.read('/SAPAssetManager/Services/AssetManager.service', "ZZHistRecintos", [],
		"$filter=OrderId eq '" + context.getPageProxy().binding.OrderId + "'&$orderby=Consec desc").then(function (result) {

		var sFConsec = "";

		if (result.length > 0) {
			var sConsec = result.getItem(0).Consec;
			var iConsec = parseInt(sConsec);
			sFConsec = (iConsec + 1).toString();
		} else {
			sFConsec = "1";
		}

		oBinding.Consec = sFConsec;

		clearEquipos(context);
		
	});

}