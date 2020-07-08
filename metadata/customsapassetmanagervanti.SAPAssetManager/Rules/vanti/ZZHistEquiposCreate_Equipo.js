export default function ZZHistEquiposCreate_Equipo(context) {
	var sVal = context.binding.oPages.pageTestForm6_2a.lstPickEquipo.value;
	return sVal ? sVal : "";
}