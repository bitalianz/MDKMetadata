export default function ZZCamposAdicionalesUpdate_Defectos(context) {
	
	let oDefectos = context.getPageProxy().binding.oPages.pageTestForm4.lstPickDefectos.value;
	
	return oDefectos.join("|");
	
}