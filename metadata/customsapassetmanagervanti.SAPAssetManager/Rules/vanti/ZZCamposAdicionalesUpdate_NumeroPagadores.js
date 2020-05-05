export default function ZZCamposAdicionalesUpdate_NumeroPagadores(context) {
	return context.getPageProxy().binding.oPages.pageTestForm1.lstPagadores.value === 'No' ?
			'' :
			context.getPageProxy().binding.oPages.pageTestForm1.lstPagadores.value;
}