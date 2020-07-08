export default function ZZHistRecintosCreate_Descripcion(context) {
	var sVal = context.binding.oPages.pageTestForm6.lstPickTipoRecinto.descriptionValue;
	return sVal ? sVal : "";
}