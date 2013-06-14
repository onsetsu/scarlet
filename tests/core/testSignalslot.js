TestCase("testSignalslot", sinon.testCase({
	setUp: function() 
	{	
	},

	tearDown: function()
	{
	},

	// Scarlet.Signal .
	"testSignalAPI": function()
	{	
		var firstSignal = new Scarlet.Signal();
		var secondSignal = new Scarlet.Signal();
		
		var firstSlot = new Scarlet.Slot({}, function() {});
		var secondSlot = new Scarlet.Slot({}, function() {});

		var spySlot1 = this.spy(firstSlot, "execute");
		var spySlot2 = this.spy(secondSlot, "execute");
		
		firstSignal
			.connect(firstSlot);
		secondSignal
			.connect(firstSlot)
			.connect(secondSlot)
			.emit();
		sinon.assert.calledOnce(spySlot1);
		sinon.assert.calledOnce(spySlot2);
		sinon.assert.callOrder(spySlot1, spySlot2);
		//assert(spySlot1.calledBefore(spySlot2), "slots were not called in the order they were connected.");
	}
	
}));