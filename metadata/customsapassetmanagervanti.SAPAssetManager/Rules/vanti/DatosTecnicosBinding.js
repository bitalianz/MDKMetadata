/*import libMobile from '../../MobileStatus/MobileStatusLibrary';
import libWOMobile from '../../WorkOrders/MobileStatus/WorkOrderMobileStatusLibrary';
import libCommon from '../../Common/Library/CommonLibrary';
import Logger from '../../Log/Logger';
import HideActionItems from '../../Common/HideActionItems';
import isTimeSheetsEnabled from '../../TimeSheets/TimeSheetsIsEnabled';
import isConfirmationsEnabled from '../../Confirmations/ConfirmationsIsEnabled';
import confirmationsCreateUpdateNav from '../../Confirmations/CreateUpdate/ConfirmationCreateUpdateNav';
import CompleteOperationMobileStatusAction from './CompleteOperationMobileStatusAction';
import UnconfirmOperationMobileStatusAction from './UnconfirmOperationMobileStatusAction';
import {ChecklistLibrary as libChecklist} from '../../Checklists/ChecklistLibrary';*/

export default class {
	static showConfirmationsCaptureMessage(context) {
		let binding = context.getBindingObject();
            
        let overrides = {
            'NumCuotas': binding.NumCuotas,
            'BPFirma': binding.BPFirma,
            'ServiceProduct': binding.ServiceProduct,
            'ProductDesc': binding.ProductDesc,
        };
        
        return confirmationsCreateUpdateNav(context, overrides).then(() => {
            return Promise.resolve();
        }, error => {
            context.dismissActivityIndicator();
            Logger.error(context.getGlobalDefinition('/SAPAssetManager/Globals/Logs/CategoryOperations.global').getValue(), error);
            return context.executeAction('/SAPAssetManager/Actions/WorkOrders/MobileStatus/OperationMobileStatusFailureMessage.action');
        });
	}
}