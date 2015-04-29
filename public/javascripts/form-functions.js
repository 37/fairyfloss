// ======================================================================================
// 			Global variables
// ======================================================================================

var addincount = 0;

var tableref = [
	['box0', 'box1', 'box2', 'box3', 'box4', 'box5'],
	['box6', 'box7', 'box8', 'box9', 'box10', 'box11'],
	['box12', 'box13', 'box14', 'box15', 'box16', 'box17'],
	['box18', 'box19', 'box20', 'box21', 'box22', 'box23'],
	['box24', 'box25', 'box26', 'box27', 'box28', 'box29'],
	['box30', 'box31', 'box32', 'box33', 'box34', 'box35']
];

// ======================================================================================
// 			Misc styling functions
// ======================================================================================

function textAreaAdjust(o) {
	o.style.height = "1px";
	o.style.height = (25+o.scrollHeight)+"px";
}

function gridHoverStyle(grid) {

	resetGrid();

	for(y = 0; y < 6; y++){
		for(x = 0; x < 6; x++){
			if (((y * 6) + x) == grid){
				var ty = y + 1;
				var tx = x + 1;
			}
		}
	}

	for(i = 0; i < ty; i++) {
		for(j = 0; j < tx; j++){
			var boxid = tableref[i][j];
			document.getElementById(boxid).className="gridbox grid-hover";
		}
	}
}

function resetGrid() {
	for(i = 0; i < 6; i++) {
		for(j = 0; j < 6; j++){
			var boxid = tableref[i][j];
			document.getElementById(boxid).className="gridbox";
		}
	}
}


// ======================================================================================
// 			Input generator functions
// ======================================================================================


function add_textbox(elementName){
	var newdiv = document.createElement('div');
	newdiv.className = "element-container";
	newdiv.innerHTML = '<input type="text" placeholder="Enter your default text here." required="required" name="data[' + addincount + '][0]" class="input text-input" /><input type="hidden" required="required" name="data[' + addincount + '][1]" value="text" /><input type="hidden" required="required" name="data[' + addincount + '][2]" value="' + elementName + '" /><button id="element-settings' + addincount + '" type="button" onclick="#" class="form-button settings-button"><i class="fa fa-cog"></i></button>';
	document.getElementById(elementName).appendChild(newdiv);
	addincount++;
}

function add_textarea(elementName){
	var newdiv = document.createElement('div');
	newdiv.className = "element-container";
	newdiv.innerHTML = '<textarea placeholder="Enter your default text here." required="required" name="data[' + addincount + '][0]" class="input text-input"></textarea><input type="hidden" required="required" name="data[' + addincount + '][1]" value="textarea" /><input type="hidden" required="required" name="data[' + addincount + '][2]" value="' + elementName + '" /><button id="element-settings' + addincount + '" type="button" onclick="#" class="form-button settings-button"><i class="fa fa-cog"></i></button>';
	document.getElementById(elementName).appendChild(newdiv);
	addincount++;
}

// ======================================================================================
// 			The following function code should all be optimised into one function
// ======================================================================================

function add_checkbox_base(elementName){

	var newdiv = document.createElement('div');

	var checkquot = "'checkbox" + addincount + "'";

	newdiv.className = "element-container";

	newdiv.innerHTML = '<input type="text" placeholder="Enter your checkbox title here." required="required" name="data[' + addincount + '][0]" class="input option-element option-title" /> \
						<input type="hidden" required="required" name="data[' + addincount + '][1]" value="checkbox-title" /> \
						<input type="hidden" required="required" name="data[' + addincount + '][2]" value="' + elementName + '" /> \
						<button id="element-settings' + addincount + '" type="button" onclick="add_checkbox(' + checkquot + ')" class="form-button add-option-button"> \
							<i class="fa fa-plus"> </i> \
							  new checkbox option \
						</button> \
						<div id="checkbox' + addincount + '" class="option-container"></div>';

	document.getElementById(elementName).appendChild(newdiv);

	addincount++;
}

function add_checkbox(elementName){

	var linecount = 0;

	var newdiv = document.createElement('div');

	newdiv.className = "option-line";

	newdiv.innerHTML = '<div class="form-button option-icon"> \
							<i class="fa fa-circle-o"></i> \
						</div> \
						<input type="text" placeholder="Label content." required="required" name="data[' + addincount + '][3][' + linecount + ']" class="input option-element option-content" /> \
						<div class="form-button option-icon"> \
							<i class="fa fa-chevron-left"></i> \
						</div> \
						<input type="text" placeholder="Checkbox value" required="required" name="data[' + addincount + '][3][' + linecount + ']" class="input option-element option-content" /> \
						<button id="element-settings' + addincount + '" type="button" onclick="#" class="form-button minus-button"> \
							<i class="fa fa-minus"></i> \
						</button>';

	document.getElementById(elementName).appendChild(newdiv);

	linecount++;
}

function add_dropdown_base(elementName){

	var newdiv = document.createElement('div');

	var checkquot = "'dropdown" + addincount + "'";

	newdiv.className = "element-container";

	newdiv.innerHTML = '<input type="text" placeholder="Enter your dropdown title here." required="required" name="data[' + addincount + '][0]" class="input option-element option-title" /> \
						<input type="hidden" required="required" name="data[' + addincount + '][1]" value="dropdown-title" /> \
						<input type="hidden" required="required" name="data[' + addincount + '][2]" value="' + elementName + '" /> \
						<button id="element-settings' + addincount + '" type="button" onclick="add_dropdown(' + checkquot + ')" class="form-button add-option-button"> \
							<i class="fa fa-plus"> </i> \
							  new dropdown option \
						</button> \
						<div id="dropdown' + addincount + '" class="option-container"></div>';

	document.getElementById(elementName).appendChild(newdiv);

	addincount++;
}

