	function getFieldProperties(oContext, oBinding, sPageName, sActClas, sUserStat, callBack = "") {
		
		oContext.read('/SAPAssetManager/Services/AssetManager.service', "ZZFieldParamss", [],
			"$filter=Page eq '" + sPageName + "' and Activ eq '" + sActClas + "' and UserStatus eq '" + sUserStat + "'").then(function (result) {
			for (let j = 0; j < result.length; j++) {
				let oResult = result.getItem(j);
				if (oBinding.oPagesDT[sPageName][oResult.ComponentId]) {
					oBinding.oPagesDT[sPageName][oResult.ComponentId].visible = oResult.Visible === 'X';
					oBinding.oPagesDT[sPageName][oResult.ComponentId].editable = oResult.Editable === 'X';
					oBinding.oPagesDT[sPageName][oResult.ComponentId].mandatory = oResult.Obligatorio === 'X';
				}
			}
			
			if(callBack){
			   callBack();
			}
			
		});
	}

export default function PageForm1DT_PreLoaded(context) {

		var conf = {
			"pageTestForm1_datos_tecnicos": {
				"txtNumeroODS": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtClaseActividad": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtFechaInicioExtremo": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtHoraInicial": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtHoraFinal": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtBPFirma": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtTelefonoBP": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtTipoCorte": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtProductoServicio": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtDescCorta": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtDefPuntoSuministro": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtMotivoSuspension": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				}
			}
		};
		
		var oBinding = context.getPageProxy().binding;
		
		oBinding.oPagesDT = conf;
		
		getFieldProperties(context, oBinding, "pageTestForm1_datos_tecnicos", oBinding.MaintenanceActivityType, "", function(){
			context.executeAction('/SAPAssetManager/Actions/vanti/Open_form_1_datos_tecnicos.action');
		});
		
}
