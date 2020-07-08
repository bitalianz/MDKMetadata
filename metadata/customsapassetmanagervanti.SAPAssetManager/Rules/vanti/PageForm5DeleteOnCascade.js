export default function PageForm5DeleteOnCascade(context) {
	
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
		}

	});
	
}