// ======================================================================================
// 			Global variables
// ======================================================================================

var addincount = 0;
var sectioncount = 1;

var tableref = [
	['box0', 'box1', 'box2', 'box3', 'box4', 'box5'],
	['box6', 'box7', 'box8', 'box9', 'box10', 'box11'],
	['box12', 'box13', 'box14', 'box15', 'box16', 'box17'],
	['box18', 'box19', 'box20', 'box21', 'box22', 'box23'],
	['box24', 'box25', 'box26', 'box27', 'box28', 'box29'],
	['box30', 'box31', 'box32', 'box33', 'box34', 'box35']
];

var uniqator = 9000;

// ======================================================================================
// 			Input generator functions
// ======================================================================================


function add_textbox(elementName){
	var newdiv = document.createElement('div');
	newdiv.className = "element-container accordion-section";
	newdiv.id = "container" + addincount
	newdiv.innerHTML = '<input type="text" placeholder="Enter your default text here." required="required" name="data[' + addincount + '][0]" class="input text-input" /> \
						<input type="hidden" required="required" name="data[' + addincount + '][1]" value="text" /> \
						<input type="hidden" required="required" name="data[' + addincount + '][2]" value="' + elementName + '" /> \
						<a class = "settings-cog" href="#settings' + addincount + '"> \
							<i class="fa fa-cog"></i> \
						</a> \
						<div id="settings' + addincount + '" class="accordion-section-content"> \
							<h3>Options</h3> \
							<p>Various settings will go here.</p> \
						</div>';
	document.getElementById(elementName).appendChild(newdiv);
	addincount++;
}

function add_textarea(elementName){
	var newdiv = document.createElement('div');
	newdiv.className = "element-container accordion-section";
	newdiv.innerHTML = '<textarea placeholder="Enter your default text here." required="required" name="data[' + addincount + '][0]" class="input text-input"></textarea> \
							<input type="hidden" required="required" name="data[' + addincount + '][1]" value="textarea" /> \
							<input type="hidden" required="required" name="data[' + addincount + '][2]" value="' + elementName + '" /> \
							<a class = "settings-cog" href="#settings' + addincount + '"> \
								<i class="fa fa-cog"></i> \
							</a> \
							<div id="settings' + addincount + '" class="accordion-section-content"> \
								<h3>Options</h3> \
								<p>Various settings will go here.</p> \
							</div>';
	document.getElementById(elementName).appendChild(newdiv);
	addincount++;
}

// ======================================================================================
// 			The following function code should all be optimised into one function
// ======================================================================================

function add_checkbox_base(elementName){

	var newdiv = document.createElement('div');

	var checkquot = "'checkbox" + addincount + "'";

	newdiv.className = "element-container accordion-section";

	newdiv.innerHTML = '<input type="text" placeholder="Enter your checkbox title here." required="required" name="data[' + addincount + '][0]" class="input option-element option-title" /> \
						<input type="hidden" required="required" name="data[' + addincount + '][1]" value="checkbox-title" /> \
						<input type="hidden" required="required" name="data[' + addincount + '][2]" value="' + elementName + '" /> \
						<button id="element-settings' + addincount + '" type="button" onclick="add_checkbox(' + checkquot + ', ' + addincount + ')" class="form-button add-option-button"> \
							<i class="fa fa-plus"> </i> \
							  checkbox option \
						</button> \
						<a class = "settings-cog" href="#settings' + addincount + '"> \
							<i class="fa fa-cog"></i> \
						</a> \
						<div id="settings' + addincount + '" class="accordion-section-content"> \
							<h3>Options</h3> \
							<p>Various settings will go here.</p> \
						</div>\
						<div id="checkbox' + addincount + '" class="option-container"></div>';

	document.getElementById(elementName).appendChild(newdiv);

	addincount++;
}

