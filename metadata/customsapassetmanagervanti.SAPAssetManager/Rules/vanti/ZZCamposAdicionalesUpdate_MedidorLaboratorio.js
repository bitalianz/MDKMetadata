export default function ZZCamposAdicionalesUpdate_MedidorLaboratorio(context) {
	return context.getPageProxy().binding.oPages.pageTestForm4.dtPickFecLab.value ? 'X' : '' ;
}