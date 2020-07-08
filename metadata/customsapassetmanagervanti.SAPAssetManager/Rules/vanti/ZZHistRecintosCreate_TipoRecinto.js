export default function ZZHistRecintosCreate_TipoRecinto(context) {
	var sVal = context.binding.oPages.pageTestForm6.lstPickTipoRecinto.value;
	return sVal ? sVal : "";
}