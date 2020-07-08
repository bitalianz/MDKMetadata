export default function ZZHistEquiposDelete_ReadLink(context) {
	var oBinding = context.getPageProxy().binding;
	
	return "ZZHistEquipos(OrderId='" + oBinding.OrderId + "',ConsecRecinto='" + oBinding.Consec + "',ConsecEquipo='" + oBinding.ConsecEquipo + "')";
}