export default function ZZCamposAdicionalesUpdate_CambioMedidor(context) {
	
	var oBinding = context.getPageProxy().binding;
	
	return oBinding.oPages.pageTestForm2.lstPickMedidores.value ? "X" : "";

}