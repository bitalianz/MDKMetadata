export default function PageForm7aOnLoaded(context) {
	let oPage = context.getPageProxy().binding.oPages.pageTestForm7a;
	
	Object.keys(oPage).forEach(oField => {
		let formControl = context.getPageProxy().getControl(oPage[oField].container).getControl(oField);
		if(!oPage[oField].editable)
			formControl.setValue(oPage[oField].value);
	});
}