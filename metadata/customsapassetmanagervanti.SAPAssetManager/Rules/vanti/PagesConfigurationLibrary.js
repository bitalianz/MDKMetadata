export default class PagesConfigurationLibrary {
	constructor() {
		this.conf = {
			"pageTestForm1": {
				"lstPickStatus": {
					"container": 'frmContResODS',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Estatus de usuario",
					"value": ""
				},
				"lstPickAnomalias": {
					"container": 'frmContResODS',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "Anomalias",
					"value": ""
				},
				"lstPickTipoLectura": {
					"container": 'frmContResODS',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "Tipo de Lectura",
					"value": ""
				},
				"txtLectura": {
					"container": 'frmContResODS',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "Lectura",
					"value": ""
				},
				"lstPickTipoCorte": {
					"container": 'frmContResODS',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "Tipo de Corte",
					"value": ""
				},
				"swInstalacion": {
					"container": 'frmContResODS',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "Instalación/Sustitución",
					"value": ""
				},
				"lstPagadores": {
					"container": 'frmContResODS',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "Pagadores",
					"value": ""
				},
				"lstPickVinculo": {
					"container": 'frmContResODS',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "Vínculo",
					"value": ""
				},
				"txtCelular": {
					"container": 'frmContResODS',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "Celular",
					"value": ""
				},
				"txtEmail": {
					"container": 'frmContResODS',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "Email",
					"value": ""
				},
				"txtFirma": {
					"container": 'frmContResODS',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "Firma",
					"value": ""
				}
			},
			"pageTestForm2": {
				"lstPickMotivosSustitucion": {
					"container": 'frmContSust',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "Motivo de Instalación/Sustitución",
					"value": ""
				},
				"lstPickDestinosMedidor": {
					"container": 'frmContSust',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "Destino del medidor",
					"value": ""
				},
				"dtPickFecLab": {
					"container": 'frmContSust',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "Fecha Laboratorio",
					"value": ""
				},
				"txPrecTula": {
					"container": 'frmContSust',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "N° Precinto Tula",
					"value": ""
				},
				"lstPickMedidores": {
					"container": 'frmContSust',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "Marque el medidor a sustituir",
					"value": ""
				},
				"txtNumSerie": {
					"container": 'frmContSust',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "Registre el medidor a Instalar / Sustituir",
					"value": ""
				},
				"txtMaterial": {
					"container": 'frmContSust',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "Registre las lecturas",
					"value": ""
				}
			},
			"pageTestForm7a": {
				"txtSerActCepo": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Cepo",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false
				},
				"txtEstActCepo": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Cepo",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false
				},
				"txtSerNewCepo": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Cepo",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false
				},
				"txtSerActVisor": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Visualizador",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false
				},
				"txtEstActVisor": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Visualizador",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false
				},
				"txtSerNewVisor": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Visualizador",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false
				},
				"txtSerActConector": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Contenedor",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false
				},
				"txtEstActConector": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Contenedor",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false
				},
				"txtSerNewConector": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Contenedor",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false
				},
				"txtSerActRegulador": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Regulador",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false
				},
				"txtEstActRegulador": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Regulador",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false
				},
				"txtSerNewRegulador": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Regulador",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false
				},
				"txtSerTapaUndCorr": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Tapa Unidad Correctora",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtEstActTapaUndCorr": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Tapa Unidad Correctora",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerNewTapaUndCorr": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Tapa Unidad Correctora",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerActBase": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Base Unidad Correctora",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtEstActBase": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Base Unidad Correctora",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerNewBase": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Base Unidad Correctora",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerActValPres": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Valvula Toma Presion",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtEstActValPres": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Valvula Toma Presion",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerNewValPres": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Valvula Toma Presion",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerActVisorDos": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Marco Visor 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtEstActVisorDos": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Marco Visor 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerNewVisorDos": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Marco Visor 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerActBrida": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Brida Medidor 1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtEstActBrida": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Brida Medidor 1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerNewBrida": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Brida Medidor 1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerActBridaDos": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Brida Medidor 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtEstActBridaDos": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Brida Medidor 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerNewBridaDos": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Brida Medidor 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerActManome": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Manometro De Ref",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtEstActManome": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Manometro De Ref",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerNewManome": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Manometro De Ref",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerActBridaFilUno": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Brida Filtro 1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtEstActBridaFilUno": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Brida Filtro 1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerNewBridaFilUno": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Brida Filtro 1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerActBridaFilDos": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Brida Filtro 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtEstActBridaFilDos": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Brida Filtro 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSernewBridaFilDos": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Brida Filtro 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerActTapaMed": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Tapa Medidor 1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtEstActTapaMed": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Tapa Medidor 1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerNewTapaMed": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Tapa Medidor 1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerActTapaMedDos": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Tapa Medidor 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtEstActTapaMedDos": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Tapa Medidor 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerNewTapaMedDos": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Tapa Medidor 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerActSensor": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Sensor Temperatura",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtEstActSensor": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Sensor Temperatura",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerNewSensor": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Sensor Temperatura",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerActPlaca": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Placa ciega",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtEstActPlaca": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Placa ciega",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerNewPlaca": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Placa ciega",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerActBridaCie": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Brida ciega",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtEstActBridaCie": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Brida ciega",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerNewBridaCie": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Brida ciega",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerActManifoldQ1": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Manifold Brida Valblo Q1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtEstActManifoldQ1": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Manifold Brida Valblo Q1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerNewManifoldQ1": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Manifold Brida Valblo Q1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerActManifoldQ2": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Manifold Brida Valblo Q2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtEstActManifoldQ2": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Manifold Brida Valblo Q2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerNewManifoldQ2": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Manifold Brida Valblo Q2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerActPorta": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Porta Placa",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtEstActPorta": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Porta Placa",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerNewPorta": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Porta Placa",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerActPlacaFilt": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Placa Filtro Gen Puls",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtEstActPlacaFilt": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Placa Filtro Gen Puls",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerNewPlacaFilt": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Placa Filtro Gen Puls",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerActValBy": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Valvula By-Pass",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtEstActValBy": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Valvula By-Pass",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerNewValBy": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Valvula By-Pass",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerActTornillo": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Tornillo Ajustew Pre Reg",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtEstActTornillo": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Tornillo Ajustew Pre Reg",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerNewTornillo": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Tornillo Ajustew Pre Reg",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerActTapaPro": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Tapa Propulsor",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtEstActTapaPro": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Tapa Propulsor",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				},
				"txtSerNewTapaPro": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Tapa Propulsor",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true
				}
			}
		};
	}
}