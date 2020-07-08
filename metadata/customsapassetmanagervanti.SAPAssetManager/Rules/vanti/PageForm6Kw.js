export default function PageForm6Kw(context) {

	var oBinding = context.getPageProxy().binding;

	context.read('/SAPAssetManager/Services/AssetManager.service', "ZZHistEquipos", [],
		"$filter=OrderId eq '" + oBinding.OrderId + "' and ConsecRecinto eq '" + oBinding.Consec + "'").then(function (result) {

		var iKw = 0;

		for (var i = 0; i < result.length; i++) {
			iKw = iKw + parseFloat(result.getItem(i).Kw);
		}

		oBinding.oPages.pageTestForm6.txtCargaRecintoKW.value = iKw.toString();

		let oControl = context.getPageProxy().getControl("frmContForm6").getControl("txtCargaRecintoKW");
		oControl.setValue(iKw.toString());

	});

}