export default function PageForm5TableStatus(context) {
	
	var oBinding = context.binding;
	var sVal = oBinding.VolumenCo ? oBinding.VolumenCo: "0";
	return "CO ppm " + sVal;
	
}