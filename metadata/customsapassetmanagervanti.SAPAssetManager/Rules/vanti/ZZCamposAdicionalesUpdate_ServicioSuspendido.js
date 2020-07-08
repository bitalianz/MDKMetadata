export default function ZZCamposAdicionalesUpdate_ServicioSuspendido(context) {
	return context.getPageProxy().binding.oPages.pageTestForm1.lstPickTipoLectura.value === '1' ?
			'X' :
			' ';
}