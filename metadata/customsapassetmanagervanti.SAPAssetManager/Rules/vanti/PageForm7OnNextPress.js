import PageFields from './PageFields';
export default function PageForm7OnNextPress(context) {

	var sMsg = PageFields.checkRequiredFields(context, "pageTestForm7a");
	let p = Promise.resolve();

	if (sMsg) {
		context.binding.sMsg = sMsg;
		return context.executeAction('/SAPAssetManager/Actions/vanti/MandatoryFieldMessage.action');
	} else {
		let oBinding = context.getPageProxy().binding; 
		let oPage = oBinding.oPages.pageTestForm7a;
		let idx = 1, idx2 = 0;
		
		let oPrecinto = {
			ReadLink : "",
			OrderId : oBinding.OrderId,
			IsInd : false,
			Indice : '',
			SerieActual : '',
			EstadoActual : '',
			SerieNuevo : '',
			EstadoNuevo : '',
			Caracteristica : '',
			CaractEstado : ''
		};
		let oPrecintoClear = oPrecinto;
		let aPrecintos = [];
		
		Object.keys(oPage).forEach(oField => {
			if(idx === 1) {
				oPrecinto = oPrecintoClear;
				oPrecinto.IsInd = oPage[oField].IsOnlyInd;
				oPrecinto.Indice = oPage[oField].Indice;
				oPrecinto.SerieActual = oPage[oField].value;
				oPrecinto.Caracteristica = oPage[oField].CaractName;
				oPrecinto.ReadLink = "ZZPrecintos(OrderId='" + oPrecinto.OrderId + "',IsInd='" + oPrecinto.IsInd + "',Indice='" + oPrecinto.Indice + "',SerieActual='" + oPrecinto.SerieActual + "')";
			} else if(idx === 2) {
				oPrecinto.EstadoActual = oPage[oField].value;
				oPrecinto.CaractEstado = oPage[oField].CaractName;
			} else if(idx === 3) {
				oPrecinto.SerieNuevo = oPage[oField].value;
				oPrecinto.EstadoNuevo = '01';
				
				if(oPrecinto.SerieNuevo !== ""){
					aPrecintos.push(oPrecinto);
					p = p.then(() => new Promise(resolve => {
						context.getPageProxy().setActionBinding(aPrecintos[idx2]);
						context.executeAction('/SAPAssetManager/Actions/vanti/ZZPrecintos_Update.action').then(() => {
						    resolve();
						});
				    }));
				    idx2++;
				}
			}
			
			idx = idx === 3 ? 1 : idx + 1;
		})
		
		p = p.then(() => new Promise(resolve => {
			PageFields.goNextActionPage(context, "PRECINTOS");
			resolve();
	    }));
	}
}