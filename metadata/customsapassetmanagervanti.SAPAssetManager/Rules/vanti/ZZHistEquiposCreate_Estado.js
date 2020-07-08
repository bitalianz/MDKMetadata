export default function ZZHistEquiposCreate_Estado(context) {
	var sVal = context.binding.oPages.pageTestForm6_2a.lstPickEstado.value;
	return sVal ? sVal : "";
}