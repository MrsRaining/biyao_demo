var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
	"nanzhuang": {
		"nanshiwaitao": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"nanshishangyi": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"nanshixiayi": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"nvzhuang": {
		"nvshishangzhuang": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"nvshixiazhuang": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"nvqun": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"tesenvzhuang": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
	},
	"yanjing": {
		"yanjing": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
	},
	"peishi": {
		"neiyi": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"wazi": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"peishi": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"yingtong": {
		"yingeryongpin": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"wanjuchuangche": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"tongzhuangtongxue": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"ertongpeishi": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"mamazhuanqu": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"xiexue": {
		"nanxie": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"nvxie": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"yundong": {
		"huwaifushi": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"yundongfushi": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"yundongxie": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"yundongzhuangbei": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"piju": {
		"zhenpipeijian": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"nanbao": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"nvbao": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"chuxing": {
		"chuxingbibei": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"gongnengxiangbao": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"gehu": {
		"gehu": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"meizhuang": {
		"jichufufu": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"xiangshuicaizhuang": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"xifahufa": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"shentihuli": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"jujia": {
		"jiafang": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"shenghuoyongpin": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"chuju": {
		"shuiju": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"chuju": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"jiadian": {
		"jiadian": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"jiazhuang": {
		"chuweiyongpin": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"jiazhuangruanshi": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"wujingongju": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"jiaju": {
		"woshi": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"shufang": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"keting": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"canting": {
			"success": Number,
			"data": {
				"productList": Array
			}
		},
		"ertongjiaju": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"shuma": {
		"shuma": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	},
	"qipei": {
		"qipei": {
			"success": Number,
			"data": {
				"productList": Array
			}
		}
	}
});

module.exports = mongoose.model("Good", productSchema);