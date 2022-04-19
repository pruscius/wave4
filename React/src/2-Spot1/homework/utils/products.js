let products = [
	{
		id: 1,
		nombre: "zapatillas",
		color: [{ disponible: true }, { colores: ["rosado", "azul"] }],
	},
	{
		id: 2,
		nombre: "Chaleco",
		color: [{ disponible: true }, { colores: ["azul"] }],
	},
	,
	{
		id: 3,
		nombre: "Sombrero",
		color: [{ disponible: false }, { colores: ["rosado", "azul"] }],
	},
	{
		id: 4,
		nombre: "jersey",
		color: [{ disponible: true }, { colores: ["negro"] }],
	},
	,
	{
		id: 5,
		nombre: "camisa",
		color: [{ disponible: true }, { colores: ["blanco"] }],
	},
	{
		id: 6,
		nombre: "Lentes",
		color: [{ disponible: false }, { colores: ["negro", "transparente"] }],
	},
	,
	{
		id: 7,
		nombre: "unknown",
		color: [{ disponible: true }, { colores: ["transparente", "azul"] }],
	},
	,
	{
		id: 8,
		nombre: "Guante",
		color: [{ disponible: true }, { colores: ["rosado", "azul"] }],
	},
	{
		id: 9,
		nombre: "unknown",
		color: [{ disponible: true }, { colores: ["rosado", "gris"] }],
	},
];

module.exports={products}