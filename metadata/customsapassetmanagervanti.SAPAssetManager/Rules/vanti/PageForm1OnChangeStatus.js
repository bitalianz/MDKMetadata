import libPagesConf from './PagesConfigurationLibrary';
import PageFields from './PageFields';
import Logger from '../Log/Logger';
export default function PageForm1OnChangeStatus(context) {

//Bindea Anomalias
	try {
		var aPages = [
			"pageTestForm1", 
			"pageTestForm2",
			"pageTestForm3",
			"pageTestForm4",
			"pageTestForm7a"
		];

		let formCellContainer = context.getPageProxy().getControl('frmContResODS');
		let cmbStatus = formCellContainer.getControl('lstPickStatus');
		let cmbAnomalias = formCellContainer.getControl('lstPickAnomalias');
		let dDate = new Date();
		
		var anomSpecifier = cmbAnomalias.getTargetSpecifier();
		var sStatusValue = cmbStatus.getValue()[0].ReturnValue;
		var aStatusValue = sStatusValue.split("/");
		
		anomSpecifier.setQueryOptions("$filter=OrderId eq '" + context.getPageProxy().binding.OrderId + "' and StatusUsr eq '" + aStatusValue[0] + "'");
			
		cmbAnomalias.setTargetSpecifier(anomSpecifier);
	
		//setea editables y visibles los campos segun parametrización
		var oPages = new libPagesConf();
		context.getPageProxy().binding.sUserStatus = sStatusValue;
		context.getPageProxy().binding.sUserStatusChar = aStatusValue[0];
		context.getPageProxy().binding.fInicio = dDate.getFullYear() + "-" + ( dDate.getMonth() + 1 ).toString().padStart(2, "0") + "-" + dDate.getDate().toString().padStart(2, "0");
		context.getPageProxy().binding.hInicio = dDate.getHours().toString().padStart(2, "0") + ':' + dDate.getMinutes().toString().padStart(2, "0") + ':' + dDate.getSeconds().toString().padStart(2, "0");
        context.getPageProxy().binding.oPages = oPages.conf;
            
		//var pageFields = new PageFields();
		aPages.forEach(pageName => {
			PageFields.getFieldProperties(context, context.getPageProxy().binding, pageName, context.getPageProxy().binding.WOHeader.MaintenanceActivityType , aStatusValue[1]);
		});

		cmbAnomalias.redraw();
	} catch (err) {
		/**Implementing our Logger class*/
		Logger.error(context.getPageProxy().getGlobalDefinition('/SAPAssetManager/Globals/Logs/CategoryWorkOrders.global').getValue(),
			`updateOrderType Error: ${err}`);
	}
}