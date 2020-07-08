export default function MyWOComponentsUpdate_ReadLink(context) {
	
	var oB = context.getPageProxy().getActionBinding();
	
	var sRet = "MyWorkOrderComponents(ItemNumber='" + oB.ItemNumber + "',OperationNo='" + oB.OperationNo + "',OrderId='" + oB.OrderId + "',RecordType='" + oB.RecordType + "')";
	
	return sRet;
	
}