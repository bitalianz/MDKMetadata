export default function PageForm7aSelectedValueList(context) {

	var oBinding = context.getPageProxy().binding;

	var oPage = oBinding.oPages.pageTestForm7a;

	var sIdControl = context.getName();

	Object.keys(oPage).forEach(oField => {

		if (oField === sIdControl) {

			var oControl = context.getPageProxy().getControl(oPage[oField].container).getControl(oField);

			if (oControl) {

				var oValueControl = oControl.getValue()[0].ReturnValue;

				oPage[oField].value = oValueControl;
				oPage[oField].updated = true;

			}

		}

	});

}