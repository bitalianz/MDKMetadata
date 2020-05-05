export default function ZZCamposAdicionalesUpdate_LecturaSuspencion(context) {
	return context.getPageProxy().binding.oPages.pageTestForm1.lstPickTipoLectura.value === '1' ? 
			context.getPageProxy().binding.oPages.pageTestForm1.txtLectura.value :
			'';
}