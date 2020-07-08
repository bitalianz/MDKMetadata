export default function PageForm6_1TableStatus(context) {
	
	var oBinding = context.binding;
	var sVal = oBinding.Kw ? oBinding.Kw: "0";
	return sVal + " KW";
	
}