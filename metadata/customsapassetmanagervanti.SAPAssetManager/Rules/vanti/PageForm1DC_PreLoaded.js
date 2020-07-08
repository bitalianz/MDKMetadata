	function getFieldProperties(oContext, oBinding, sPageName, sActClas, sUserStat, callBack = "") {

		oContext.read('/SAPAssetManager/Services/AssetManager.service', "ZZFieldParamss", [],
			"$filter=Page eq '" + sPageName + "' and Activ eq '" + sActClas + "' and UserStatus eq '" + sUserStat + "'").then(function (result) {
			for (let j = 0; j < result.length; j++) {
				let oResult = result.getItem(j);
				if (oBinding.oPagesDC[sPageName][oResult.ComponentId]) {
					oBinding.oPagesDC[sPageName][oResult.ComponentId].visible = oResult.Visible === 'X';
					oBinding.oPagesDC[sPageName][oResult.ComponentId].editable = oResult.Editable === 'X';
					oBinding.oPagesDC[sPageName][oResult.ComponentId].mandatory = oResult.Obligatorio === 'X';
				}
			}

			if (callBack) {
				callBack();
			}

		});
	}

	export default function PageForm1DC_PreLoaded(context) {

		var conf = {
			"pageTestForm1_datos_cliente": {
				"txtCuentaContrato": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtNombreCliente": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtBarrio": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtDescripcionProducto": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtProductoServihogar": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},	
				"txtEstadoServihogar": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtContadorRTR": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtUnidadLectura": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtCodigoOrdenLectura": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtMalla": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtTelefonoRTR": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtTelefonoInterlocutor": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtUltimaLectura": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtIndicadorFraude": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtSituacionSuministro": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtAnomaliaPredio": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				},
				"txtPresContOper": {
					"container": 'frmContDC',
					"mandatory": false,
					"visible": false,
					"editable": false
				}
			}
		};

		var oBinding = context.getPageProxy().binding;

		oBinding.oPagesDC = conf;

		getFieldProperties(context, oBinding, "pageTestForm1_datos_cliente", oBinding.MaintenanceActivityType, "", function () {
			context.executeAction('/SAPAssetManager/Actions/vanti/Open_form_1_datos_cliente.action');
		});

	}