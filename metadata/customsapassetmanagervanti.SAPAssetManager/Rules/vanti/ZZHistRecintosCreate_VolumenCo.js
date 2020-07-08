export default function ZZHistRecintosCreate_VolumenCo(context) {
	var sVal = context.binding.oPages.pageTestForm6.txtVolCO.value;
	return sVal ? sVal : "";
}