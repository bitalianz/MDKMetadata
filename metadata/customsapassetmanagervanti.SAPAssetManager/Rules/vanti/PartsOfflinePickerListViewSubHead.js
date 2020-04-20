export default function PartListQueryOptionsEntity(context) {
	let materialCategory = context.evaluateTargetPath('#Page:PartCreatePage/#Control:PartCategoryLstPkr');
	
	let sVal = materialCategory.getValue()[0].ReturnValue;
	
	if (sVal.includes("(L)")) {
		return context.binding.MaterialNum + " - " + context.binding.Material.Description;
	} else if (sVal.includes("(N)")) {
		return context.binding.MaterialNum + " - " + context.binding.Description;
	};

}