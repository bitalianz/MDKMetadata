export default function ZZCamposAdicionalesUpdate_LecturaReconexion(context) {
	return context.getPageProxy().binding.oPages.pageTestForm1.lstPickTipoLectura.value === '2' ? 
			context.getPageProxy().binding.oPages.pageTestForm1.txtLectura.value :
			'';
}