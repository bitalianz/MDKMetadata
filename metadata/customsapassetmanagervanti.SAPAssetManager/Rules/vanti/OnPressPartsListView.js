import libPagesConf from './PagesConfigurationLibrary';

export default function OnPressPartsListView(context) {
	
	let oPages = new libPagesConf();
    let oBinding = context.getPageProxy().getActionBinding();
    oBinding.oPages = oPages.conf;
	
	let materialCategory = context.evaluateTargetPath('#Page:PartCreatePage/#Control:PartCategoryLstPkr');
	
	//let valueMaterialUOMLstPkr = context.evaluateTargetPath('#Page:PartCreateSummary/#Control:MaterialUOMLstPkr');

	let sVal = materialCategory.getValue()[0].ReturnValue;
	
	//var oPages = context.getPageProxy().binding.oPages;
	
	//var page = binding["PartCreateSummary"];

	if (sVal.includes("(L)") || sVal.includes("(T)")) {
		oBinding.oPages.PartCreateSummary.MaterialUOMLstPkr.visible = true;
		oBinding.oPages.PartCreateSummary.MaterialUOMLstPkr.editable = true;
		oBinding.oPages.PartCreateSummary.MaterialUOMLstPkr.value = "";
	} else {
		oBinding.oPages.PartCreateSummary.MaterialUOMLstPkr.visible = true;
		oBinding.oPages.PartCreateSummary.MaterialUOMLstPkr.editable = true;
		oBinding.oPages.PartCreateSummary.MaterialUOMLstPkr.value = "UN";
	};
	
	return context.executeAction("/SAPAssetManager/Actions/Parts/NavToPartCreateSummary.action");
}

// binding.PartCreateSummary.MaterialUOMLstPkr.visible = true;
// binding.PartCreateSummary.MaterialUOMLstPkr.editable = true;
// binding.PartCreateSummary.MaterialUOMLstPkr.value = true;