export default function ZZHistEquiposCreate_ConsecEquipo(context) {
	
		var oBinding = context.getPageProxy().binding;
		
		return context.read('/SAPAssetManager/Services/AssetManager.service', "ZZHistEquipos", [],
			"$filter=OrderId eq '" + oBinding.OrderId + "'&$orderby=ConsecEquipo desc").then(function (result) {

			if (result.length > 0) {
				var sConsec = result.getItem(0).ConsecEquipo;
				var iConsec = parseInt(sConsec);
				return (iConsec + 1).toString();
			}else{
				return "1";
			}
		});
}