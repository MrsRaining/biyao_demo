var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
	"nanzhuang": {
		"男士外套": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"男士上装": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"男士下装": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"nvzhuang": {
		"女士上装": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"女士下装": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"女裙": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"特色女装": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
	},
	"yanjing": {
		"眼镜": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
	},
	"peishi": {
		"内衣": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"袜子": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"配饰": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"yingtong": {
		"婴儿用品": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"玩具床车": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"童装童靴": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"儿童配饰": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"妈妈专区": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"xiexue": {
		"男鞋": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"女鞋": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"yundong": {
		"户外服饰": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"运动服饰": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"运动鞋": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"运动装备": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"piju": {
		"真皮配件": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"男包": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"女包": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"chuxing": {
		"出行必备": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"功能箱包": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"gehu": {
		"个护": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"meizhuang": {
		"基础护肤": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"香水彩妆": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"洗发护发": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"身体护理": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"jujia": {
		"家纺": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"生活用品": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"chuju": {
		"水具": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"厨具": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"jiadian": {
		"家电": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"jiazhuang": {
		"厨卫用品": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"家装软饰": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"五金工具": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"jiaju": {
		"卧室": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"书房": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"客厅": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"餐厅": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"儿童家具": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"shuma": {
		"数码": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"qipei": {
		"汽配": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	}
});

module.exports = mongoose.model("Good", productSchema);