function add_checkbox(elementName, datacount){

	var newdiv = document.createElement('div');

	newdiv.className = "option-line";

	newdiv.innerHTML = '<div class="form-button option-icon"> \
							<i class="fa fa-square"></i> \
						</div> \
						<input id="a' + uniqator + '" type="text" onkeyup="translateLabel(this)" placeholder="Label content." required="required" name="data[' + datacount + '][3]" class="input option-element option-content" /> \
						<div class="form-button option-icon"> \
							<i class="fa fa-chevron-left"></i> \
						</div> \
						<input id="b' + uniqator + '" type="text" placeholder="Checkbox value" required="required" name="data[' + datacount + '][3]" class="input option-element option-content" /> \
						<button id="element-settings' + datacount + '" type="button" onclick="#" class="form-button minus-button"> \
							<i class="fa fa-trash-o"></i> \
						</button>';

	uniqator++;

	document.getElementById(elementName).appendChild(newdiv);
}

function add_dropdown_base(elementName){

	var newdiv = document.createElement('div');

	var checkquot = "'dropdown" + addincount + "'";

	newdiv.className = "element-container accordion-section";

	newdiv.innerHTML = '<input type="text" placeholder="Enter your dropdown title here." required="required" name="data[' + addincount + '][0]" class="input option-element option-title" /> \
						<input type="hidden" required="required" name="data[' + addincount + '][1]" value="dropdown-title" /> \
						<input type="hidden" required="required" name="data[' + addincount + '][2]" value="' + elementName + '" /> \
						<button id="element-settings' + addincount + '" type="button" onclick="add_dropdown(' + checkquot + ', ' + addincount + ')" class="form-button add-option-button"> \
							<i class="fa fa-plus"> </i> \
							  dropdown option \
						</button> \
						<a class = "settings-cog" href="#settings' + addincount + '"> \
							<i class="fa fa-cog"></i> \
						</a> \
						<div id="settings' + addincount + '" class="accordion-section-content"> \
							<h3>Options</h3> \
							<p>Various settings will go here.</p> \
						</div> \
						<div id="dropdown' + addincount + '" class="option-container"></div>';

	document.getElementById(elementName).appendChild(newdiv);

	addincount++;
}

function add_dropdown(elementName, datacount){

	var newdiv = document.createElement('div');

	newdiv.className = "option-line";

	newdiv.innerHTML = '<div class="form-button option-icon"> \
							<i class="fa fa-bars"></i> \
						</div> \
						<input id="a' + uniqator + '" type="text" onkeyup="translateLabel(this)" placeholder="Label content." required="required" name="data[' + datacount + '][3]" class="input option-element option-content" /> \
						<div class="form-button option-icon"> \
							<i class="fa fa-chevron-left"></i> \
						</div> \
						<input id="b' + uniqator + '" type="text" placeholder="Dropdown value" required="required" name="data[' + datacount + '][3]" class="input option-element option-content" /> \
						<button id="element-settings' + datacount + '" type="button" onclick="#" class="form-button minus-button"> \
							<i class="fa fa-trash-o"></i> \
						</button>';

	uniqator++;

	document.getElementById(elementName).appendChild(newdiv);
}

function add_radio_base(elementName){

	var newdiv = document.createElement('div');

	var checkquot = "'radio" + addincount + "'";

	newdiv.className = "element-container accordion-section";

	newdiv.innerHTML = '<input type="text" placeholder="Enter your radio button title here." required="required" name="data[' + addincount + '][0]" class="input option-element option-title" /> \
						<input type="hidden" required="required" name="data[' + addincount + '][1]" value="radio-title" /> \
						<input type="hidden" required="required" name="data[' + addincount + '][2]" value="' + elementName + '" /> \
						<button id="element-settings' + addincount + '" type="button" onclick="add_radio(' + checkquot + ', ' + addincount + ')" class="form-button add-option-button"> \
							<i class="fa fa-plus"> </i> \
							  radio option \
						</button> \
						<a class = "settings-cog" href="#settings' + addincount + '"> \
							<i class="fa fa-cog"></i> \
						</a> \
						<div id="settings' + addincount + '" class="accordion-section-content"> \
							<h3>Options</h3> \
							<p>Various settings will go here.</p> \
						</div> \
						<div id="radio' + addincount + '" class="option-container"></div>';

	document.getElementById(elementName).appendChild(newdiv);

	addincount++;
}

