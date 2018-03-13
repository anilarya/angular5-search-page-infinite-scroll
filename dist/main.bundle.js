webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/ScrollTracker.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollTracker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollTracker = /** @class */ (function () {
    function ScrollTracker() {
        this.scrolled = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ScrollTracker.prototype.onWindowScroll = function () {
        var endReached = false;
        //In chrome and some browser scroll is given to body tag 
        var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        var body = document.body, html = document.documentElement, docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        var windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
            endReached = true;
        }
        this.scrolled.emit({
            pos: windowBottom,
            endReached: endReached
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ScrollTracker.prototype, "scrolled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:scroll", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ScrollTracker.prototype, "onWindowScroll", null);
    ScrollTracker = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[scrollTracker]',
        })
    ], ScrollTracker);
    return ScrollTracker;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".subheader{\n\tpadding-top: 90px;\n    padding-right: 24px;\n    padding-left: 34px;\n    background-color: rgba(45, 56, 74, 0.77);\n}\n\n.http-loader{\n  margin: auto;\n  width: 50%;\n  position: relative;\n  left: 25%;\n}\n\n.http-loader .images{\n  height: 12%;\n    width: 12%;\n}\n\n.add-item{\n\tposition: relative;\n\tpadding-bottom: 50px;\n\theight: 30px\n}\n\n.add-text{\n\twidth: 80%;\n\theight: 30px;\n\tpadding: 5px;\n\tfont-size: 20px;\n}\n\nbutton{\n\theight: 33px;\n    width: 66px;\n    padding: 5px;\n}\n\nul{\n\tlist-style: none; \n\tcolor: #686868;\n\tmargin-left: -40px;\n\tmargin-bottom: 0px;\n}\n\nli{\n\tborder-bottom: 1px solid #bfbfbf;\n\tbackground-color:  white;\n\tpadding: 10px 0px; \n}\n\nli:hover{ \n\t background-color: #48c0dd17;\n}\n\n.search-result-div{\n\tpadding: 16px;\n    border-bottom: 1px solid #E0E0E0;\n}\n\n.main-text{\n\tfont-size: 14px;  \n    color: #7e9496;\n    font-weight: 700;\n    padding-bottom: 5px;\n}\n\n.other-info{\n\tfont-size: 12px;\n}\n\n.other-info .serial-number{\n\tcolor : orange;\n}\n\n.cursor-pointer{\n\tcursor: pointer;\n}\n\n.chip{ \n    color: white;\n    /* background: #4d90fe; */\n    border-radius: 25px;\n    background-color: #48c0dd;\n    padding: -4px;\n    padding-left: 10px;\n    padding-right: 10px;\n    font-weight: 700;\n}\n\n.other-info .floating-box{\n\tfloat: left; \n\tpadding-right: 14px;\n}\n\n.other-info .value{\n\tpadding-left: 1px;\n\tfont-weight: 700;\n}\n\n.new-search-div {\n  display: inline-block;\n  width: 100%;\n  height: 56px;\n  position: relative;\n  top: -75px;\n/* width: 80%; */ \n  padding: 01px 39px;\n}\n\n.new-search-div .dropdown-menu {\n  width: 86%;\n}\n\n.new-search-div .material-icons.cancel-icon {\n  color: #999;\n  position: relative;\n  top: -52px;\n  left: 931px;\n  cursor: pointer;\n}\n\n.new-search-div .search-text {\n  background: #fff;\n  margin: 0px;\n  border: 0px none !important;\n  width: 100%;\n  border: 1px solid #e1e1e1;\n  height: 100%;\n  outline: none;\n  padding: 27px;\n  font-size: 14px;\n}\n\n.new-search-div .search-text:focus {\n  border-bottom: 0px none !important;\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n\n.new-search-div .dropdown-menu > li.active {\n  background-color: blue;\n}\n\n.new-search-div .dropdown-menu > li > a, .new-search-div .dropdown-menu > li.active > a, .new-search-div .dropdown-menu > li > a:hover, .new-search-div .dropdown-menu > li.active > a:hover, .new-search-div .dropdown-menu > li > a:focus, .new-search-div .dropdown-menu > li.active > a:focus {\n  color: red;\n  background-color: transparent;\n}\n\n.search-content{\n\twidth: 85%;\n    margin: 0 auto;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = " <div>\n\t <app-header> </app-header>\n\t <div class=\"subheader\">\n\t\t <h1></h1>\n\t </div>\n\t <div class=\"new-search-div\">\n\t\t\t\t<input id=\"searchInput\" type=\"text\" class=\"search-text\" focus-me=\"shouldBeOpen\"  [(ngModel)]=\"searchKey\"   (keyup)=\"searchType($event)\" placeholder=\"Search\"/>\n\t\t\t\t<!-- <i class=\"material-icons  cancel-icon\" (click)=\"clearSearch()\">cancel</i> -->\n\t\t</div>\n\t <div scrollTracker (scrolled)=\"updateScrollPos($event)\">\n\t\t<div class=\"search-content\">\n\t\t\t\t<ul>\n\t\t\t\t\t[[applications]]\n\t\t\t\t\t<li *ngFor=\"let app of applications; let i = index\" [attr.data-index]=\"i\" class=\"col-sm-12 search-result-div\"> \n\t\t\t\t\t\t<div class=\"col-sm-9 no-padding\">\n\t\t\t\t\t\t\t<div (click)=\"goToProfile(app)\" class=\"col-sm-6 cursor-pointer\">\n\t\t\t\t\t\t\t\t<div class=\"main-text\" *ngIf=\"app.business_details; else mainApplicant\">  [[app.business_details[0].registered_name]]\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t<ng-template  #mainApplicant>\n\t\t\t\t\t\t\t\t\t<div class=\"main-text\"> [[ getMainApplicant(app.individual_details).first_name ]]\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"other-info col-sm-12\" >\n\t\t\t\t\t\t\t\t<div class=\"value serial-number floating-box\">SL  : [[ app.metadata.sl_no ]] \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"chip floating-box\"> [[ getLoanProductType(app.metadata.product_type) ]]\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div><br>\n\n\t\t\t\t\t\t\t<div class=\"other-info col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\tCity: <span class=\"value\" *ngIf=\"app.metadata.app_source_name!='cl_app_form'\"> \n\t\t\t\t\t\t\t\t\t[[ getOperatingCity(app.address_details) ]]\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<span class=\"value\" *ngIf=\"app.metadata.app_source_name=='cl_app_form'\"> \n\t\t\t\t\t\t\t\t\t\t[[ getMainApplicantCurrentAddress(app.address_details).city ]]\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\tSM: <span class=\"value\"> [[getSmOwner(app.user_pool_details)  ]]</span>\n\t\t\t\t\t\t\t\t\tT/o: <span class=\"value\">&#x20B9; [[app.turnover ]]</span>\n\t\t\t\t\t\t\t\t\tReq Amt : <span class=\"value\" *ngIf='app.fund_end_use'>&#x20B9; [[ app.fund_end_use.loan_amount_required ]] </span>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div> \n\t\t\t\t\t\t<div class=\"col-sm-3 no-padding pull-right\">\n\t\t\t\t\t\t\t<div class=\"date\"> [[app.metadata.created_time| date: 'dd MMM yyyy T hh:mm:ss a' ]]\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"status\"> <span class='chip'> [[getAppStatus(app.metadata.status)]] </span></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li class=\"col-sm-12 center search-result-div\" *ngIf=\"applications.length == 0\">\n\t\t\t\t\t\t\t\t\t<p class=\"res-no-data\" *ngIf='!loading_auto'><b>Oops! No data found.</b></p>\n\t\t\t\t\t\t<p class=\"res-no-data\" *ngIf='loading_auto'><b>Searching...</b></p>\n\t\t\t\t\t</li> \n\t\t\t\t</ul>  \n\t\t</div> \n\t </div>\n\n\t<div class=\"http-loader\" *ngIf=\"loading_auto\">\n\t\t<!-- <app-custom-loader></app-custom-loader> -->\n\t\t <img class=\"images\" src=\"../assets/images/loader.gif\" alt=\"CF Logo\" />\n\t</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility_service__ = __webpack_require__("./src/app/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_const__ = __webpack_require__("./src/app/app.const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_http_loader_spinkits__ = __webpack_require__("./node_modules/ng-http-loader/spinkits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_http_loader_spinkits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_http_loader_spinkits__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    //===========================================================
    function AppComponent(http, Utility) {
        this.http = http;
        this.Utility = Utility;
        //=========================Variables for binding===============
        this.baseUrlAppForm = 'https://apps.stageseva.capitalfloat.com/';
        this.searchAPI = this.baseUrlAppForm + 'apps/metadata/search';
        this.items = ['angular4', 'react', 'angularjs1x', 'angular4'];
        this.searchKey = '';
        this.curScrollPos = '';
        this.endReached = '';
        this.applications = [];
        this.loading_auto = false;
        this.spinkit = __WEBPACK_IMPORTED_MODULE_4_ng_http_loader_spinkits__["Spinkit"];
        this.productTypeSet = [];
        this.statusSet = [];
        this.masterList = [];
        this.isSearchEnd = false;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.opts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        this.params = {
            'page_context': {
                "limit": 10,
                "sort_order": 1,
                "sort_param": "updated_time"
            },
            'product_type_set': [],
            'status_set': []
        };
        this.getLoanProductType = function (id) {
            return this.Utility.objectArrayFindFromKey(this.masterList.loan_product_type, 'id', id).label;
        };
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('x-initiator', '19');
        this.opts.headers = this.headers;
    }
    AppComponent.prototype.searchType = function (e) {
        if (e.keyCode == 13) {
            this.applications = [];
            if (this.searchKey) {
                var param1 = {
                    'search_text': this.searchKey
                };
                this.getAllApplications(param1);
            }
            else {
                var params = {
                    'page_context': {
                        "limit": 10,
                        "sort_order": 1,
                        "sort_param": "updated_time"
                    },
                    'product_type_set': this.productTypeSet,
                    'status_set': this.statusSet,
                };
                this.getAllApplications(params);
            }
        }
        if (e.keyCode && !this.searchKey) {
            this.applications = [];
            this.getAllApplications(this.params);
        }
    };
    AppComponent.prototype.clearSearch = function () {
    };
    AppComponent.prototype.getMainApplicant = function (_individualList) {
        return this.Utility.findInObjectsArrayFromKey(_individualList, 'application_context', __WEBPACK_IMPORTED_MODULE_3__app_const__["a" /* MASTER_LIST */].ApplicationContext.MainApplicantId, false);
    };
    AppComponent.prototype.getSmOwner = function (_poolContactList) {
        var _objSearch = this.Utility.findInObjectsArrayFromKey(_poolContactList, 'pool_context', __WEBPACK_IMPORTED_MODULE_3__app_const__["a" /* MASTER_LIST */].PoolContext.Sales, false);
        return _objSearch ? _objSearch.name : 'NA';
    };
    AppComponent.prototype.getMainApplicantCurrentAddress = function (addressList) {
        return this.Utility.findInObjectsArrayFromKey(addressList, 'address_type', __WEBPACK_IMPORTED_MODULE_3__app_const__["a" /* MASTER_LIST */].AddressTypes.CurrentAddress, false) || {};
    };
    AppComponent.prototype.getOperatingCity = function (addressList) {
        var _city = 'NA';
        if (addressList) {
            addressList.forEach(function (val, idx) {
                if (val.entity_type == 100 && val.address_type == 2000) {
                    _city = val.city;
                }
                ;
            });
        }
        return _city;
    };
    ;
    AppComponent.prototype.getAppStatus = function (id) {
        return this.Utility.objectArrayFindFromKey(this.masterList.application_status, 'id', id).label;
    };
    AppComponent.prototype.getAllApplications = function (params) {
        var _this = this;
        console.log("GET WITH HEADERS");
        var _url = "" + this.searchAPI;
        this.loading_auto = true;
        this.http.post(_url, JSON.stringify(params), this.opts).subscribe(function (res) {
            var data = res.json().response.result;
            for (var i = 0; i < data.length; i++) {
                _this.applications.push(data[i]);
            }
            if (data.length < 10) {
                _this.isSearchEnd = true;
            }
            else {
                _this.isSearchEnd = false;
            }
            _this.loading_auto = false;
        }, function (msg) { return console.error("Error: " + msg); });
    };
    AppComponent.prototype.goToProfile = function (data) {
        var url = '', PARTNER_BASE_URI = 'http://safe.stageseva.capitalfloat.com:9021/cf/admin/dboard', RCP_BASE_URI = 'http://safe.stageseva.capitalfloat.com:9021/cf/admin/dboardrcp';
        url = PARTNER_BASE_URI + '/' + data.app_id + '/profile';
        if (data.metadata.app_source_name === 'dsa_ondoarding_form') {
            url = RCP_BASE_URI + '/' + data.app_id + '/profile';
        }
        window.open(url, '_blank');
    };
    AppComponent.prototype.updateScrollPos = function (e) {
        this.curScrollPos = e.pos;
        this.endReached = e.endReached;
        if (this.endReached && !this.isSearchEnd) {
            var _len = this.applications.length - 1;
            var params = {
                "page_context": {
                    "before": _len > 0 ? this.applications[_len].metadata.last_modified_time : "",
                    "limit": 11,
                    "sort_order": 1,
                    "sort_param": "updated_time"
                },
                'search_text': this.searchKey ? this.searchKey : '',
                'product_type_set': this.productTypeSet,
                'status_set': this.statusSet,
            };
            params['product_type_set'] = this.productTypeSet;
            params['status_set'] = this.statusSet;
            this.getAllApplications(params);
        }
    };
    AppComponent.prototype.getMasterList = function () {
        var _this = this;
        var _url = this.baseUrlAppForm + "apps/master_list";
        this.http.get(_url, this.opts).subscribe(function (_res) {
            _this.masterList = _res.json();
            _this.getAllApplications(_this.params);
        }, function (_msg) { });
    };
    ;
    AppComponent.prototype.ngOnInit = function () {
        //called after the constructor and called  after the first ngOnChanges() 
        this.getMasterList();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            interpolation: ['[[', ']]']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__utility_service__["a" /* UtilityService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.const.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export dist */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MASTER_LIST; });

var dist = '../path/to/dist/';
var MASTER_LIST = {
    AppSegment: {
        Business: 100
    },
    AppArchiveStatus: {
        ArchiveForRenewal: 100,
        ArchiveForNotInterest: 200
    },
    ApplicationContext: {
        MainApplicantId: 10,
        CoApplicant: 20
    },
    AppLifecycle: {
        New: 100,
        Renewal: 200,
        Enhancement: 300
    },
    PoolContext: {
        creator: 1000,
        applicant: 2000,
        beneficiary: 3000,
        partner: 4000,
        agency: 5000,
        merchant: 6000,
        supplier: 7000,
        Sales: 8000,
        Sales_master: 8100,
        Credit: 9000,
        Credit_master: 9100,
        Ops: 10000,
        Ops_master: 10100,
        Ops_QC: 10110,
        Ops_marketplace: 10120,
        Ops_Disburse: 10130,
        Ops_Banking: 10140,
        Ops_Compliance: 10150,
        BD: 11000,
        BST: 12000
    },
    AddressTypes: {
        PermanentAddress: 100,
        CurrentAddress: 200,
        KycAddress: 300
    },
    AddressActiveTypes: {
        NA: 0,
        ACTIVE: 100
    },
    BusinessAddressTypes: {
        OperatingAddress: 2000,
        RegisteredAddress: 4000,
        FactoryAddress: 3000,
        Others: 7000
    },
    BusinessNature: {
        Services: 200
    },
    ContactTypes: {
        Mobile: 200,
        Email: 100,
        Landline: 300
    },
    ContactContexts: {
        UNDEFINED: 0
    },
    BusinessPoiTypes: {
        Gstn: 200,
        Pan: 300,
        Vat: 400
    },
    IndividualPoiTypes: {
        Pan: 100,
        Aadhar: 200,
        DrRegKey: 1000,
    },
    EntityTypes: {
        Business: 100,
        Individual: 200
    },
    PartnerTypes: {
        B2C_Marketplace: 100,
        B2B_Marketplace: 200,
        OnlineTravelAggregator: 300,
        DigitalPaymentsRemittance: 400,
        POS: 500,
        DISTRIBUTOR: 600,
        Others: 2000
    },
    EcosystemVerify: {
        Verified: 100,
        NotVerified: 0
    },
    EcosystemXnTypes: {
        PurchaseByVolume: 300,
        PurchaseByAmount: 400
    },
    EntityKycStatus: {
        KycNotAvailable: 0
    },
    AppStatus: {
        LeadCreated: 100,
        AppInProgress: 200,
        AppSubmitted: 300,
        AppVerified: 400,
        AppRejected: 1200
    },
    AppSource: {
        ClAppForm: 'cl_app_form',
        FsApp: 'fs_app_form',
        FS: 3
    },
    HubOrSpoke: {
        Spoke: 200
    },
    LoanProductTypes: {
        UBL: 100,
        PL: 300,
        PLP: 310,
        IPL: 320,
        BPL: 330,
        SCL: 500,
        BS: 600,
        DR: 700,
        FF: 1100,
        AB: 1200
    },
    Perfios: {
        ByBankCredentials: 100,
        ByPdf: 200
    }
};


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_loading__ = __webpack_require__("./node_modules/ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_http_loader_ng_http_loader_module__ = __webpack_require__("./node_modules/ng-http-loader/ng-http-loader.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_http_loader_ng_http_loader_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_http_loader_ng_http_loader_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__my_component_my_component_component__ = __webpack_require__("./src/app/my-component/my-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_product_component__ = __webpack_require__("./src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__member_member_component__ = __webpack_require__("./src/app/member/member.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ScrollTracker_directive__ = __webpack_require__("./src/app/ScrollTracker.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utility_service__ = __webpack_require__("./src/app/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__custom_loader_custom_loader_component__ = __webpack_require__("./src/app/custom-loader/custom-loader.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_10__product_product_component__["a" /* ProductComponent */] },
    { path: 'member', component: __WEBPACK_IMPORTED_MODULE_11__member_member_component__["a" /* MemberComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__my_component_my_component_component__["a" /* MyComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_10__product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_11__member_member_component__["a" /* MemberComponent */],
                __WEBPACK_IMPORTED_MODULE_12__ScrollTracker_directive__["a" /* ScrollTracker */],
                __WEBPACK_IMPORTED_MODULE_14__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__custom_loader_custom_loader_component__["a" /* CustomLoaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_loading__["a" /* LoadingModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng_http_loader_ng_http_loader_module__["NgHttpLoaderModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true }),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__utility_service__["a" /* UtilityService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/custom-loader/custom-loader.component.css":
/***/ (function(module, exports) {

module.exports = " "

/***/ }),

/***/ "./src/app/custom-loader/custom-loader.component.html":
/***/ (function(module, exports) {

module.exports = " <i class=\"fa fa-spinner fa-spin\" style=\"font-size:60px\"></i>"

/***/ }),

/***/ "./src/app/custom-loader/custom-loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomLoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomLoaderComponent = /** @class */ (function () {
    function CustomLoaderComponent() {
    }
    CustomLoaderComponent.prototype.ngOnInit = function () {
    };
    CustomLoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-custom-loader',
            template: __webpack_require__("./src/app/custom-loader/custom-loader.component.html"),
            styles: [__webpack_require__("./src/app/custom-loader/custom-loader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomLoaderComponent);
    return CustomLoaderComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,300,700);\nheader {\n  height: 64px;\n}\n.header-container {\n  height: 64px;\n  background-color: #2d384a;\n  color: #fff;\n  width: 100%;\n}\n.logo {\n  padding: 16px;\n  display: inline-block;\n  vertical-align: top;\n}\n.logo img {\n  height: 32px;\n}\n.header-tab {\n  float: right;\n  cursor: pointer;\n  height: 100%;\n}\n.header-tab .toggle-container {\n  padding: 20px 16px;\n  display: inline-block;\n  position: relative;\n}\n.header-tab .icon {\n  float: left;\n  color: #fff;\n}\n.header-tab .name {\n  float: left;\n  line-height: 24px;\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.header-tab.icon-with-name .icon {\n  padding-right: 8px;\n}\n.header-tab .superscript {\n  height: 18px;\n  width: 18px;\n  background-color: #2d384a;\n  border-radius: 9px;\n  position: absolute;\n  left: 30px;\n  top: 10px;\n  color: #fff;\n  text-align: center;\n}\n.header-tab .dropdown-menu {\n  border: none;\n  border-radius: 2px;\n  -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.20);\n          box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.20);\n  min-width: 180px;\n  right: 24px;\n  left: auto;\n  color: rgba(0, 0, 0, 0.87);\n}\n.hamburger-menu {\n  float: none;\n  display: inline-block;\n}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"header-container\" id=\"top-view\">\n        <!-- <div class=\"header-tab pull-left\" ng-click=\"showMenu = !showMenu\">\n            <span class=\"toggle-container\">\n                <span class=\"icon\">\n                    <i class=\"material-icons\">menu</i>\n                </span>\n            </span>  \n        </div> --> \n        <a data-ui-sref=\"dashboard\" class=\"logo pull-left\">\n            <img src=\"../assets/images/cf-logo-color.svg\" alt=\"CF Logo\" />\n        </a>\n        <div class=\"pull-right\">\n            <!-- <div class=\"header-tab pull-left\" ng-if=\"commonData.showSearch\">\n                <span class=\"toggle-container\" ng-click=\"toggleInSearch()\" ng-hide=\"false\">\n                    <span class=\"icon search-icon\">\n                        <i class=\"material-icons\">search</i>\n                    </span>\n                </span>\n            </div> -->\n           \n            <div class=\"header-tab\" dropdown auto-close=\"outsideClick\">\n                <span class=\"toggle-container\" dropdown-toggle>\n                    <span class=\"icon account-icon\">\n                        <i class=\"material-icons\">account_circle</i>\n                    </span>\n                </span>\n                <ul class=\"dropdown-menu\" role=\"menu\">\n                    <div class=\"account-div\">\n                        <div class=\"name-container\">\n                            <div class=\"first-letter\"> </div>\n                            <div class=\"name-mail-container\">\n                                <p>[[loginFName | lowercase]]</p>\n                                <p>[[loginEmail | lowercase]]</p>\n                            </div>\n                        </div>\n                        <div class=\"log-out-container\">\n                            <button class=\"btn pull-right\" (click)=\"logoutFn()\">Logout</button>\n                        </div>\n                    </div>\n                </ul>\n            </div>\n           <!--  <div class=\"header-tab\" dropdown auto-close=\"outsideClick\">\n                <span class=\"toggle-container\" dropdown-toggle>\n                    <span class=\"icon account-icon\">\n                        <img src=\"{{=URL(r=request,c='static',f='newsearchapp/assets/images/9dots.png')}}\" alt=\"CF Logo\"  height=\"28\"  width=\"19\" />\n                    </span>\n                </span>\n                <ul class=\"dropdown-menu\" role=\"menu\"> \n                    {{ include \"angular/newsearchapp/common/appscollection.html\" }}\n                </ul>\n            </div> -->\n            <div style=\"position: relative;top: 26px;float: right;cursor: pointer;\"> \n                    <a popover-template=\"'appscollection.html'\" popover-placement=\"bottom\" popover-is-open=\"commonData.popOverOpen\" ng-click=\"togglePopover()\">\n                        <i class=\"material-icons\" style=\" color: white;font-size: 28px;margin-top: -2px;\">apps</i>\n                    </a> \n            </div>\n        </div>\n    </div> "

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/member/member.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/member.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  member works!\n</p>\n"

/***/ }),

/***/ "./src/app/member/member.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberComponent = /** @class */ (function () {
    function MemberComponent() {
    }
    MemberComponent.prototype.ngOnInit = function () {
    };
    MemberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member',
            template: __webpack_require__("./src/app/member/member.component.html"),
            styles: [__webpack_require__("./src/app/member/member.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MemberComponent);
    return MemberComponent;
}());



/***/ }),

/***/ "./src/app/my-component/my-component.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/my-component/my-component.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Hey , I am my-component, amd I am working! \n</p>\n<h2> {{title2}}  </h2>\n"

/***/ }),

/***/ "./src/app/my-component/my-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyComponentComponent = /** @class */ (function () {
    function MyComponentComponent() {
        this.title2 = 'Congratulations !!compenent works';
    }
    MyComponentComponent.prototype.ngOnInit = function () {
    };
    MyComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-component',
            template: __webpack_require__("./src/app/my-component/my-component.component.html"),
            styles: [__webpack_require__("./src/app/my-component/my-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyComponentComponent);
    return MyComponentComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  product works!\n</p>\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product',
            template: __webpack_require__("./src/app/product/product.component.html"),
            styles: [__webpack_require__("./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/utility.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilityService = /** @class */ (function () {
    function UtilityService() {
    }
    UtilityService.prototype.findInObjectsArrayFromKey = function (objects, keyName, value, ignoreCase) {
        if (ignoreCase) {
            return objects.find(function (item) {
                return item[keyName].toLowerCase() == value.toLowerCase();
            });
        }
        return objects.find(function (item) {
            return item[keyName] == value;
        });
    };
    ;
    UtilityService.prototype.extractKeysFromObjectsList = function (objects, keyName) {
        return objects.map(function (item) {
            return item[keyName];
        });
    };
    ;
    UtilityService.prototype.objectArrayIndexOf = function (objects, key, value) {
        return this.extractKeysFromObjectsList(objects, key).indexOf(value);
    };
    ;
    UtilityService.prototype.objectArrayFindFromKey = function (objects, key, value) {
        var index = this.extractKeysFromObjectsList(objects, key).indexOf(value);
        if (index === -1) {
            return;
        }
        return objects[index];
    };
    ;
    UtilityService.prototype.filterObjectsFromKeys = function (objects, keys, keyName) {
        return objects.filter(function (item) {
            return keys.indexOf(item[keyName]) !== -1;
        });
    };
    ;
    UtilityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UtilityService);
    return UtilityService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map