TestCase("testSelect", sinon.testCase({
	setUp: function() 
	{
		this.data = {
		 "name": "flare",
		 "children": [
		  {
		   "name": "analytics",
		   "children": [
		    {
		     "name": "cluster",
		     "children": [
		      {"name": "AgglomerativeCluster", "size": 3938, "calc": function(callback) { callback(); }},
		      {"name": "CommunityStructure", "size": 3812, "calc": function(callback) { callback(); }},
		      {"name": "HierarchicalCluster", "size": 6714, "calc": function(callback) { callback(); }},
		      {"name": "MergeEdge", "size": 743, "calc": function(callback) { callback(); }}
		     ]
		    },
		    {
		     "name": "graph",
		     "children": [
		      {"name": "BetweennessCentrality", "size": 3534, "calc": function(callback) { callback(); }},
		      {"name": "LinkDistance", "size": 5731, "calc": function(callback) { callback(); }},
		      {"name": "MaxFlowMinCut", "size": 7840, "calc": function(callback) { callback(); }},
		      {"name": "ShortestPaths", "size": 5914, "calc": function(callback) { callback(); }},
		      {"name": "SpanningTree", "size": 3416, "calc": function(callback) { callback(); }}
		     ]
		    },
		    {
		     "name": "optimization",
		     "children": [
		      {"name": "AspectRatioBanker", "size": 7074, "calc": function(callback) { callback(); }}
		     ]
		    }
		   ]
		  },
		  {
		   "name": "animate",
		   "children": [
		    {"name": "Easing", "size": 17010, "calc": function(callback) { callback(); }},
		    {"name": "FunctionSequence", "size": 5842, "calc": function(callback) { callback(); }},
		    {
		     "name": "interpolate",
		     "children": [
		      {"name": "ArrayInterpolator", "size": 1983, "calc": function(callback) { callback(); }},
		      {"name": "ColorInterpolator", "size": 2047, "calc": function(callback) { callback(); }},
		      {"name": "DateInterpolator", "size": 1375, "calc": function(callback) { callback(); }},
		      {"name": "Interpolator", "size": 8746, "calc": function(callback) { callback(); }},
		      {"name": "MatrixInterpolator", "size": 2202, "calc": function(callback) { callback(); }},
		      {"name": "NumberInterpolator", "size": 1382, "calc": function(callback) { callback(); }},
		      {"name": "ObjectInterpolator", "size": 1629, "calc": function(callback) { callback(); }},
		      {"name": "PointInterpolator", "size": 1675, "calc": function(callback) { callback(); }},
		      {"name": "RectangleInterpolator", "size": 2042, "calc": function(callback) { callback(); }}
		     ]
		    },
		    {"name": "ISchedulable", "size": 1041, "calc": function(callback) { callback(); }},
		    {"name": "Parallel", "size": 5176, "calc": function(callback) { callback(); }},
		    {"name": "Pause", "size": 449, "calc": function(callback) { callback(); }},
		    {"name": "Scheduler", "size": 5593, "calc": function(callback) { callback(); }},
		    {"name": "Sequence", "size": 5534, "calc": function(callback) { callback(); }},
		    {"name": "Transition", "size": 9201, "calc": function(callback) { callback(); }},
		    {"name": "Transitioner", "size": 19975, "calc": function(callback) { callback(); }},
		    {"name": "TransitionEvent", "size": 1116, "calc": function(callback) { callback(); }},
		    {"name": "Tween", "size": 6006, "calc": function(callback) { callback(); }}
		   ]
		  },
		  {
		   "name": "data",
		   "children": [
		    {
		     "name": "converters",
		     "children": [
		      {"name": "Converters", "size": 721, "calc": function(callback) { callback(); }},
		      {"name": "DelimitedTextConverter", "size": 4294, "calc": function(callback) { callback(); }},
		      {"name": "GraphMLConverter", "size": 9800, "calc": function(callback) { callback(); }},
		      {"name": "IDataConverter", "size": 1314, "calc": function(callback) { callback(); }},
		      {"name": "JSONConverter", "size": 2220, "calc": function(callback) { callback(); }}
		     ]
		    },
		    {"name": "DataField", "size": 1759, "calc": function(callback) { callback(); }},
		    {"name": "DataSchema", "size": 2165, "calc": function(callback) { callback(); }},
		    {"name": "DataSet", "size": 586, "calc": function(callback) { callback(); }},
		    {"name": "DataSource", "size": 3331, "calc": function(callback) { callback(); }},
		    {"name": "DataTable", "size": 772, "calc": function(callback) { callback(); }},
		    {"name": "DataUtil", "size": 3322, "calc": function(callback) { callback(); }}
		   ]
		  },
		  {
		   "name": "display",
		   "children": [
		    {"name": "DirtySprite", "size": 8833, "calc": function(callback) { callback(); }},
		    {"name": "LineSprite", "size": 1732, "calc": function(callback) { callback(); }},
		    {"name": "RectSprite", "size": 3623, "calc": function(callback) { callback(); }},
		    {"name": "TextSprite", "size": 10066, "calc": function(callback) { callback(); }}
		   ]
		  },
		  {
		   "name": "flex",
		   "children": [
		    {"name": "FlareVis", "size": 4116, "calc": function(callback) { callback(); }}
		   ]
		  },
		  {
		   "name": "physics",
		   "children": [
		    {"name": "DragForce", "size": 1082, "calc": function(callback) { callback(); }},
		    {"name": "GravityForce", "size": 1336, "calc": function(callback) { callback(); }},
		    {"name": "IForce", "size": 319, "calc": function(callback) { callback(); }},
		    {"name": "NBodyForce", "size": 10498, "calc": function(callback) { callback(); }},
		    {"name": "Particle", "size": 2822, "calc": function(callback) { callback(); }},
		    {"name": "Simulation", "size": 9983, "calc": function(callback) { callback(); }},
		    {"name": "Spring", "size": 2213, "calc": function(callback) { callback(); }},
		    {"name": "SpringForce", "size": 1681, "calc": function(callback) { callback(); }}
		   ]
		  },
		  {
		   "name": "query",
		   "children": [
		    {"name": "AggregateExpression", "size": 1616, "calc": function(callback) { callback(); }},
		    {"name": "And", "size": 1027, "calc": function(callback) { callback(); }},
		    {"name": "Arithmetic", "size": 3891, "calc": function(callback) { callback(); }},
		    {"name": "Average", "size": 891, "calc": function(callback) { callback(); }},
		    {"name": "BinaryExpression", "size": 2893, "calc": function(callback) { callback(); }},
		    {"name": "Comparison", "size": 5103, "calc": function(callback) { callback(); }},
		    {"name": "CompositeExpression", "size": 3677, "calc": function(callback) { callback(); }},
		    {"name": "Count", "size": 781, "calc": function(callback) { callback(); }},
		    {"name": "DateUtil", "size": 4141, "calc": function(callback) { callback(); }},
		    {"name": "Distinct", "size": 933, "calc": function(callback) { callback(); }},
		    {"name": "Expression", "size": 5130, "calc": function(callback) { callback(); }},
		    {"name": "ExpressionIterator", "size": 3617, "calc": function(callback) { callback(); }},
		    {"name": "Fn", "size": 3240, "calc": function(callback) { callback(); }},
		    {"name": "If", "size": 2732, "calc": function(callback) { callback(); }},
		    {"name": "IsA", "size": 2039, "calc": function(callback) { callback(); }},
		    {"name": "Literal", "size": 1214, "calc": function(callback) { callback(); }},
		    {"name": "Match", "size": 3748, "calc": function(callback) { callback(); }},
		    {"name": "Maximum", "size": 843, "calc": function(callback) { callback(); }},
		    {
		     "name": "methods",
		     "children": [
		      {"name": "add", "size": 593, "calc": function(callback) { callback(); }},
		      {"name": "and", "size": 330, "calc": function(callback) { callback(); }},
		      {"name": "average", "size": 287, "calc": function(callback) { callback(); }},
		      {"name": "count", "size": 277, "calc": function(callback) { callback(); }},
		      {"name": "distinct", "size": 292, "calc": function(callback) { callback(); }},
		      {"name": "div", "size": 595, "calc": function(callback) { callback(); }},
		      {"name": "eq", "size": 594, "calc": function(callback) { callback(); }},
		      {"name": "fn", "size": 460, "calc": function(callback) { callback(); }},
		      {"name": "gt", "size": 603, "calc": function(callback) { callback(); }},
		      {"name": "gte", "size": 625, "calc": function(callback) { callback(); }},
		      {"name": "iff", "size": 748, "calc": function(callback) { callback(); }},
		      {"name": "isa", "size": 461, "calc": function(callback) { callback(); }},
		      {"name": "lt", "size": 597, "calc": function(callback) { callback(); }},
		      {"name": "lte", "size": 619, "calc": function(callback) { callback(); }},
		      {"name": "max", "size": 283, "calc": function(callback) { callback(); }},
		      {"name": "min", "size": 283, "calc": function(callback) { callback(); }},
		      {"name": "mod", "size": 591, "calc": function(callback) { callback(); }},
		      {"name": "mul", "size": 603, "calc": function(callback) { callback(); }},
		      {"name": "neq", "size": 599, "calc": function(callback) { callback(); }},
		      {"name": "not", "size": 386, "calc": function(callback) { callback(); }},
		      {"name": "or", "size": 323, "calc": function(callback) { callback(); }},
		      {"name": "orderby", "size": 307, "calc": function(callback) { callback(); }},
		      {"name": "range", "size": 772, "calc": function(callback) { callback(); }},
		      {"name": "select", "size": 296, "calc": function(callback) { callback(); }},
		      {"name": "stddev", "size": 363, "calc": function(callback) { callback(); }},
		      {"name": "sub", "size": 600, "calc": function(callback) { callback(); }},
		      {"name": "sum", "size": 280, "calc": function(callback) { callback(); }},
		      {"name": "update", "size": 307, "calc": function(callback) { callback(); }},
		      {"name": "variance", "size": 335, "calc": function(callback) { callback(); }},
		      {"name": "where", "size": 299, "calc": function(callback) { callback(); }},
		      {"name": "xor", "size": 354, "calc": function(callback) { callback(); }},
		      {"name": "_", "size": 264, "calc": function(callback) { callback(); }}
		     ]
		    },
		    {"name": "Minimum", "size": 843, "calc": function(callback) { callback(); }},
		    {"name": "Not", "size": 1554, "calc": function(callback) { callback(); }},
		    {"name": "Or", "size": 970, "calc": function(callback) { callback(); }},
		    {"name": "Query", "size": 13896, "calc": function(callback) { callback(); }},
		    {"name": "Range", "size": 1594, "calc": function(callback) { callback(); }},
		    {"name": "StringUtil", "size": 4130, "calc": function(callback) { callback(); }},
		    {"name": "Sum", "size": 791, "calc": function(callback) { callback(); }},
		    {"name": "Variable", "size": 1124, "calc": function(callback) { callback(); }},
		    {"name": "Variance", "size": 1876, "calc": function(callback) { callback(); }},
		    {"name": "Xor", "size": 1101, "calc": function(callback) { callback(); }}
		   ]
		  },
		  {
		   "name": "scale",
		   "children": [
		    {"name": "IScaleMap", "size": 2105, "calc": function(callback) { callback(); }},
		    {"name": "LinearScale", "size": 1316, "calc": function(callback) { callback(); }},
		    {"name": "LogScale", "size": 3151, "calc": function(callback) { callback(); }},
		    {"name": "OrdinalScale", "size": 3770, "calc": function(callback) { callback(); }},
		    {"name": "QuantileScale", "size": 2435, "calc": function(callback) { callback(); }},
		    {"name": "QuantitativeScale", "size": 4839, "calc": function(callback) { callback(); }},
		    {"name": "RootScale", "size": 1756, "calc": function(callback) { callback(); }},
		    {"name": "Scale", "size": 4268, "calc": function(callback) { callback(); }},
		    {"name": "ScaleType", "size": 1821, "calc": function(callback) { callback(); }},
		    {"name": "TimeScale", "size": 5833, "calc": function(callback) { callback(); }}
		   ]
		  },
		  {
		   "name": "util",
		   "children": [
		    {"name": "Arrays", "size": 8258, "calc": function(callback) { callback(); }},
		    {"name": "Colors", "size": 10001, "calc": function(callback) { callback(); }},
		    {"name": "Dates", "size": 8217, "calc": function(callback) { callback(); }},
		    {"name": "Displays", "size": 12555, "calc": function(callback) { callback(); }},
		    {"name": "Filter", "size": 2324, "calc": function(callback) { callback(); }},
		    {"name": "Geometry", "size": 10993, "calc": function(callback) { callback(); }},
		    {
		     "name": "heap",
		     "children": [
		      {"name": "FibonacciHeap", "size": 9354, "calc": function(callback) { callback(); }},
		      {"name": "HeapNode", "size": 1233, "calc": function(callback) { callback(); }}
		     ]
		    },
		    {"name": "IEvaluable", "size": 335, "calc": function(callback) { callback(); }},
		    {"name": "IPredicate", "size": 383, "calc": function(callback) { callback(); }},
		    {"name": "IValueProxy", "size": 874, "calc": function(callback) { callback(); }},
		    {
		     "name": "math",
		     "children": [
		      {"name": "DenseMatrix", "size": 3165, "calc": function(callback) { callback(); }},
		      {"name": "IMatrix", "size": 2815, "calc": function(callback) { callback(); }},
		      {"name": "SparseMatrix", "size": 3366, "calc": function(callback) { callback(); }}
		     ]
		    },
		    {"name": "Maths", "size": 17705, "calc": function(callback) { callback(); }},
		    {"name": "Orientation", "size": 1486, "calc": function(callback) { callback(); }},
		    {
		     "name": "palette",
		     "children": [
		      {"name": "ColorPalette", "size": 6367, "calc": function(callback) { callback(); }},
		      {"name": "Palette", "size": 1229, "calc": function(callback) { callback(); }},
		      {"name": "ShapePalette", "size": 2059, "calc": function(callback) { callback(); }},
		      {"name": "SizePalette", "size": 2291, "calc": function(callback) { callback(); }}
		     ]
		    },
		    {"name": "Property", "size": 5559, "calc": function(callback) { callback(); }},
		    {"name": "Shapes", "size": 19118, "calc": function(callback) { callback(); }},
		    {"name": "Sort", "size": 6887, "calc": function(callback) { callback(); }},
		    {"name": "Stats", "size": 6557, "calc": function(callback) { callback(); }},
		    {"name": "Strings", "size": 22026, "calc": function(callback) { callback(); }}
		   ]
		  },
		  {
		   "name": "vis",
		   "children": [
		    {
		     "name": "axis",
		     "children": [
		      {"name": "Axes", "size": 1302, "calc": function(callback) { callback(); }},
		      {"name": "Axis", "size": 24593, "calc": function(callback) { callback(); }},
		      {"name": "AxisGridLine", "size": 652, "calc": function(callback) { callback(); }},
		      {"name": "AxisLabel", "size": 636, "calc": function(callback) { callback(); }},
		      {"name": "CartesianAxes", "size": 6703, "calc": function(callback) { callback(); }}
		     ]
		    },
		    {
		     "name": "controls",
		     "children": [
		      {"name": "AnchorControl", "size": 2138, "calc": function(callback) { callback(); }},
		      {"name": "ClickControl", "size": 3824, "calc": function(callback) { callback(); }},
		      {"name": "Control", "size": 1353, "calc": function(callback) { callback(); }},
		      {"name": "ControlList", "size": 4665, "calc": function(callback) { callback(); }},
		      {"name": "DragControl", "size": 2649, "calc": function(callback) { callback(); }},
		      {"name": "ExpandControl", "size": 2832, "calc": function(callback) { callback(); }},
		      {"name": "HoverControl", "size": 4896, "calc": function(callback) { callback(); }},
		      {"name": "IControl", "size": 763, "calc": function(callback) { callback(); }},
		      {"name": "PanZoomControl", "size": 5222, "calc": function(callback) { callback(); }},
		      {"name": "SelectionControl", "size": 7862, "calc": function(callback) { callback(); }},
		      {"name": "TooltipControl", "size": 8435, "calc": function(callback) { callback(); }}
		     ]
		    },
		    {
		     "name": "data",
		     "children": [
		      {"name": "Data", "size": 20544, "calc": function(callback) { callback(); }},
		      {"name": "DataList", "size": 19788, "calc": function(callback) { callback(); }},
		      {"name": "DataSprite", "size": 10349, "calc": function(callback) { callback(); }},
		      {"name": "EdgeSprite", "size": 3301, "calc": function(callback) { callback(); }},
		      {"name": "NodeSprite", "size": 19382, "calc": function(callback) { callback(); }},
		      {
		       "name": "render",
		       "children": [
		        {"name": "ArrowType", "size": 698, "calc": function(callback) { callback(); }},
		        {"name": "EdgeRenderer", "size": 5569, "calc": function(callback) { callback(); }},
		        {"name": "IRenderer", "size": 353, "calc": function(callback) { callback(); }},
		        {"name": "ShapeRenderer", "size": 2247, "calc": function(callback) { callback(); }}
		       ]
		      },
		      {"name": "ScaleBinding", "size": 11275, "calc": function(callback) { callback(); }},
		      {"name": "Tree", "size": 7147, "calc": function(callback) { callback(); }},
		      {"name": "TreeBuilder", "size": 9930, "calc": function(callback) { callback(); }}
		     ]
		    },
		    {
		     "name": "events",
		     "children": [
		      {"name": "DataEvent", "size": 2313, "calc": function(callback) { callback(); }},
		      {"name": "SelectionEvent", "size": 1880, "calc": function(callback) { callback(); }},
		      {"name": "TooltipEvent", "size": 1701, "calc": function(callback) { callback(); }},
		      {"name": "VisualizationEvent", "size": 1117, "calc": function(callback) { callback(); }}
		     ]
		    },
		    {
		     "name": "legend",
		     "children": [
		      {"name": "Legend", "size": 20859, "calc": function(callback) { callback(); }},
		      {"name": "LegendItem", "size": 4614, "calc": function(callback) { callback(); }},
		      {"name": "LegendRange", "size": 10530, "calc": function(callback) { callback(); }}
		     ]
		    },
		    {
		     "name": "operator",
		     "children": [
		      {
		       "name": "distortion",
		       "children": [
		        {"name": "BifocalDistortion", "size": 4461, "calc": function(callback) { callback(); }},
		        {"name": "Distortion", "size": 6314, "calc": function(callback) { callback(); }},
		        {"name": "FisheyeDistortion", "size": 3444, "calc": function(callback) { callback(); }}
		       ]
		      },
		      {
		       "name": "encoder",
		       "children": [
		        {"name": "ColorEncoder", "size": 3179, "calc": function(callback) { callback(); }},
		        {"name": "Encoder", "size": 4060, "calc": function(callback) { callback(); }},
		        {"name": "PropertyEncoder", "size": 4138, "calc": function(callback) { callback(); }},
		        {"name": "ShapeEncoder", "size": 1690, "calc": function(callback) { callback(); }},
		        {"name": "SizeEncoder", "size": 1830, "calc": function(callback) { callback(); }}
		       ]
		      },
		      {
		       "name": "filter",
		       "children": [
		        {"name": "FisheyeTreeFilter", "size": 5219, "calc": function(callback) { callback(); }},
		        {"name": "GraphDistanceFilter", "size": 3165, "calc": function(callback) { callback(); }},
		        {"name": "VisibilityFilter", "size": 3509, "calc": function(callback) { callback(); }}
		       ]
		      },
		      {"name": "IOperator", "size": 1286, "calc": function(callback) { callback(); }},
		      {
		       "name": "label",
		       "children": [
		        {"name": "Labeler", "size": 9956, "calc": function(callback) { callback(); }},
		        {"name": "RadialLabeler", "size": 3899, "calc": function(callback) { callback(); }},
		        {"name": "StackedAreaLabeler", "size": 3202, "calc": function(callback) { callback(); }}
		       ]
		      },
		      {
		       "name": "layout",
		       "children": [
		        {"name": "AxisLayout", "size": 6725, "calc": function(callback) { callback(); }},
		        {"name": "BundledEdgeRouter", "size": 3727, "calc": function(callback) { callback(); }},
		        {"name": "CircleLayout", "size": 9317, "calc": function(callback) { callback(); }},
		        {"name": "CirclePackingLayout", "size": 12003, "calc": function(callback) { callback(); }},
		        {"name": "DendrogramLayout", "size": 4853, "calc": function(callback) { callback(); }},
		        {"name": "ForceDirectedLayout", "size": 8411, "calc": function(callback) { callback(); }},
		        {"name": "IcicleTreeLayout", "size": 4864, "calc": function(callback) { callback(); }},
		        {"name": "IndentedTreeLayout", "size": 3174, "calc": function(callback) { callback(); }},
		        {"name": "Layout", "size": 7881, "calc": function(callback) { callback(); }},
		        {"name": "NodeLinkTreeLayout", "size": 12870, "calc": function(callback) { callback(); }},
		        {"name": "PieLayout", "size": 2728, "calc": function(callback) { callback(); }},
		        {"name": "RadialTreeLayout", "size": 12348, "calc": function(callback) { callback(); }},
		        {"name": "RandomLayout", "size": 870, "calc": function(callback) { callback(); }},
		        {"name": "StackedAreaLayout", "size": 9121, "calc": function(callback) { callback(); }},
		        {"name": "TreeMapLayout", "size": 9191, "calc": function(callback) { callback(); }}
		       ]
		      },
		      {"name": "Operator", "size": 2490, "calc": function(callback) { callback(); }},
		      {"name": "OperatorList", "size": 5248, "calc": function(callback) { callback(); }},
		      {"name": "OperatorSequence", "size": 4190, "calc": function(callback) { callback(); }},
		      {"name": "OperatorSwitch", "size": 2581, "calc": function(callback) { callback(); }},
		      {"name": "SortOperator", "size": 2023, "calc": function(callback) { callback(); }}
		     ]
		    },
		    {"name": "Visualization", "size": 16540, "calc": function(callback) { callback(); }}
		   ]
		  }
		 ]
		};
		this.selection = Scarlet.select(function(element) {
			return element.size > 5000 && element.name.indexOf("C") !== -1;
		}, this.data);
	},

	tearDown: function()
	{
	},

	// Test data should create a selection of 12 items.
	"testCreateSelection": function()
	{
		assertEquals(12, this.selection.length());
	},

	// Living selections should mimic the interface of the objects they contain.
	"testMimicInterface": function()
	{
		var i = 0;
		var func = function() {return i++;};
		var spy = this.spy(func);
		this.selection.calc(spy);
		
		sinon.assert.callCount(spy, 12);
		for(var j = 0; j < 12; j++) {
			assertEquals(0, spy.getCall(0).returnValue);
		};
	},

	// Living selections should enable iterating over the objects it contains.
	"testIterationOverElements": function()
	{
		var i = -1;
		var func = function() {i++; return i;};
		var spy = this.spy(func);
		this.selection.each(spy);
		
		sinon.assert.callCount(spy, 12);
		for(var j = 0; j < 12; j++) {
			assertEquals(j, spy.getCall(j).returnValue);
		};
	}
	
}));