export default function PageForm4PresionContratada(context) {

	return context.read("/SAPAssetManager/Services/AssetManager.service", 
	"ZZCamposAdicionales('" + context.getPageProxy().binding.OrderId + "')", [], "").then(function (result) {

		if (result) {

			var sPressCont = result.getItem(0).PresionContratada;

			return "Presión contratada (bar) " + sPressCont;

		}
	});

}