function add_radio(elementName, datacount){

	var newdiv = document.createElement('div');

	newdiv.className = "option-line";

	newdiv.innerHTML = '<div class="form-button option-icon"> \
							<i class="fa fa-dot-circle-o"></i> \
						</div> \
						<input id="a' + uniqator + '" type="text" onkeyup="translateLabel(this)" placeholder="Label content." required="required" name="data[' + datacount + '][3]" class="input option-element option-content" /> \
						<div class="form-button option-icon"> \
							<i class="fa fa-chevron-left"></i> \
						</div> \
						<input id="b' + uniqator + '" type="text" placeholder="Radio value" required="required" name="data[' + datacount + '][3]" class="input option-element option-content" /> \
						<button id="element-settings' + datacount + '" type="button" onclick="#" class="form-button minus-button"> \
							<i class="fa fa-trash-o"></i> \
						</button>';

	uniqator++;

	document.getElementById(elementName).appendChild(newdiv);

}

// ======================================================================================
// 			**END TO-BE BATCHED FUNCTIONS
// ======================================================================================

function add_uploader(elementName){

	var newdiv = document.createElement('div');

	newdiv.className = "upload-container accordion-section";

	newdiv.innerHTML = '<div id="mockup-dropzone" class="dropzone customdrop"></div>' +
						'<input type="hidden" required="required" name="data[' + addincount + '][0]" value="file-upload"/>' +
						'<a class = "settings-cog absolute-button-top-right" href="#settings' + addincount + '">'+
							'<i class="fa fa-cog"></i>' +
						'</a>' +
						'<div id="settings' + addincount + '" class="accordion-section-content">' +
							'<h3>Options</h3>' +
							'<p>Various settings will go here.</p> ' +
						'</div>' +
						'<div class="spacer"></div>';

	document.getElementById(elementName).appendChild(newdiv);
	$("div#mockup-dropzone").dropzone({ url: "/file/post", dictDefaultMessage: '<span class="dropmessage">Drop files here or click to upload.</span><br><br><span class="demo">(This is just a demo. Selected files are <strong>not</strong> actually uploaded.</span>' });

	addincount++;
}

// ======================================================================================
// 			Static element functions || **END INPUT GENERATOR FUNCTIONS
// ======================================================================================

function add_static(elementName, buildtype, displaytype, class_modifier, icon, settings_action){

	var newdiv = document.createElement('div');
	newdiv.className = "element-container accordion-section";
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
						<a class = "settings-cog" href="#settings' + addincount + '"> \
							<i class="fa fa-cog"></i> \
						</a> \
						<div id="settings' + addincount + '" class="accordion-section-content"> \
							<h3>Options</h3> \
							<p>Various settings will go here.</p> \
						</div>';

	document.getElementById(elementName).appendChild(newdiv);

	addincount++;
}

function add_table(elementName, tablespecs, displaytype, class_modifier, icon, settings_action){

	var newdiv = document.createElement('div');
	newdiv.className = "element-container accordion-section";

	for(y = 0; y < 6; y++){
		for(x = 0; x < 6; x++){
			if (((y * 6) + x) == tablespecs){
				var ty = y + 1;
				var tx = x + 1;
			}
		}
	}

	for(i = 0; i < ty; i++) {
		for(j = 0; j < tx; j++){
			var boxid = tableref[i][j];
			var element_html = '<table class="dynamic-table">';
			for (row = 0; row < (i + 1); row++) {
				element_html += '<tr>'
				
				for (col = 0; col < (j + 1); col++) {
					element_html += '<td class="sortable" style="width:' + (100 / (j + 1)) + '%; padding:20px 0;"></td>'
				}

				element_html += '</tr>'
			}

			element_html += '</table>';
			newdiv.innerHTML = element_html +
							'<input type="hidden" required="required" name="data[' + addincount + '][1]" value="' + displaytype + '" />' +
							'<input type="hidden" required="required" name="data[' + addincount + '][2]" value="' + elementName + '" />' +
							'<a class = "settings-cog" href="#settings' + addincount + '">' +
								'<i class="fa fa-cog"></i>' +
							'</a>' +
							'<div id="settings' + addincount + '" class="accordion-section-content">' +
								'<h3>Options</h3>' +
								'<p>Various settings will go here.</p>' +
							'</div>' +
							'<div class="spacer"></div>';

			document.getElementById(elementName).appendChild(newdiv);
		}
	}

	addincount++;
}

