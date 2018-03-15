import { Component, OnInit } from '@angular/core';
import { HttpModule, Http, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import {ScrollTracker} from './ScrollTracker.directive';
import { UtilityService } from './utility.service';
import * as AppConst from './app.const';
import { Spinkit } from 'ng-http-loader/spinkits'; 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  interpolation: ['[[', ']]']
})

export class AppComponent implements OnInit{

	//=========================Variables for binding===============
  	baseUrlAppForm 			= 'https://apps.stageseva.capitalfloat.com/';
  	searchAPI 				=  this.baseUrlAppForm  + 'apps/metadata/search' ;

  	items 					= ['angular4' , 'react' , 'angularjs1x', 'angular4' ] ;
  	searchKey 				= '';
  	curScrollPos 			= '';
  	endReached 				= ''; 
  	applications 			= []; 
  	public loading_auto 			= false;
    public spinkit    = Spinkit;
  	productTypeSet 			= [];statusSet = [];
  	masterList : any 		= [];
    isSearchEnd :boolean = false;
  	headers : Headers 		= new Headers();
  	opts: RequestOptions 	= new RequestOptions();
    getMerchantList : any  = [];

  	params = {
	        'page_context': {
	            "limit"		: 10,
	            "sort_order": 1,
	            "sort_param": "updated_time"
	          },
	        'product_type_set' 	: [],
		    'status_set' 		: []
	    };
	//===========================================================

  	constructor(private http: Http, private Utility: UtilityService) {
  		this.headers.append('Content-Type', 'application/json');
		  this.headers.append('x-initiator', '19'); 

	    this.opts.headers = this.headers;
  	}

  	searchType(e){ 
  		if(e.keyCode == 13){
  			this.applications = [];
  			if(this.searchKey){
				let param1 = { 
	                'search_text' : this.searchKey
	            };
	             this.getAllApplications( param1);
	        }else{
	            
	            let params = {
	                'page_context': {
	                    "limit"		: 10,
	                    "sort_order": 1,
	                    "sort_param": "updated_time"
	                  },
	                'product_type_set' : this.productTypeSet,
	                'status_set' 		: this.statusSet,
	            }
	            this.getAllApplications( params);
	        }
  		} 
  		if(e.keyCode && !this.searchKey){
  			this.applications = [];
  			this.getAllApplications( this.params);
  		}
  	}

  	clearSearch(){

  	}

  	getMainApplicant(_individualList){
  		return this.Utility.findInObjectsArrayFromKey( _individualList ,  'application_context', AppConst.MASTER_LIST.ApplicationContext.MainApplicantId, false);
  	}

  	getLoanProductType = function(id){
        return this.Utility.objectArrayFindFromKey(this.masterList.loan_product_type, 'id', id).label;
    }

    getSmOwner(_poolContactList){
        let _objSearch = this.Utility.findInObjectsArrayFromKey( _poolContactList, 'pool_context', AppConst.MASTER_LIST.PoolContext.Sales, false );
            return _objSearch ? _objSearch.name : 'NA';
    }
  

    getMainApplicantCurrentAddress(addressList){
        return this.Utility.findInObjectsArrayFromKey( addressList,'address_type',
                                        AppConst.MASTER_LIST.AddressTypes.CurrentAddress, false ) || {};
    }

    getOperatingCity(addressList){
		let _city = 'NA'
        if(addressList){
            addressList.forEach( (val, idx) =>{
                if(val.entity_type == 100 && val.address_type == 2000){ 
                    _city = val.city;
                };
            });
        }
        return _city;
	};

	getAppStatus(id){
        return this.Utility.objectArrayFindFromKey(this.masterList.application_status, 'id', id).label;
    }

 
  	getAllApplications( params) {
	    console.log("GET WITH HEADERS");
 
	    let _url = `${this.searchAPI}`;
	    
	    this.loading_auto = true;
	    this.http.post(_url, JSON.stringify(params) , this.opts).subscribe(
	        res => {
		        	let data = res.json().response.result;
		        	for (let i=0; i<data.length; i++){
    					    this.applications.push(data[i]);
    					}

              if(data.length < 10){
                 this.isSearchEnd = true;
              }else{
                this.isSearchEnd = false;
              }
		        	this.loading_auto = false;
	        },
	        msg => console.error(`Error: ${msg}`)
	    );
	}

	goToProfile(data){
		let url 			= '',
		PARTNER_BASE_URI 	= 'http://safe.stageseva.capitalfloat.com:9021/cf/admin/dboard',
		RCP_BASE_URI 		= 'http://safe.stageseva.capitalfloat.com:9021/cf/admin/dboardrcp';

		url 				= PARTNER_BASE_URI + '/' + data.app_id +  '/profile'; 
		
		if(data.metadata.app_source_name === 'dsa_ondoarding_form'){
			url = RCP_BASE_URI + '/' + data.app_id + '/profile';
		} 
        window.open( url, '_blank' );
	}

	updateScrollPos(e) { 
	    this.curScrollPos 	= e.pos;
	    this.endReached 	= e.endReached;

	    if(this.endReached && !this.isSearchEnd){
	    	var _len 	=  this.applications.length -1;

            let params 	= { 
                  "page_context": { 
                    "before"	: _len >0 ? this.applications[_len].metadata.last_modified_time : "",
                    "limit"		: 11,
                    "sort_order": 1,
                    "sort_param": "updated_time"
                  },
                  'search_text' 		: this.searchKey ? this.searchKey : '',
                  'product_type_set' 	: this.productTypeSet,
	              'status_set' 			: this.statusSet,
            }

            params['product_type_set'] 	=  this.productTypeSet;
	        params['status_set'] 		=  this.statusSet ;

	    	this.getAllApplications( params);
	    }
	}

	getMasterList(){
		let _url = `${this.baseUrlAppForm}apps/master_list` ;
        this.http.get(_url, this.opts).subscribe( 
           _res => { this.masterList =  _res.json();  
                   this.getAllApplications( this.params);
        	},
        	_msg => {}
        ); 
    } ;

  getList(){
    let _url = '/cf/cl_merchant/get_merchant_details.json?creater_id=213834'  //`${this.baseUrlAppForm}apps/master_list` ;
        this.http.get(_url, this.opts).subscribe( 
           _res => { this.getMerchantList =  _res.json();  
                   console.error(_res.json());
          },
          _msg => {}
        ); 
    } ;

	ngOnInit(){
	     //called after the constructor and called  after the first ngOnChanges() 
	  	this.getMasterList();
      this.getList();
	  }
}