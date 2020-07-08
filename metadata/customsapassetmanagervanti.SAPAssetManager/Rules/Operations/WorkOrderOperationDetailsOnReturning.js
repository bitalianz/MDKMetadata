import toolbarCaption from './MobileStatus/OperationMobileStatusToolBarCaption';
import COT from '../vanti/OnCancelOrderTreatment';

export default function WorkOrderOperationDetailsOnReturning(context) {
    let caption = toolbarCaption(context);
    var oBinding = context.getPageProxy().binding;
    
    var sCurrPage = context.getPageProxy().currentPage.id;
    
    context.setToolbarItemCaption('IssuePartTbI', context.localizeText(caption));
    
    if(oBinding.finished){
    	//Sincronización automatica
    	context.executeAction('/SAPAssetManager/Actions/SyncInitializeProgressBannerMessage.action');
    }else{
    	if (sCurrPage !== "PartsListViewPage") {
    		COT(context);	
    	}
    }
    
}
