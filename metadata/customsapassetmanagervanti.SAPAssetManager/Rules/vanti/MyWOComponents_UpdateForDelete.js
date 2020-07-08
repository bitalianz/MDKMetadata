import SP from './SalirdePaginas';

export default function MyWOComponents_UpdateForDelete(context) {

	var pUpdate = Promise.resolve();
	
	return context.read('/SAPAssetManager/Services/AssetManager.service', "MyWorkOrderComponents", [],
		"$filter=OrderId  eq '" + context.getPageProxy().binding.OrderId + "'").then(function (result) {
		
		var oActBnd = {
						"ItemNumber": "",
						"OperationNo": "",
						"OrderId": "",
						"RecordType": "",
						"TextTypeDesc": "" };
		
		result._array.forEach(item => {

			pUpdate = pUpdate.then(() => new Promise(resolve => {
				
				if (item.ItemCategory === "N") {
					
					oActBnd = {};
					
					if (item.WithdrawnQuantity === 0 || item.WithdrawnQuantity === "0") {
						
						oActBnd.ItemNumber = item.ItemNumber;
						oActBnd.OperationNo = item.OperationNo;
						oActBnd.OrderId = item.OrderId;
						oActBnd.RecordType = item.RecordType;
						oActBnd.TextTypeDesc = "DELETECOMPONENT";
						
						context.getPageProxy().setActionBinding(oActBnd);
						context.executeAction("/SAPAssetManager/Actions/vanti/MyWOComponent_Update.action").then(() => {
							resolve();
						});

					}else{
						resolve();
					}
				}else{
					resolve();
				}

			}));

		});
		
		pUpdate = pUpdate.then(() => new Promise(resolve => {
			SP(context);
			resolve();
		}));
		
	});

}