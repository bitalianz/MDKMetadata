export default function PageForm1DC_SitSuministro(context) {
	return context.read('/SAPAssetManager/Services/AssetManager.service', "ZZCamposAdicionales('" + context.getPageProxy().binding.OrderId + "')", [], '$select=EstadoServHogar' ).then(function(result) {
		
		var codEstado = result.getItem(0).EstadoServHogar;
		
		if (codEstado === 'I'){
			return 'Inactivo';
		} else if (codEstado === 'A'){
			return 'Activo';
		} else {
			return codEstado;
		};
        // return result.getItem(0).EstadoServHogar;
    });
}