function add_dropdown(elementName){

	var linecount = 0;

	var newdiv = document.createElement('div');

	newdiv.className = "option-line";

	newdiv.innerHTML = '<div class="form-button option-icon"> \
							<i class="fa fa-circle-o"></i> \
						</div> \
						<input type="text" placeholder="Label content." required="required" name="data[' + addincount + '][3][' + linecount + ']" class="input option-element option-content" /> \
						<div class="form-button option-icon"> \
							<i class="fa fa-chevron-left"></i> \
						</div> \
						<input type="text" placeholder="Dropdown value" required="required" name="data[' + addincount + '][3][' + linecount + ']" class="input option-element option-content" /> \
						<button id="element-settings' + addincount + '" type="button" onclick="#" class="form-button minus-button"> \
							<i class="fa fa-minus"></i> \
						</button>';

	document.getElementById(elementName).appendChild(newdiv);

	linecount++;
}

function add_radio_base(elementName){

	var newdiv = document.createElement('div');

	var checkquot = "'radio" + addincount + "'";

	newdiv.className = "element-container";

	newdiv.innerHTML = '<input type="text" placeholder="Enter your radio button title here." required="required" name="data[' + addincount + '][0]" class="input option-element option-title" /> \
						<input type="hidden" required="required" name="data[' + addincount + '][1]" value="radio-title" /> \
						<input type="hidden" required="required" name="data[' + addincount + '][2]" value="' + elementName + '" /> \
						<button id="element-settings' + addincount + '" type="button" onclick="add_radio(' + checkquot + ')" class="form-button add-option-button"> \
							<i class="fa fa-plus"> </i> \
							  new radio option \
						</button> \
						<div id="radio' + addincount + '" class="option-container"></div>';

	document.getElementById(elementName).appendChild(newdiv);

	addincount++;
}

function add_radio(elementName){

	var linecount = 0;

	var newdiv = document.createElement('div');

	newdiv.className = "option-line";

	newdiv.innerHTML = '<div class="form-button option-icon"> \
							<i class="fa fa-circle-o"></i> \
						</div> \
						<input type="text" placeholder="Label content." required="required" name="data[' + addincount + '][3][' + linecount + ']" class="input option-element option-content" /> \
						<div class="form-button option-icon"> \
							<i class="fa fa-chevron-left"></i> \
						</div> \
						<input type="text" placeholder="Radio value" required="required" name="data[' + addincount + '][3][' + linecount + ']" class="input option-element option-content" /> \
						<button id="element-settings' + addincount + '" type="button" onclick="#" class="form-button minus-button"> \
							<i class="fa fa-minus"></i> \
						</button>';

	document.getElementById(elementName).appendChild(newdiv);

	linecount++;
}

// ======================================================================================
// 			**END TO-BE BATCHED FUNCTIONS
// ======================================================================================


// ======================================================================================
// 			Static element functions || **END INPUT GENERATOR FUNCTIONS
// ======================================================================================

function add_static(elementName, buildtype, displaytype, class_modifier, icon, settings_action){

	var newdiv = document.createElement('div');
	newdiv.className = "element-container";
		var element_html = '<textarea placeholder="Enter your text content here." onkeyup="textAreaAdjust(this)" required="required" name="data[' + addincount + '][0]" class="input ' + class_modifier + '"></textarea>';
	if (buildtype == 'textarea') {

	} else if (buildtype == 'text') {
		var element_html = '<input type="' + buildtype + '" placeholder="Enter your default text here." required="required" name="data[' + addincount + '][0]" class="input ' + class_modifier + '" />';
	} else if (buildtype == 'table') {
		var element_html = '';
	}

	newdiv.innerHTML = '' + element_html + '\
						<input type="hidden" required="required" name="data[' + addincount + '][1]" value="' + displaytype + '" /> \
						<input type="hidden" required="required" name="data[' + addincount + '][2]" value="' + elementName + '" /> \
						<div class="form-button option-icon"> \
							<i class="fa fa-' + icon + '"></i> \
						</div> \
						<button id="element-settings' + addincount + '" type="button" onclick="' + settings_action + '" class="form-button settings-button"> \
							<i class="fa fa-cog"></i> \
						</button>';

	document.getElementById(elementName).appendChild(newdiv);

	addincount++;
}


// ======================================================================================
// 			Garbage collection
// ======================================================================================

function del_element(elementName){

	var inputval = elementIndex;
	var elementline = elementName + 'line' + elementIndex;
	var elementbtn = elementName + 'btn' + elementIndex;

	document.getElementById(elementline).setAttribute("name", "delete");
	document.getElementById(elementline).classList.add("line-delete");
	document.getElementById(elementline).readOnly=true;
	document.getElementById(elementbtn).innerHTML="+";
	document.getElementById(elementbtn).classList.add("btn-delete");
	document.getElementById(elementbtn).setAttribute("onClick", "enableInput('form', " + elementIndex + ");");
}