export default function ZZHistRecintosDelete_ReadLink(context) {
	var oBinding = context.getPageProxy().binding;
	return "ZZHistRecintos(OrderId='" + oBinding.OrderId + "',Consec='" + oBinding.Consec + "')";
}