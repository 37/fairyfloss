var addincount = 0;


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