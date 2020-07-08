function packRec(context, fn) {

	var aRecData = [];
	var oRecData = {};

	//Serializar Recinto Info Data
	context.read('/SAPAssetManager/Services/AssetManager.service', "ZZHistRecintos", [],
		"$filter=OrderId eq '" + context.getPageProxy().binding.OrderId + "'").then(function (result) {

		if (result.length > 0) {

			result._array.forEach(item => {

				oRecData = {};
				
				oRecData.AUFNR = item.OrderId;
				oRecData.CONSEC = item.Consec;
				oRecData.RECINTO = item.Recinto;
				oRecData.TOTAL_KW = item.TotalKw;
				oRecData.VOLUMEN_CO = item.VolumenCo;

				aRecData.push(oRecData);

			});

			fn(JSON.stringify(aRecData));
		}

	});

}

function packEqui(context, fn) {

	var aEquiData = [];
	var oEquiData = {};

	var oBinding = context.getPageProxy().binding;

	//Serializar Equipos Info Data
	context.read('/SAPAssetManager/Services/AssetManager.service', "ZZHistEquipos", [],
		"$filter=OrderId eq '" + oBinding.OrderId + "'").then(function (result) {

		if (result.length > 0) {

			result._array.forEach(item => {
				
				oEquiData = {};
				
				oEquiData.AUFNR = item.OrderId;
				oEquiData.CONSEC_EQUIPO = item.ConsecEquipo;
				oEquiData.EQUIPO = item.Equipo;
				oEquiData.ESTADO = item.Estado
				oEquiData.KW = item.Kw;
				oEquiData.RECINTO = item.Recinto;
				oEquiData.TIPO_RECINTO = item.TipoRecinto;
				oEquiData.DESC_EQUIPO = item.DescEquipo;
				oEquiData.DESC_ESTADO = item.DescEstado;
				oEquiData.DESC_RECINTO = item.DescRecinto;

				aEquiData.push(oEquiData);

			});

			fn(JSON.stringify(aEquiData));
		}

	});

}

import PageFields from './PageFields';

export default function PageForm5OnNextPress(context) {

	var oBinding = context.getPageProxy().binding;

	return context.read('/SAPAssetManager/Services/AssetManager.service', "ZZHistRecintos", [],
		"$filter=OrderId eq '" + oBinding.OrderId + "'").then(function (result) {

		if (result.length > 0) {
			packRec(context, function (sRecintos) {
				packEqui(context, function (sEquipos) {
					var oActBnd = {
						"OrderId": oBinding.OrderId,
						"ValuePartR": sRecintos,
						"ValuePartE": sEquipos
					};
					context.getPageProxy().setActionBinding(oActBnd);
					context.executeAction("/SAPAssetManager/Actions/vanti/ZZRecEquipos_Update.action").then(() => {
						context.getPageProxy().setActionBinding(oBinding);
						return PageFields.goNextActionPage(context, "REC_CARGA_INSTAL");	
					});
					
				});
			});
		} else {
			context.binding.sMsg = "Por lo menos debe inpeccionar 1 recinto";
			return context.executeAction('/SAPAssetManager/Actions/vanti/MandatoryFieldMessage.action');
		}
	});

}