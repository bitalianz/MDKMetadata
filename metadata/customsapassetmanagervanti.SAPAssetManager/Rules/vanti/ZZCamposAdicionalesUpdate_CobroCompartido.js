export default function ZZCamposAdicionalesUpdate_CobroCompartido(context) {
	return context.getPageProxy().binding.oPages.pageTestForm1.lstPagadores.value === 'No' || context.getPageProxy().binding.oPages.pageTestForm1.lstPagadores.value.length === 0?
			'' :
			'X';
}