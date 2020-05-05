export default function ZZCamposAdicionalesUpdate_Anomalias(context) {
	
	let oAnomalias = context.getPageProxy().binding.oPages.pageTestForm1.lstPickAnomalias.value;
	
	return oAnomalias.join("|");
	
}