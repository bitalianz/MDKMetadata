export default function ZZHistEquiposCreate_DescEquipo(context) {
	var sVal = context.binding.oPages.pageTestForm6_2a.lstPickEquipo.descriptionValue;
	return sVal ? sVal : "";
}