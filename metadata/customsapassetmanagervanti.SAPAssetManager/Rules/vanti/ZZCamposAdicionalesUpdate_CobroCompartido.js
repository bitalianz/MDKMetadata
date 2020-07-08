export default function ZZCamposAdicionalesUpdate_CobroCompartido(context) {
			var oBinding = context.getPageProxy().binding;
			if (!oBinding.oPages.pageTestForm1.lstPagadores.value || oBinding.oPages.pageTestForm1.lstPagadores.value !== 'No'){
				return '';
			} else {
				return 'X';
			}
}