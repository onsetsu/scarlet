/********************************
** FILE: base.js
********************************/

var $j = jQuery;

nytg.ready = function() {
	var that = this;
	nytg.c = new nytg.Chart();
	nytg.c.init();
	nytg.c.start();

	/*this.highlightedItems = [];
	// nytg.s = new nytg.SearchBox("nytg-search", nytg.budget_array_data, "name", "department", "budget_2012", "id");
	// nytg.s.findCallback = function(evt){
	//   var foundId = evt.id;    
	//   
	//   for (var i=0; i < that.highlightedItems.length; i++) {
	//     $j("#nytg-circle"+that.highlightedItems[i]).css({'stroke-width':1});
	//   };
	// 
	//   that.highlightedItems = [evt.id];
	//   for (var i=0; i < that.highlightedItems.length; i++) {
	//     $j("#nytg-circle"+that.highlightedItems[i]).css({'stroke-width':20});
	//   };
	//   
	// }
	*/

	var currentOverlay = undefined;
	nytg.mainNav = new nytg.ChooseList($j(".nytg-navigation"), onMainChange);
	function onMainChange(evt) {
		
		// show css legende
		var that = this;
		var showCurrentOverlay = function(overlayId, chartFrameHeight) {
			if (that.currentOverlay !== undefined) {
				that.currentOverlay.hide();
			};
			that.currentOverlay = $j(overlayId);
			that.currentOverlay.delay(300).fadeIn(500);
			$j("#nytg-chartFrame").css({'height': chartFrameHeight});
		};

		var tabIndex = evt.currentIndex
		if (tabIndex === 0) {
			nytg.c.bubbleLayout();
			showCurrentOverlay("#nytg-totalOverlay", 550);
		} else if (tabIndex === 1){
			nytg.c.mandatoryLayout();
			showCurrentOverlay("#nytg-mandatoryOverlay", 550);
		} else if (tabIndex === 2){
			nytg.c.chartLayout();
			showCurrentOverlay("#nytg-discretionaryOverlay", 650);
		} else if (tabIndex === 3){
			nytg.c.departmentLayout();
			showCurrentOverlay("#nytg-departmentOverlay", 850);
		} else if (tabIndex === 4){
			nytg.c.clusterLayout();
		}
	}
}

// the absolute starting point
if (!!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', "svg").createSVGRect){
	// forward document.ready to nytg.ready
	$j(document).ready($j.proxy(nytg.ready, this));
} else {
	alert("something went wrong");
	$j("#nytg-chartFrame").hide();
	// $j("#nytg-error").show();
}