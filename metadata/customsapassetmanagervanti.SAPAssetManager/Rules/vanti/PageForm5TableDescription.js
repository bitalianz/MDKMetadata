export default function PageForm5TableDescription(context) {

	var oBinding = context.binding;

	return context.read('/SAPAssetManager/Services/AssetManager.service', "ZZHistEquipos", [],
		"$filter=OrderId eq '" + oBinding.OrderId + "' and ConsecRecinto eq '" + oBinding.Consec + "'").then(function (result) {

		return "Nº Equipo " + result.length;

	});

}