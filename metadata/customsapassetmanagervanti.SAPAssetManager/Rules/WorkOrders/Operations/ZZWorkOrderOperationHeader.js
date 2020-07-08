import libForm from '../../Common/Library/FormatLibrary';

export default function WorkOrderOperationHeader(context) {
    return context.read('/SAPAssetManager/Services/AssetManager.service', "MyWorkOrderHeaders('" + context.getPageProxy().binding.OrderId + "')", [], '$select=DirSuministro' ).then(function(result) {
        return result.getItem(0).DirSuministro;
    });
}
