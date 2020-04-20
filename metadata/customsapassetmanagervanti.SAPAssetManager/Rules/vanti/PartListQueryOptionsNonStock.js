/**
 * Describe this function...
 * @param {IClientAPI} context
 */
import QueryBuilder from '../Common/Query/QueryBuilder';
import libVal from '../Common/Library/ValidationLibrary';
import libCom from '../Common/Library/CommonLibrary';
import PartQuery from '../Parts/CreateUpdate/PartListQueryOptions';

export default function PartListQueryOptionsNonStock(context) {
	let queryBuilder = new QueryBuilder();

	let materialCategory = context.evaluateTargetPath('#Page:PartCreatePage/#Control:PartCategoryLstPkr');

	let sVal = materialCategory.getValue()[0].ReturnValue;

	if (sVal.includes("(L)")) {

		return PartQuery(context);

	} else if (sVal.includes("(N)")) {
		
		let plantCtrl = context.evaluateTargetPath('#Page:PartCreatePage/#Control:WorkCenterPlantLstPkr');
		
		var sOrder = context.getPageProxy().binding.OrderId;
		queryBuilder.addFilter("OrderId eq '" + sOrder + "'");

		let plant = libCom.getControlValue(plantCtrl);
		if (!libVal.evalIsEmpty(plant)) {
			queryBuilder.addFilter("Plant eq '" + plant + "'");
		}

		queryBuilder.addExtra('orderby=MaterialNum asc');

		return queryBuilder.build();
	};

}