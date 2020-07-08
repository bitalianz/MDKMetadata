export default function ZZHistEquiposCreate_TXID(context) {
	var oBinding = context.getPageProxy().binding;
	return oBinding.OrderId + "_" + oBinding.Consec + "_" + oBinding.ConsecEquipos;
}