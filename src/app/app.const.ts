'use strict';

export const dist = '../path/to/dist/';

export const MASTER_LIST  = {
            AppSegment          : {
                Business    : 100
            },
            AppArchiveStatus    : {
                ArchiveForRenewal       : 100,
                ArchiveForNotInterest   : 200
            },
            ApplicationContext  : {
                MainApplicantId : 10,
                CoApplicant     : 20
            },
            AppLifecycle        : {
                New         : 100,
                Renewal     : 200,
                Enhancement : 300
            },
            PoolContext : {
                creator : 1000,
                applicant: 2000,
                beneficiary: 3000,
                partner: 4000,
                agency: 5000,
                merchant:6000,
                supplier: 7000,
                Sales: 8000,
                Sales_master:8100,
                Credit:9000,
                Credit_master:9100,
                Ops: 10000,
                Ops_master:10100,
                Ops_QC:10110,
                Ops_marketplace:10120,
                Ops_Disburse:10130,
                Ops_Banking:10140,
                Ops_Compliance:10150,
                BD:11000,
                BST:12000

            },
            AddressTypes        : {
                PermanentAddress    : 100,
                CurrentAddress      : 200,
                KycAddress          : 300
            },
            AddressActiveTypes  : {
                NA  : 0,
                ACTIVE : 100
            },
            BusinessAddressTypes : {
                OperatingAddress    : 2000,
                RegisteredAddress   : 4000,
                FactoryAddress      : 3000,
                Others              : 7000
            },
            BusinessNature      : {
                Services    : 200
            },
            ContactTypes        : {
                Mobile      : 200,
                Email       : 100,
                Landline    : 300
            },
            ContactContexts : {
                UNDEFINED   : 0
            },
            BusinessPoiTypes : {
                Gstn    : 200,
                Pan     : 300,
                Vat     : 400
            },
            IndividualPoiTypes : {
                Pan     : 100,
                Aadhar  : 200,
                DrRegKey: 1000,
            },
            EntityTypes : {
                Business    : 100,
                Individual  : 200
            },
            PartnerTypes : {
                B2C_Marketplace             : 100,
                B2B_Marketplace             : 200,
                OnlineTravelAggregator      : 300,
                DigitalPaymentsRemittance   : 400,
                POS                         : 500,
                DISTRIBUTOR                 : 600,
                Others                      : 2000
            },
            EcosystemVerify   : {
                Verified    : 100,
                NotVerified : 0
            },
            EcosystemXnTypes  : {
                PurchaseByVolume     : 300,
                PurchaseByAmount     : 400
            },
            EntityKycStatus   : {
                KycNotAvailable     : 0
            },
            AppStatus   : {
                LeadCreated     : 100,
                AppInProgress   : 200,
                AppSubmitted    : 300,
                AppVerified     : 400,
                AppRejected     : 1200
            },
            AppSource   : {
                ClAppForm  : 'cl_app_form',
                FsApp      : 'fs_app_form',
                FS  : 3
            },
            HubOrSpoke : {
                Spoke   : 200
            },
            LoanProductTypes    : {
		        UBL : 100,
                PL  : 300,
                PLP : 310,
                IPL : 320,
                BPL : 330,
                SCL : 500,
                BS  : 600,
                DR  : 700,
                FF  : 1100,
                AB  : 1200
            },
            Perfios : {
                ByBankCredentials   : 100,
                ByPdf               : 200
            }
        }
