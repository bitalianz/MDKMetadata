import Logger from '../Log/Logger';
export default function PageForm1ZAnomalias_QueryOptions(context) {

	try {
		let formCellContainer = context.getPageProxy().getControl('frmContResODS');

		let cmbStatus = formCellContainer.getControl('lstPickStatus');
		let cmbAnomalias = formCellContainer.getControl('lstPickAnomalias');

		var anomSpecifier = cmbAnomalias.getTargetSpecifier();
		anomSpecifier.setQueryOptions("$filter=OrderId eq '" + context.getPageProxy().binding.OrderId + "' and StatusUsr eq '" + cmbStatus.getValue()[0].ReturnValue + 
		"'&$orderby=Descripcion&$select=Codigo, Descripcion");
			
		cmbAnomalias.setTargetSpecifier(anomSpecifier);
		cmbAnomalias.redraw();
		
	} catch (err) {
		/**Implementing our Logger class*/
		Logger.error(context.getPageProxy().getGlobalDefinition('/SAPAssetManager/Globals/Logs/CategoryWorkOrders.global').getValue(),
			`updateOrderType Error: ${err}`);
	}

}