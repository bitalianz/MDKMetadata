export default function InitializedOrder(context) {
	
	var oBinding = context.getPageProxy().binding;
	
	if(oBinding.initialized){
		return oBinding.initialized;
	}else{
		return false;
	}
	
}