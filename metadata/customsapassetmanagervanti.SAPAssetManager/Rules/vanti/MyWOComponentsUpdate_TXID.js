export default function MyWOComponentsUpdate_TXID(context) {
	var oB = context.getPageProxy().getActionBinding();
	var sRet = oB.ItemNumber + "_" + oB.OperationNo + "_" + oB.OrderId + "_" + oB.RecordType;
	return sRet;
}