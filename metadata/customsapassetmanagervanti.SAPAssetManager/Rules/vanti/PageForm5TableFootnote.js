export default function PageForm5TableFootnote(context) {
	
	var oBinding = context.binding;
	var sVal = oBinding.TotalKw ? oBinding.TotalKw : "0";
	return "Total KW " +  sVal;
	
}