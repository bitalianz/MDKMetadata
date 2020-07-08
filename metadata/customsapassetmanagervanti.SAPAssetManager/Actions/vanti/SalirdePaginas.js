export default function SalirdePaginas(context) {

	var sCurrPage = context.getPageProxy().currentPage.id;

	if (sCurrPage === "PartIssueCreateUpdatePage") {
		return context.executeAction('/SAPAssetManager/Actions/Page/ClosePage.action');
	} else {

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
	}
}