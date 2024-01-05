export const ContractABI =[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "assets",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "assetId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "assetType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "templateUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "value",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "currentOwner",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "_address",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "size",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "realEstateType",
						"type": "string"
					},
					{
						"internalType": "uint8",
						"name": "noOfFloors",
						"type": "uint8"
					}
				],
				"internalType": "struct Assets.RealEstate",
				"name": "realEstate",
				"type": "tuple"
			},
			{
				"internalType": "bool",
				"name": "sell",
				"type": "bool"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "registerationNo",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "modelNo",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "company",
						"type": "string"
					},
					{
						"internalType": "uint8",
						"name": "wheels",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "engineNo",
						"type": "string"
					}
				],
				"internalType": "struct Assets.Car",
				"name": "car",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_transferTo",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_assetId",
				"type": "uint256"
			}
		],
		"name": "buyAsset",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_modelNo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_company",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_registerationNo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_templateUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_value",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "_wheels",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "_engineNo",
				"type": "string"
			}
		],
		"name": "createCarAssets",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_realEstateType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_addr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_size",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_templateUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_value",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "_floors",
				"type": "uint8"
			}
		],
		"name": "createRealAssets",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getAllAssets",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "assetId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "assetType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "templateUrl",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "value",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "currentOwner",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "prevOwner",
						"type": "address[]"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "_address",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "size",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "realEstateType",
								"type": "string"
							},
							{
								"internalType": "uint8",
								"name": "noOfFloors",
								"type": "uint8"
							}
						],
						"internalType": "struct Assets.RealEstate",
						"name": "realEstate",
						"type": "tuple"
					},
					{
						"internalType": "bool",
						"name": "sell",
						"type": "bool"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "registerationNo",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "modelNo",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "company",
								"type": "string"
							},
							{
								"internalType": "uint8",
								"name": "wheels",
								"type": "uint8"
							},
							{
								"internalType": "string",
								"name": "engineNo",
								"type": "string"
							}
						],
						"internalType": "struct Assets.Car",
						"name": "car",
						"type": "tuple"
					}
				],
				"internalType": "struct Assets.Asset[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllAssetsMarketplace",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "assetId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "assetType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "templateUrl",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "value",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "currentOwner",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "prevOwner",
						"type": "address[]"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "_address",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "size",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "realEstateType",
								"type": "string"
							},
							{
								"internalType": "uint8",
								"name": "noOfFloors",
								"type": "uint8"
							}
						],
						"internalType": "struct Assets.RealEstate",
						"name": "realEstate",
						"type": "tuple"
					},
					{
						"internalType": "bool",
						"name": "sell",
						"type": "bool"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "registerationNo",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "modelNo",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "company",
								"type": "string"
							},
							{
								"internalType": "uint8",
								"name": "wheels",
								"type": "uint8"
							},
							{
								"internalType": "string",
								"name": "engineNo",
								"type": "string"
							}
						],
						"internalType": "struct Assets.Car",
						"name": "car",
						"type": "tuple"
					}
				],
				"internalType": "struct Assets.Asset[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAssetId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_assetId",
				"type": "uint256"
			}
		],
		"name": "getAssets",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "assetId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "assetType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "templateUrl",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "value",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "currentOwner",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "prevOwner",
						"type": "address[]"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "_address",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "size",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "realEstateType",
								"type": "string"
							},
							{
								"internalType": "uint8",
								"name": "noOfFloors",
								"type": "uint8"
							}
						],
						"internalType": "struct Assets.RealEstate",
						"name": "realEstate",
						"type": "tuple"
					},
					{
						"internalType": "bool",
						"name": "sell",
						"type": "bool"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "registerationNo",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "modelNo",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "company",
								"type": "string"
							},
							{
								"internalType": "uint8",
								"name": "wheels",
								"type": "uint8"
							},
							{
								"internalType": "string",
								"name": "engineNo",
								"type": "string"
							}
						],
						"internalType": "struct Assets.Car",
						"name": "car",
						"type": "tuple"
					}
				],
				"internalType": "struct Assets.Asset",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_assetId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isSell",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "sellAsset",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "toString",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "toString",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "toString",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "value",
				"type": "bytes32"
			}
		],
		"name": "toString",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_transferTo",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_assetId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_assetId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "val",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "updateValue",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]