function add_file(elementName){

	var newdiv = document.createElement('div');

	newdiv.className = "upload-container accordion-section";

	newdiv.innerHTML = '<div id="active-dropzone' + addincount + '" class="dropzone customdrop"></div>' +
						'<input type="hidden" required="required" name="data[' + addincount + '][0]" value="file-upload"/>' +
						'<a class = "settings-cog absolute-button-top-right" href="#settings' + addincount + '">' +
							'<i class="fa fa-cog"></i>' +
						'</a>' +
						'<div id="settings' + addincount + '" class="accordion-section-content">' +
							'<h3>Options</h3>' +
							'<p>Various settings will go here.</p>' +
						'</div>' +
						'<div class="spacer"></div>';

	document.getElementById(elementName).appendChild(newdiv);
	$("div#active-dropzone" + addincount).dropzone({ url: "/file/post", dictDefaultMessage: '<span class="dropmessage">Drop images here or click to upload.</span><br><br><span class="demo">images uploaded here will <strong>display in the form.</strong></span>' });

	addincount++;
}

function add_list_base(elementName){

	var newdiv = document.createElement('div');

	var element_identifier = "'list" + addincount + "'";

	newdiv.className = "element-container accordion-section";
	newdiv.id = "list" + addincount;

	newdiv.innerHTML = '<input type="hidden" required="required" name="data[' + addincount + '][0]" value="list" /> \
						<button id="element-settings' + addincount + '" type="button" onclick="add_list_line(' + element_identifier + ', ' + addincount + ')" class="form-button add-option-button-fullwidth"> \
							<i class="fa fa-plus" style="margin-right:20px;"> </i> \
							Add line to list \
						</button> \
						<a class = "settings-cog" href="#settings' + addincount + '"> \
							<i class="fa fa-cog"></i> \
						</a> \
						<div id="settings' + addincount + '" class="accordion-section-content"> \
							<h3>Options</h3> \
							<p>Various settings will go here.</p> \
						</div>';

	document.getElementById(elementName).appendChild(newdiv);

	addincount++;
}

function add_list_line(elementName, datacount){

	var newdiv = document.createElement('div');

	newdiv.className = "option-line";

	newdiv.innerHTML = '<div class="form-button option-icon"> \
							<i class="fa fa-circle"></i> \
						</div> \
						<input type="text" placeholder="Enter line content here." required="required" name="data[' + datacount + '][1]" class="input option-element list-content" /> \
						<button id="element-settings' + datacount + '" type="button" onclick="#" class="form-button minus-button"> \
							<i class="fa fa-trash-o"></i> \
						</button> \
						<div class="clear"></div>';

	document.getElementById(elementName).appendChild(newdiv);

}

// ======================================================================================
// 			Adding section functions
// ======================================================================================

function add_section(elementName){
	var newdiv = document.createElement('div');
	newdiv.className = "section accordion";
	newdiv.id = "section" + sectioncount;
	document.getElementById(elementName).appendChild(newdiv);
	sectioncount++;
}

// ======================================================================================
// 			MISC Passive action / styling functions
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

function translateLabel (element) {
	var value = element.value;
	var elid = element.id;
	var sister = 'b' + elid.substring(1);
	document.getElementById(sister).defaultValue = value;
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