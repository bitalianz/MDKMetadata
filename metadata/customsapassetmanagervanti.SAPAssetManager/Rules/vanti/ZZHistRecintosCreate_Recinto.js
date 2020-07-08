export default function ZZHistRecintosCreate_Recinto(context) {
	var sVal = context.binding.oPages.pageTestForm6.lstPickRecinto.value;
	return sVal ? sVal : "";
}