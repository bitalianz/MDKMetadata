export default function ZZHistEquiposCreate_DescEstado(context) {
	var sVal = context.binding.oPages.pageTestForm6_2a.lstPickEstado.descriptionValue;
	return sVal ? sVal : "";
}