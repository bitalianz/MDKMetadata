export default class PagesConfigurationLibrary {
	constructor() {
		this.conf = {
			"WorkOrderDetailsPage": {
				"LinkDatosCliente": {
					"mandatory": true,
					"visible": false,
					"editable": true,
				},
				"LinkDatosTecnicos": {
					"mandatory": true,
					"visible": false,
					"editable": true,
				}
			},
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
					"value": "",
					"format": "wordsNumbersOnly",
					"length": 10
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
					"value": "",
					"format": "phoneNumber",
					"length": 10
				},
				"txtCuotas": {
					"container": 'frmContResODS',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "Numero de cuotas",
					"value": "",
					"format": "numbersOnly",
					"length": 2
				},
				"txtEmail": {
					"container": 'frmContResODS',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "Email",
					"value": "",
					"format": "email",
					"length": 40
				},
				"txtFirma": {
					"container": 'frmContResODS',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "Firma",
					"value": "",
					"format": "wordsNumbersOnly",
					"length": 20
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
				},
				"txtLectMedRetirado": {
					"container": 'frmContSust',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "Lectura medidor retirado",
					"value": ""
				},
				"txtLectMedInstalado": {
					"container": 'frmContSust',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "Lectura medidor instalado",
					"value": ""
				}
			},
			"pageTestForm4": {
				"txtPresContratada": {
					"container": 'frmContInspCentMed',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "",
					"value": ""
				},
				"lstPickUM": {
					"container": 'frmContInspCentMed',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "",
					"value": ""
				},
				"txtPresDinamica": {
					"container": 'frmContInspCentMed',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "",
					"value": ""
				},
				"txtPresEstatica": {
					"container": 'frmContInspCentMed',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "",
					"value": ""
				},
				"lstPickDefectos": {
					"container": 'frmContInspCentMed',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "",
					"value": ""
				},
				"txtNroCertificado": {
					"container": 'frmContInspCentMed',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "",
					"value": ""
				},
				"swVacio": {
					"container": 'frmContInspCentMed',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "",
					"value": false
				},
				"swExepNorma": {
					"container": 'frmContInspCentMed',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "",
					"value": false
				},
				"swLineaMatriz": {
					"container": 'frmContInspCentMed',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "",
					"value": false
				},
				"lstPickNroRecintos": {
					"container": 'frmContInspCentMed',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "",
					"value": ""
				}
			},
			"pageTestForm7a": {
				"txtSerActCepo": {
					"grupo" : "Cepo",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Cepo",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false,
					"IsSerial" : true,
					"CaractName" : 'NRO_SERIE_CEPO',
					"Indice" : '',
					"value": ""
				},
				"txtEstActCepo": {
					"grupo" : "Cepo",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Cepo",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_CEPO',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewCepo": {
					"grupo" : "Cepo",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Cepo",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerActVisor": {
					"grupo" : "Visor",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Visor 1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false,
					"IsSerial" : true,
					"CaractName" : 'NRO_SERIE_MARCO_VISOR_1',
					"Indice" : '',
					"value": ""
				},
				"txtEstActVisor": {
					"grupo" : "Visor",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Visor 1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_MARCO_VISOR_1',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewVisor": {
					"grupo" : "Visor",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Visor 1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerActConector": {
					"grupo" : "Conector",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Contenedor",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false,
					"IsSerial" : true,
					"CaractName" : 'NROSERIE_CONECTOR_TOMA_PRESION',
					"Indice" : '',
					"value": ""
				},
				"txtEstActConector": {
					"grupo" : "Conector",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Contenedor",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_CONECTOR_TOMA_PRESION',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewConector": {
					"grupo" : "Conector",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Contenedor",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerActRegulador": {
					"grupo" : "Regulador",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Regulador",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false,
					"IsSerial" : true,
					"CaractName" : 'NRO_SERIE_REGULADOR',
					"Indice" : '',
					"value": ""
				},
				"txtEstActRegulador": {
					"grupo" : "Regulador",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Regulador",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_REGULADOR',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewRegulador": {
					"grupo" : "Regulador",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Regulador",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : false,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerTapaUndCorr": {
					"grupo" : "TapaUndCorr",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Tapa Unidad Correctora",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : 'NRO_SERIE_TAPA_UNIDAD_CORREC',
					"Indice" : '',
					"value": ""
				},
				"txtEstActTapaUndCorr": {
					"grupo" : "TapaUndCorr",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Tapa Unidad Correctora",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_TAPA_UNIDAD_CORRECTORA',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewTapaUndCorr": {
					"grupo" : "TapaUndCorr",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Tapa Unidad Correctora",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerActBase": {
					"grupo" : "ActBase",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Base Unidad Correctora",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : 'NRO_SERIE_BASE_UNI_CORRECTORA',
					"Indice" : '',
					"value": ""
				},
				"txtEstActBase": {
					"grupo" : "ActBase",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Base Unidad Correctora",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_BASE_UNIDAD_CORRECTORA',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewBase": {
					"grupo" : "ActBase",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Base Unidad Correctora",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerActValPres": {
					"grupo" : "ActValPres",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Valvula Toma Presion",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : 'NRO_SERIE_VALVULA_TOMA_PRESION',
					"Indice" : '',
					"value": ""
				},
				"txtEstActValPres": {
					"grupo" : "ActValPres",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Valvula Toma Presion",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_VALVULA_TOMA_PRESION',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewValPres": {
					"grupo" : "ActValPres",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Valvula Toma Presion",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerActVisorDos": {
					"grupo" : "ActVisorDos",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Marco Visor 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : 'NRO_SERIE_MARCO_VISOR_2',
					"Indice" : '',
					"value": ""
				},
				"txtEstActVisorDos": {
					"grupo" : "ActVisorDos",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Marco Visor 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_MARCO_VISOR_2',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewVisorDos": {
					"grupo" : "ActVisorDos",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Marco Visor 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerActBrida": {
					"grupo" : "ActBrida",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Brida Medidor 1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : 'NRO_SERIE_BRIDA_MEDIDOR_1',
					"Indice" : '',
					"value": ""
				},
				"txtEstActBrida": {
					"grupo" : "ActBrida",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Brida Medidor 1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_BRIDA_MEDIDOR_1',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewBrida": {
					"grupo" : "ActBrida",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Brida Medidor 1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerActBridaDos": {
					"grupo" : "ActBridaDos",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Brida Medidor 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : 'NRO_BRIDA_MEDIDOR_2',
					"Indice" : '',
					"value": ""
				},
				"txtEstActBridaDos": {
					"grupo" : "ActBridaDos",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Brida Medidor 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_BRIDA_MEDIDOR_2',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewBridaDos": {
					"grupo" : "ActBridaDos",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Brida Medidor 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerActManome": {
					"grupo" : "ActManome",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Manometro De Ref",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : 'NRO_SERIE_MANOMETRO_DE_REF',
					"Indice" : '',
					"value": ""
				},
				"txtEstActManome": {
					"grupo" : "ActManome",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Manometro De Ref",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_MANOMETRO_DE_REFERENCIA',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewManome": {
					"grupo" : "ActManome",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Manometro De Ref",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerActBridaFilUno": {
					"grupo" : "ActBridaFilUno",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Brida Filtro 1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : 'NRO_SERIE_BRIDA_FILTRO_1',
					"Indice" : '',
					"value": ""
				},
				"txtEstActBridaFilUno": {
					"grupo" : "ActBridaFilUno",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Brida Filtro 1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_BRIDA_FILTRO_1',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewBridaFilUno": {
					"grupo" : "ActBridaFilUno",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Brida Filtro 1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerActBridaFilDos": {
					"grupo" : "ActBridaFilDos",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Brida Filtro 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : 'NRO_SERIE_BRIDA_FILTRO_2',
					"Indice" : '',
					"value": ""
				},
				"txtEstActBridaFilDos": {
					"grupo" : "ActBridaFilDos",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Brida Filtro 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_BRIDA_FILTRO_2',
					"Indice" : '',
					"value": ""
				},
				"txtSernewBridaFilDos": {
					"grupo" : "ActBridaFilDos",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Brida Filtro 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerActTapaMed": {
					"grupo" : "ActTapaMed",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Tapa Medidor 1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : 'NRO_SERIE_TAPA_MEDIDOR_1',
					"Indice" : '',
					"value": ""
				},
				"txtEstActTapaMed": {
					"grupo" : "ActTapaMed",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Tapa Medidor 1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_TAPA_MEDIDOR_1',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewTapaMed": {
					"grupo" : "ActTapaMed",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Tapa Medidor 1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerActTapaMedDos": {
					"grupo" : "ActTapaMedDos",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Tapa Medidor 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : 'NRO_SERIE_TAPA_MEDIDOR_2',
					"Indice" : '',
					"value": ""
				},
				"txtEstActTapaMedDos": {
					"grupo" : "ActTapaMedDos",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Tapa Medidor 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_TAPA_MEDIDOR_2',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewTapaMedDos": {
					"grupo" : "ActTapaMedDos",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Tapa Medidor 2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerActSensor": {
					"grupo" : "ActSensor",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Sensor Temperatura",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : 'NRO_SERIE_SENSOR_TEMPERATURA',
					"Indice" : '',
					"value": ""
				},
				"txtEstActSensor": {
					"grupo" : "ActSensor",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Sensor Temperatura",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_SENSOR_TEMPERATURA',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewSensor": {
					"grupo" : "ActSensor",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Sensor Temperatura",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerActPlaca": {
					"grupo" : "ActPlaca",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Placa ciega",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : 'NRO_SERIE_PLACA_CIEGA',
					"Indice" : '',
					"value": ""
				},
				"txtEstActPlaca": {
					"grupo" : "ActPlaca",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Placa ciega",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_PLACA_CIEGA',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewPlaca": {
					"grupo" : "ActPlaca",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Placa ciega",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerActBridaCie": {
					"grupo" : "BridaCie",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Brida ciega",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : 'NRO_SERIE_BRIDA_CIEGA',
					"Indice" : '',
					"value": ""
				},
				"txtEstActBridaCie": {
					"grupo" : "BridaCie",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Brida ciega",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_BRIDA_CIEGA',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewBridaCie": {
					"grupo" : "BridaCie",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Brida ciega",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerActManifoldQ1": {
					"grupo" : "ManifoldQ1",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Manifold Brida Valblo Q1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : 'NSERIE_MANIFOLD_BRIDA_VALBLOQ1',
					"Indice" : '',
					"value": ""
				},
				"txtEstActManifoldQ1": {
					"grupo" : "ManifoldQ1",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Manifold Brida Valblo Q1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_MANIFOLD_BRIDA_VALBLOQ1',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewManifoldQ1": {
					"grupo" : "ManifoldQ1",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Manifold Brida Valblo Q1",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerActManifoldQ2": {
					"grupo" : "ManifoldQ2",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Manifold Brida Valblo Q2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : 'NSERIE_MANIFOLD_BRIDA_VALBLOQ2',
					"Indice" : '',
					"value": ""
				},
				"txtEstActManifoldQ2": {
					"grupo" : "ManifoldQ2",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Manifold Brida Valblo Q2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_MANIFOLD_BRIDA_VALBLOQ2',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewManifoldQ2": {
					"grupo" : "ManifoldQ2",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Manifold Brida Valblo Q2",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerActPorta": {
					"grupo" : "Porta",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Porta Placa",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : 'NRO_SERIE_PORTA_PLACA',
					"Indice" : '',
					"value": ""
				},
				"txtEstActPorta": {
					"grupo" : "Porta",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Porta Placa",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_PORTA_PLACA',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewPorta": {
					"grupo" : "Porta",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Porta Placa",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerActPlacaFilt": {
					"grupo" : "PlacaFilt",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Placa Filtro Gen Puls",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : 'NROSERIE_PLACA_FILTRO_GEN_PULS',
					"Indice" : '',
					"value": ""
				},
				"txtEstActPlacaFilt": {
					"grupo" : "PlacaFilt",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Placa Filtro Gen Puls",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_PLACA_FILTRO_GEN_PULSOS',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewPlacaFilt": {
					"grupo" : "PlacaFilt",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Placa Filtro Gen Puls",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerActValBy": {
					"grupo" : "ValBy",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Valvula By-Pass",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : 'NRO_SERIE_VALVULA_BY-PASS',
					"Indice" : '',
					"value": ""
				},
				"txtEstActValBy": {
					"grupo" : "ValBy",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Valvula By-Pass",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_VALVULA_BY-PASS',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewValBy": {
					"grupo" : "ValBy",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Valvula By-Pass",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerActTornillo": {
					"grupo" : "Tornillo",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Tornillo Ajustew Pre Reg",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : 'NSERIE_TORNILLO_AJUSTE_PRE_REG',
					"Indice" : '',
					"value": ""
				},
				"txtEstActTornillo": {
					"grupo" : "Tornillo",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Tornillo Ajustew Pre Reg",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_TORNILLO_AJUSTE_PRE_REG',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewTornillo": {
					"grupo" : "Tornillo",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Tornillo Ajustew Pre Reg",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				},
				"txtSerActTapaPro": {
					"grupo" : "TapaPro",
					"idx" : 1,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Serie Actual Tapa Propulsor",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : 'NRO_SERIE_TAPA_PROPULSOR',
					"Indice" : '',
					"value": ""
				},
				"txtEstActTapaPro": {
					"grupo" : "TapaPro",
					"idx" : 2,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": false,
					"fieldDescription": "Estado Actual Tapa Propulsor",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : false,
					"CaractName" : 'ESTADO_TAPA_PROPULSOR',
					"Indice" : '',
					"value": ""
				},
				"txtSerNewTapaPro": {
					"grupo" : "TapaPro",
					"idx" : 3,
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": true,
					"editable": true,
					"fieldDescription": "Serie Nuevo Tapa Propulsor",
					"CarSerie" : '',
					"CarEstado" : '',
					"IsOnlyInd" : true,
					"IsSerial" : true,
					"CaractName" : '',
					"Indice" : '',
					"value": ""
				}
			},
			"PartCreateSummary": {
				"MaterialUOMLstPkr": {
					"container": 'FormCellContainer',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "UM",
					"value": ""	
				}
			},
			"pageTestForm3": {
				"IndiceOdoAnal": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Indice Odo. Analit.",
					"value": ""	
				},
				"IndiceOdoFisio": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Indice Odo. Fisio %",
					"value": ""	
				},
				"UnidadPres": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Unidad de medida",
					"value": ""	
				},
				"PresRed": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Presión de red",
					"value": ""	
				},
				"UnidadPresAt": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Unidad de medida",
					"value": ""	
				},
				"PresAtmo": {
					"container": 'FormCellContainer0',
					"mandatory": true,
					"visible": true,
					"editable": true,
					"fieldDescription": "Presión atmosférica",
					"value": ""	
				},
				"UnidadTemp": {
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "Unidad de medida (temperatura)",
					"value": ""	
				},
				"Temperatura": {
					"container": 'FormCellContainer0',
					"mandatory": false,
					"visible": false,
					"editable": false,
					"fieldDescription": "Temperatura",
					"value": ""	
				}
			}
			
		};
	}
}