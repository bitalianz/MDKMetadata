export default function ZZCamposAdicionalesUpdate_LecturaControl(context) {
	return context.getPageProxy().binding.oPages.pageTestForm1.lstPickTipoLectura.value === '3' ? 
			context.getPageProxy().binding.oPages.pageTestForm1.txtLectura.value :
			'';
}