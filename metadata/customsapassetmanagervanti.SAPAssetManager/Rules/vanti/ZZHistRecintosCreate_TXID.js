export default function ZZHistRecintosCreate_TXID(context) {
	var oBinding = context.getPageProxy().binding;
	return oBinding.OrderId + "_" + oBinding.Consec;
}