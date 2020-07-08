export default function ZZHistRecintosCreate_Consec(context) {
		return context.read('/SAPAssetManager/Services/AssetManager.service', "ZZHistRecintos", [],
			"$filter=OrderId eq '" + context.getPageProxy().binding.OrderId + "'&$orderby=Consec desc").then(function (result) {

			if (result.length > 0) {
				var sConsec = result.getItem(0).Consec;
				var iConsec = parseInt(sConsec);
				return (iConsec + 1).toString();
			}else{
				return "1";
			}
		});
}