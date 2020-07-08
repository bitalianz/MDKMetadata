export default function ZZHistEquiposCreate_Equipo(context) {
	var sVal = context.binding.oPages.pageTestForm6_2a.txtKw.value;
	return sVal ? sVal : "0";
}