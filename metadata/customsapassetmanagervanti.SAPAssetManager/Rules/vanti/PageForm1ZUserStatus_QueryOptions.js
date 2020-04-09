export default function PageForm1ZUserStatus_QueryOptions(context) {

	return context.read('/SAPAssetManager/Services/AssetManager.service', "ZZUserStatuses('" + context.getPageProxy().binding.OrderId + "')", [],
		'$select=Status,StatusProfile,UserStatusText').then(function (result) {

		let aData = [];

		if (result && result.length > 0) {

			let WOUserStatus = "";

			for (var i = 0; i < result.lenth; i++) {

				WOUserStatus = result.getItem(i);

				aData.push({
					"key": WOUserStatus.StatusProfile + "_" + WOUserStatus.UserStatus,
					"value": WOUserStatus.UserStatusText
				});

				WOUserStatus = "";

			}
		}
		return aData;

	});

}