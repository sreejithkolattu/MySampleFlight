jQuery.sap.require("mysampleflight.resources.utils.utility");

/**
 * First Application View - this is the application's starting point. It builds the application window.   
 */
sap.ui.jsview("mysampleflight.resources.flights", {

      getControllerName : function() {
         return "mysampleflight.resources.flights";
    	 
      },
      
      createContent : function(oController) {
		var oShell = this.createShell();
       	oShell.addContent(this.createFlightTable());	
       	return oShell;
       	
      },

      createShell:function(oController){
      
    	  var oShell = sap.ui.ux3.Shell("ID_FlightShell",{
    	      appIcon: "images/SAPLogo.gif",
    		  appTitle: oBundle.getText("APP_TITLE"),
    		  showLogoutButton:false,
    		  showSearchTool: false,
    		  showInspectorTool: false,
    		  showFeederTool: false,
    		  worksetItems: [new sap.ui.ux3.NavigationItem("navItemList",{key: "FlightList",text:oBundle.getText("WORKSET_TITLE")})]
    	  });
    	  return oShell;
      },
      
      /**
	 * Returns a table with the required columns, each column is bound for a specific odata service property   
	 * @returns {sap.ui.table.Table}
	 */
      createFlightTable:function(){
      
    	var oTable = new sap.ui.table.Table("ID_FlightTable", {
    		visibleRowCount  : 20,
  			selectionMode: sap.ui.table.SelectionMode.None
  		});
    	
 
     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_CONNID")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "connid"),
			sortProperty: "connid",
			filterProperty: "connid"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_FLDATE")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "fldate",new sap.ui.model.type.DateTime({style: "medium"})),
			sortProperty: "fldate",
			filterProperty: "fldate"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_CARRID")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "carrid"),
			sortProperty: "carrid",
			filterProperty: "carrid"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_PRICE")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "price"),
			sortProperty: "price",
			filterProperty: "price"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_CURRENCY")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "currency"),
			sortProperty: "currency",
			filterProperty: "currency"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_PLANETYPE")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "planetype"),
			sortProperty: "planetype",
			filterProperty: "planetype"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_SEATSMAX")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "seatsmax"),
			sortProperty: "seatsmax",
			filterProperty: "seatsmax"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_SEATSOCC")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "seatsocc"),
			sortProperty: "seatsocc",
			filterProperty: "seatsocc"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_PAYMENTSUM")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "paymentsum"),
			sortProperty: "paymentsum",
			filterProperty: "paymentsum"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_SEATSMAX_B")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "seatsmax_b"),
			sortProperty: "seatsmax_b",
			filterProperty: "seatsmax_b"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_SEATSOCC_B")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "seatsocc_b"),
			sortProperty: "seatsocc_b",
			filterProperty: "seatsocc_b"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_SEATSMAX_F")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "seatsmax_f"),
			sortProperty: "seatsmax_f",
			filterProperty: "seatsmax_f"
 		}));

     	 oTable.addColumn(new sap.ui.table.Column({
    	 	label: new sap.ui.commons.Label({text:oBundle.getText("FLIGHT_SEATSOCC_F")}),
 			template: new sap.ui.commons.TextView().bindProperty("text", "seatsocc_f"),
			sortProperty: "seatsocc_f",
			filterProperty: "seatsocc_f"
 		}));
 		return oTable;   		
      }
      
});
