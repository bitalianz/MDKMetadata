export default function ZZCamposAdicionalesUpdate_VacioInterno(context) {
	return context.getPageProxy().binding.oPages.pageTestForm4.swVacio.value === true ? 'X' : '' ;
}