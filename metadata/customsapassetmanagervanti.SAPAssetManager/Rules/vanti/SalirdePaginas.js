export default function SalirdePaginas(context) {

	var sCurrPage = context.getPageProxy().currentPage.id;
	var oBinding = context.getPageProxy().binding;

	if (sCurrPage === "PartIssueCreateUpdatePage") {
		oBinding.finished = false;
		return context.executeAction('/SAPAssetManager/Actions/Page/ClosePage.action');
	} else {
		oBinding.finished = true;

		//guardar los campos adicionales de la AUFK
		let dDate = new Date();

		context.getPageProxy().binding.hFin = dDate.getHours().toString().padStart(2, "0") + ':' + dDate.getMinutes().toString().padStart(2, "0") +
			':' + dDate.getSeconds().toString().padStart(2, "0");

		return context.executeAction('/SAPAssetManager/Actions/vanti/ZZCamposAdicionalesUpdate.action').then(() => {
			//return context.executeAction('/SAPAssetManager/Actions/SyncInitializeProgressBannerMessage.action').then(() => {
			return context.executeAction('/SAPAssetManager/Actions/Page/ClosePage.action').then(() => {
				return context.executeAction('/SAPAssetManager/Actions/Page/ClosePage.action').then(() => {
					return context.executeAction('/SAPAssetManager/Actions/Page/ClosePage.action').then(() => {
						return context.executeAction('/SAPAssetManager/Actions/Page/ClosePage.action').then(() => {
							return context.executeAction('/SAPAssetManager/Actions/Page/ClosePage.action').then(() => {
								return context.executeAction('/SAPAssetManager/Actions/Page/ClosePage.action').then(() => {
									return context.executeAction('/SAPAssetManager/Actions/Page/ClosePage.action').then(() => {
										return context.executeAction('/SAPAssetManager/Actions/Page/ClosePage.action').then(() => {
											return context.executeAction('/SAPAssetManager/Actions/Page/ClosePage.action').then(() => {
												return context.executeAction('/SAPAssetManager/Actions/Page/ClosePage.action').then(() => {
													return context.executeAction('/SAPAssetManager/Actions/Page/ClosePage.action');
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
			//});
		});
	}
}