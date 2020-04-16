export default class PageFields {

	static getTecPageName(sPageName) {

		var sTecPage = "";

		var aTecPages = [{
			"page": "RESULTADO_ODS",
			"tecPage": "Open_form_1.action"
		}, {
			"page": "INST_SUST_MED",
			"tecPage": "Open_form_2.action"
		}, {
			"page": "IND_ODORIZACION",
			"tecPage": "Open_form_3.action"
		}, {
			"page": "INSP_CE_MEDICION",
			"tecPage": "Open_form_4.action"
		}, {
			"page": "REC_CARGA_INSTAL",
			"tecPage": "Open_form_5.action"
		}, {
			"page": "PRECINTOS",
			"tecPage": "Open_form_7a.action"
		}];

		for (var i = 0; i < aTecPages.length; i++) {

			if (aTecPages[i].page === sPageName) {
				sTecPage = aTecPages[i].tecPage;
				break;
			}
		}
		return sTecPage;
	}

	static goNextActionPage(oContext, sPageName) {

		var that = this;

		var sPath = "";
		
		var sStatusValue = oContext.getPageProxy().binding.sUserStatus;
		var aStatusValue = sStatusValue.split("/");

		var sActClas = oContext.getPageProxy().binding.WOHeader.MaintenanceActivityType;
		var sOrderType = oContext.getPageProxy().binding.WOHeader.OrderType;

		oContext.read('/SAPAssetManager/Services/AssetManager.service', "ZZFormParamss" +
			"(OrderId='" + oContext.getPageProxy().binding.OrderId + "',OrdesClass='" + sOrderType + "',ActivityClass='" + sActClas +
			"',UserStatus='" + aStatusValue[1] + "',CurrPage='" + sPageName + "')", [], "").then(function (result) {

			if (result) {

				var sNextAction = that.getTecPageName(result.getItem(0).NextPage);

				if (sNextAction) {
					sPath = "/SAPAssetManager/Actions/vanti/" + sNextAction;
				} else {
					//Llamar operaciones
					sPath = "/SAPAssetManager/Actions/vanti/Open_Operation_Details.action";
				}

				oContext.executeAction(sPath);

			}

		});

	}

	static getFieldProperties(oContext, oBinding, sPageName, sActClas, sUserStat, fnCallBack = "") {
		let that = this;
		return oContext.read('/SAPAssetManager/Services/AssetManager.service', "ZZFieldParamss", [],
			"$filter=Page eq '" + sPageName + "' and Activ eq '" + sActClas + "' and UserStatus eq '" + sUserStat + "'").then(function (result) {
			for (let j = 0; j < result.length; j++) {
				let oResult = result.getItem(j);
				if (oBinding.oPages[sPageName][oResult.ComponentId]) {
					oBinding.oPages[sPageName][oResult.ComponentId].visible = oResult.Visible === 'X';
					oBinding.oPages[sPageName][oResult.ComponentId].editable = oResult.Editable === 'X';
					oBinding.oPages[sPageName][oResult.ComponentId].mandatory = oResult.Obligatorio === 'X';
				}
			}

			if(sPageName == "WorkOrderDetailsPage") {
				return fnCallBack('/SAPAssetManager/Actions/WorkOrders/WorkOrderDetailsNav.action');
			} else if (sPageName == "pageTestForm1") {
				that.setFieldsProperties(oContext, oBinding, "pageTestForm1");
			} else if (sPageName == "pageTestForm7a") {
				oContext.read('/SAPAssetManager/Services/AssetManager.service', "ZZPrecintos", [], "$filter=OrderId eq '" + oBinding.OrderId + "'").then(
					function (oPrecintos) {
						if(oPrecintos.length > 0) {
							let blHideInd = oPrecintos.getItem(0).IsInd !== 'X';

							let oPage = oBinding.oPages[sPageName];
							Object.keys(oPage).forEach(oField => {
								if (oPage[oField].IsOnlyInd && blHideInd)
									oPage[oField].visible = false;
									
								let sKey = oPage[oField].IsSerial ? 'Caracteristica' : 'CaractEstado';
								let sValue = oPage[oField].IsSerial ? 'SerieActual' : 'EstadoActual';

								if(!oPage[oField].editable){
									for(let i = 0; i < oPrecintos.length; i++){
										let oPrec = oPrecintos.getItem(i);
									
										if(oPrec[sKey] === oPage[oField].CaractName){
											oPage[oField].value = oPrec[sValue];
											break;
										}
									}
								}
							});
						}
					}
				);
			}
		});
	}

	static setFieldsProperties(oContext, oBinding, sPageName) {
		let oPage = oBinding.oPages[sPageName];
		Object.keys(oPage).forEach(oField => {
			let formControl = oContext.getPageProxy().getControl(oPage[oField].container).getControl(oField);
			formControl.setVisible(oPage[oField].visible);
			formControl.setEditable(oPage[oField].editable);
		});
	}

	static checkRequiredFields(oContext, sPageName) {
		let oPage = oContext.getPageProxy().binding.oPages[sPageName];
		let sMsg = "";

		Object.keys(oPage).forEach(oField => {
			if (oPage[oField].visible) {
				let oControl = oContext.getPageProxy().getControl(oPage[oField].container).getControl(oField);
				let typeCtrl = oControl.getType();
				let oVal;

				if (typeCtrl.includes("ListPicker")) {
					oVal = [];
					oControl.getValue().forEach(oValue => {
						oVal.push(oValue.ReturnValue)
					})
				} else if (typeCtrl.includes("SimpleProperty") || typeCtrl.includes("Switch") || typeCtrl.includes("Note"))
					oVal = oControl.getValue();

				if (oPage[oField].mandatory && !sMsg && !oVal)
					sMsg = oPage[oField].fieldDescription + " es un campo obligatorio";

				oPage[oField].value = oVal;
			}
		});

		return sMsg;
	}
}