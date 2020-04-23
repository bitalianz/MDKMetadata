export default function ValueUOMPartSummary(context){

	let oPage = context.binding.oPages.PartCreateSummary;
	
	let formControl = context.getPageProxy().getControl(oPage.MaterialUOMLstPkr.container).getControl("MaterialUOMLstPkr");
	
	formControl.setValue(oPage.MaterialUOMLstPkr.value);
	
}