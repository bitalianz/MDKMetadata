import MyWOComp_UpdDel from './MyWOComponents_UpdateForDelete';

export default function OnCompleteOrderPessedZPart(context, callback) {

	var sCallback = true;

	checkMaterialsRequiredReaded(context, "NOTIF_SERVICIOS", "N", function (sResult) {

		if (!sResult) {

			//checkMaterialInMatDocs(context, "N", function (res) {
			//	if (!res) {
					context.binding.sMsg = "Debe scanear por lo menos 1 material tipo N";
					context.executeAction('/SAPAssetManager/Actions/vanti/MandatoryFieldMessage.action');
					sCallback = false;
					callback(sCallback);
			//	}
			//});

		}

		if (sCallback) {

			checkMaterialsRequiredReaded(context, "NOTIF_MATERIALES", "L", function (sResult) {
				if (!sResult) {

					checkMaterialInMatDocs(context, "L", function (res) {

						if (!res) {
							context.binding.sMsg = "Debe scanear por lo menos 1 material tipo L";
							context.executeAction('/SAPAssetManager/Actions/vanti/MandatoryFieldMessage.action');
							sCallback = false;
							callback(sCallback);
						}else{
							MyWOComp_UpdDel(context);
							callback(true);	
						}

					});

				} else {
					MyWOComp_UpdDel(context);
					callback(true);
				}
			});
		}
	});

}

function checkMaterialInMatDocs(oContext, sMatType, callback = "") {

	try {

		return oContext.read(
			'/SAPAssetManager/Services/AssetManager.service',
			'MaterialDocItems', [],
			"$filter=sap.islocal() and OrderNumber eq '" + oContext.getPageProxy().binding.OrderId + "'").then(result => {
			if (result && result.length > 0) {

				var sCorrect = false;

				for (var i = 0; i < result.length; i++) {

					var item = result.getItem(i);

					/*if (item.ItemCategory === sMatType && parseInt(item.WithdrawnQuantity) !== 0) {
						sCorrect = true;
					}*/
					if (parseInt(item.EntryQuantity) !== 0) {
						sCorrect = true;
					}
				}

				if (callback) {
					callback(sCorrect);
				}

			}else{
				callback(false);
			} 
		});

	} catch (err) {
		return Promise.reject(err);
	}

}

function checkMaterialsRequiredReaded(oContext, sPageName, sMatType, callback = "") {

	var oBinding = oContext.getPageProxy().binding;
	var sActClas = oBinding.WOHeader.MaintenanceActivityType;
	var sOrderType = oBinding.WOHeader.OrderType;
	var aStatusValue = oBinding.sUserStatus.split("/");

	//var p = Promise.resolve();

	return oContext.read('/SAPAssetManager/Services/AssetManager.service', "ZZFormParamss" +
		"(OrderId='" + oBinding.OrderId + "',OrdesClass='" + sOrderType + "',ActivityClass='" + sActClas +
		"',UserStatus='" + aStatusValue[1] + "',CurrPage='" + sPageName + "')", [], "").then(function (result) {

		if (result) {

			var sCorrect = false;

			var oResult = result.getItem(0);

			if (oResult.NextPage) {

				return oContext.read('/SAPAssetManager/Services/AssetManager.service', "MyWorkOrderComponents", [],
					"$filter=OrderId  eq '" + oContext.getPageProxy().binding.OrderId + "'").then(function (res) {

					for (var i = 0; i < res.length; i++) {

						var item = res.getItem(i);

						if (item.ItemCategory === sMatType && parseInt(item.WithdrawnQuantity) !== 0) {
							sCorrect = true;
						}
					}

					if (callback) {
						callback(sCorrect);
					}
				});

			} else {
				if (callback) {
					callback(true);
				}
			}

		}
	});

}