export default function ZZHistRecintosCreate_Consec(context) {
	var sVal = context.binding.oPages.pageTestForm6.txtCargaRecintoKW.value;
	return sVal ? sVal : "";
}