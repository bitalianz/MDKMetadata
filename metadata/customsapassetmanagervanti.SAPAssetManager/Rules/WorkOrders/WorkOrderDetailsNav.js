import {WorkOrderLibrary as libWo} from '../WorkOrders/WorkOrderLibrary';
import libCom from '../Common/Library/CommonLibrary';
import libPagesConf from '../vanti/PagesConfigurationLibrary';
import PageFields from '../vanti/PageFields';

export default function WorkOrderDetailsNav(context) {

    let actionBinding = context.getPageProxy().getActionBinding();
    let previousPageProxy = context.getPageProxy().evaluateTargetPathForAPI('#Page:-Previous');

    if (libCom.getPageName(previousPageProxy) === 'PartDetailsPage') {
        let partsPreviousPage = previousPageProxy.evaluateTargetPathForAPI('#Page:-Previous');
        if (libCom.getPageName(partsPreviousPage) === 'PartsListViewPage') {
            return context.executeAction('/SAPAssetManager/Actions/Page/ClosePage.action').then(() => {
                return context.executeAction('/SAPAssetManager/Actions/Page/ClosePage.action').then(() => {
                    return context.executeAction('/SAPAssetManager/Actions/Page/ClosePage.action');
                });
            });
        }
    }

    if (libCom.getPageName(previousPageProxy) === 'WorkOrderDetailsPage' && previousPageProxy.getBindingObject().OrderId === actionBinding.OrderId) { //if the previous page was the parent workorder then, navigate back
        return context.executeAction('/SAPAssetManager/Actions/Page/ClosePage.action');
    }
    
    return context.read('/SAPAssetManager/Services/AssetManager.service', actionBinding['@odata.readLink'], [], libWo.getWorkOrderDetailsNavQueryOption()).then(function(result) {
        context.getPageProxy().setActionBinding(result.getItem(0));
		
        //let oPages = new libPagesConf();
        //let oBinding = context.getPageProxy().getActionBinding();
        //oBinding.oPages = oPages.conf;
        
        //return PageFields.getFieldProperties(context, oBinding, "WorkOrderDetailsPage", result.getItem(0).MaintenanceActivityType, "", context.executeAction);
        return context.executeAction('/SAPAssetManager/Actions/WorkOrders/WorkOrderDetailsNav.action');
    });
}
