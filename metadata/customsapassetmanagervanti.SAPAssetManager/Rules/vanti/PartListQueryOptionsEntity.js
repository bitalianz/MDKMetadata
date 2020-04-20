export default function PartListQueryOptionsEntity(context) {
	let materialCategory = context.evaluateTargetPath('#Page:PartCreatePage/#Control:PartCategoryLstPkr');
	
	let sVal = materialCategory.getValue()[0].ReturnValue;
	
	if (sVal.includes("(L)")) {
		return "MaterialPlants"; 
	} else if (sVal.includes("(N)")) {
		return "ZZMaterialsNon";
	};

}