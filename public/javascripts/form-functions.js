// ======================================================================================
// 			Global variables
// ======================================================================================

var addincount = 1;
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
// 			Global important functions
// ======================================================================================

Element.prototype.remove = function() {
	this.parentElement.removeChild(this);
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
	for(var i = 0, len = this.length; i < len; i++) {
		if(this[i] && this[i].parentElement) {
			this[i].parentElement.removeChild(this[i]);
		}
	}
}

function refresh_sort(){
	var sectionnames = '#section-0';

	for (i = 1; i < (sectioncount + 1); i++) {
		sectionnames += ', #section-' + i;
	}

	$(sectionnames).sortable({
		connectWith: '.connected' ,
		items: ':not(.accordion-section-content, #submit-button)'
	}).bind('sortupdate', function(e, ui) {
		var parent = ui.endparent.attr('id');
		ui.item.find('.parent-spec').val(parent);
    /*

    This event is triggered when the user stopped sorting and the DOM position has changed.

    ui.item contains the current dragged element.
    ui.item.index() contains the new index of the dragged element
    ui.oldindex contains the old index of the dragged element
    ui.startparent contains the element that the dragged item comes from
    ui.endparent contains the element that the dragged item was added to

    */
	});
}

// ======================================================================================
// 			Input generator functions
// ======================================================================================

function add_input(elementName, buildtype) {
		var newdiv = document.createElement('div');
		var values = "[@][" + buildtype + "]";
		if (buildtype == 'textbox') {

			var build-primary = '<input type="text" name="data[0][' + addincount + ']" class="input text-input" required="required" placeholder="Enter your default text here." />';

		} else if (buildtype == 'textarea') {

			var build-primary = '<textarea name="data[0][' + addincount + ']" class="input text-input" required="required" placeholder="Enter your default text here."></textarea>';

		} else if (buildtype == 'checkbox') {
			var escape1 = '"checkbox"';
			var escape2 = '"checkbox' + addincount + '"';
			var build-primary =
				'<button id="element-settings' + addincount + '" type="button" onclick="add_line(' + escape1 + ' , ' + escape2 + ', ' + addincount + ')" class="form-button add-option-button">' +
					'<i class="fa fa-plus"> </i>' +
					'  checkbox option' +
				'</button>';
			var build-secondary =	'<div id="checkbox' + addincount + '" class="option-container"></div>';
		}

		newdiv.id = "container" + addincount;
		newdiv.className = "element-container accordion-section";
		newdiv.innerHTML =
			'<input type="hidden" name="data[0][' + addincount + ']" class="parent-spec" required="required" value="' + values + '" />' +
			build-primary +
			'<a class = "settings-cog" href="#settings' + addincount + '">' +
				'<i class="fa fa-cog"></i>' +
			'</a>' +
			'<div id="settings' + addincount + '" class="accordion-section-content">' +
				'<h3>Options</h3>' +
				'<p>Various settings will go here.</p>' +
			'</div>' +
			if (build-primary) {
				build-secondary +
			}
			'';
		document.getElementById(elementName).appendChild(newdiv);

		refresh_sort();

		addincount++;

}

// ======================================================================================
// 			The following function code should all be optimised into one function
// ======================================================================================

function add_checkbox_base(elementName){

	var newdiv = document.createElement('div');
	var checkquot = "'checkbox" + addincount + "'";
	var values = "['@']['textbox']";
	newdiv.id = "container" + addincount;
	newdiv.className = "element-container accordion-section";

	newdiv.innerHTML =


		'<a class = "settings-cog" href="#settings' + addincount + '">' +
			'<i class="fa fa-cog"></i>' +
		'</a>' +
		'<div id="settings' + addincount + '" class="accordion-section-content">' +
			'<h3>Options</h3>' +
			'<p>Various settings will go here.</p>' +
		'</div>' +


	document.getElementById(elementName).appendChild(newdiv);

	refresh_sort();

	addincount++;
}

function add_checkbox(elementName, datacount){

	var newdiv = document.createElement('div');
	newdiv.className = "option-line";
	newdiv.id = "line" + uniqator;

	newdiv.innerHTML =
		'<div class="form-button option-icon">' +
			'<i class="fa fa-square"></i>' +
		'</div>' +
		'<input id="' + uniqator + '" type="text" placeholder="checkbox content." required="required" name="data[]" class="input option-element option-content" />' +
		//'<input id="a' + uniqator + '" type="text" onkeyup="translateLabel(this)" placeholder="Label content." required="required" name="data[]" class="input option-element option-content" />' +
		//'<div class="form-button option-icon">' +
		//	'<i class="fa fa-chevron-left"></i>' +
		//'</div>' +
		//'<input id="b' + uniqator + '" type="text" placeholder="Checkbox value" required="required" name="data[]" class="input option-element option-content" />' +
		'<button id="element-settings' + datacount + '" type="button" onclick="#" class="form-button bin-button">' +
			'<i class="fa fa-trash-o"></i>' +
		'</button>';

	uniqator++;

	document.getElementById(elementName).appendChild(newdiv);
}

function add_dropdown_base(elementName){
	var newdiv = document.createElement('div');
	var values = "['@']['textbox']";
	var checkquot = "'dropdown" + addincount + "'";
	newdiv.id = "container" + addincount;
	newdiv.className = "element-container accordion-section";
	newdiv.innerHTML =
		'<input type="hidden" required="required" name="data[]" value="@<!" />' +
		'<input type="hidden" required="required" name="data[]" value="' + elementName + '"  class="parent-spec" />' +
		'<input type="hidden" required="required" name="data[]" value="dropdown" />' +
		'<button id="element-settings' + addincount + '" type="button" onclick="add_dropdown(' + checkquot + ', ' + addincount + ')" class="form-button add-option-button">' +
			'<i class="fa fa-plus"> </i>' +
			'  dropdown option' +
		'</button>' +
		'<a class = "settings-cog" href="#settings' + addincount + '">' +
			'<i class="fa fa-cog"></i>' +
		'</a>' +
		'<div id="settings' + addincount + '" class="accordion-section-content">' +
			'<h3>Options</h3>' +
			'<p>Various settings will go here.</p>' +
		'</div>' +
		'<div id="dropdown' + addincount + '" class="option-container"></div>';

	document.getElementById(elementName).appendChild(newdiv);

	refresh_sort();

	addincount++;
}

function add_dropdown(elementName, datacount){
	var newdiv = document.createElement('div');
	newdiv.id = "line" + uniqator;
	newdiv.className = "option-line";
	newdiv.innerHTML =
		'<div class="form-button option-icon">' +
			'<i class="fa fa-bars"></i>' +
		'</div>' +
		'<input id="' + uniqator + '" type="text" placeholder="Label content." required="required" name="data[]" class="input option-element option-content" />' +
		//'<input id="a' + uniqator + '" type="text" onkeyup="translateLabel(this)" placeholder="Label content." required="required" name="data[]" class="input option-element option-content" />' +
		//'<div class="form-button option-icon">' +
		//	'<i class="fa fa-chevron-left"></i>' +
		//'</div>' +
		//'<input id="b' + uniqator + '" type="text" placeholder="Dropdown value" required="required" name="data[]" class="input option-element option-content" />' +
		'<button id="element-settings' + datacount + '" type="button" onclick="#" class="form-button bin-button">' +
			'<i class="fa fa-trash-o"></i>' +
		'</button>';

	uniqator++;

	document.getElementById(elementName).appendChild(newdiv);
}

function add_radio_base(elementName){
	var newdiv = document.createElement('div');
	var values = "['@']['textbox']";
	var checkquot = "'radio" + addincount + "'";
	newdiv.id = "container" + addincount;
	newdiv.className = "element-container accordion-section";

	newdiv.innerHTML =
		'<input type="hidden" required="required" name="data[]" value="@<!" />' +
		'<input type="hidden" required="required" name="data[]" value="' + elementName + '"  class="parent-spec" />' +
		'<input type="hidden" required="required" name="data[]" value="radiobutton" />' +
		'<button id="element-settings' + addincount + '" type="button" onclick="add_radio(' + checkquot + ', ' + addincount + ')" class="form-button add-option-button">' +
			'<i class="fa fa-plus"> </i>' +
			'  radio option' +
		'</button>' +
		'<a class = "settings-cog" href="#settings' + addincount + '">' +
			'<i class="fa fa-cog"></i>' +
		'</a>' +
		'<div id="settings' + addincount + '" class="accordion-section-content">' +
			'<h3>Options</h3>' +
			'<p>Various settings will go here.</p>' +
		'</div>' +
		'<div id="radio' + addincount + '" class="option-container"></div>';

	document.getElementById(elementName).appendChild(newdiv);

	refresh_sort();

	addincount++;
}

function add_radio(elementName, datacount){
	var newdiv = document.createElement('div');
	newdiv.id = "line" + uniqator;
	newdiv.className = "option-line";
	newdiv.innerHTML =
		'<div class="form-button option-icon">' +
			'<i class="fa fa-dot-circle-o"></i>' +
		'</div>' +
		'<input id="' + uniqator + '" type="text" placeholder="Label content." required="required" name="data[]" class="input option-element option-content" />' +
		//'<input id="a' + uniqator + '" type="text" onkeyup="translateLabel(this)" placeholder="Label content." required="required" name="data[]" class="input option-element option-content" />' +
		//'<div class="form-button option-icon">' +
		//	'<i class="fa fa-chevron-left"></i>' +
		//'</div>' +
		//'<input id="b' + uniqator + '" type="text" placeholder="Radio value" required="required" name="data[]" class="input option-element option-content" />' +
		'<button id="element-settings' + datacount + '" type="button" onclick="#" class="form-button bin-button">' +
			'<i class="fa fa-trash-o"></i>' +
		'</button>';

	uniqator++;

	document.getElementById(elementName).appendChild(newdiv);

}

// ======================================================================================
// 			**END TO-BE BATCHED FUNCTIONS
// ======================================================================================

function add_uploader(elementName){
	var newdiv = document.createElement('div');
	var values = "['@']['textbox']";
	newdiv.id = "container" + addincount;
	newdiv.className = "upload-container accordion-section";

	newdiv.innerHTML =
		'<div id="mockup-dropzone" class="dropzone customdrop"></div>' +
		'<input type="hidden" required="required" name="data[]" value="@<!" />' +
		'<input type="hidden" required="required" name="data[]" value="' + elementName + '"  class="parent-spec" />' +
		'<input type="hidden" required="required" name="data[]" value="file-uploader"/>' +
		'<a class = "settings-cog absolute-button-top-right" href="#settings' + addincount + '">'+
			'<i class="fa fa-cog"></i>' +
		'</a>' +
		'<div id="settings' + addincount + '" class="accordion-section-content">' +
			'<h3>Options</h3>' +
			'<p>Various settings will go here.</p> ' +
		'</div>' +
		'<div class="spacer"></div>';

	document.getElementById(elementName).appendChild(newdiv);

	$("div#mockup-dropzone").dropzone({ url: "/upload", dictDefaultMessage: '<span class="dropmessage">Drop files here or click to upload.</span><br><br><span class="demo">(This is just a demo. Selected files are <strong>not</strong> actually uploaded.</span>' });

	refresh_sort();

	addincount++;
}

// ======================================================================================
// 			Static element functions || **END INPUT GENERATOR FUNCTIONS
// ======================================================================================

function add_static(elementName, buildtype, displaytype, class_modifier, icon, settings_action){

	var newdiv = document.createElement('div');
	var values = "['@']['textbox']";
	newdiv.className = "element-container accordion-section";
	newdiv.id = "container" + addincount;
	if (buildtype == 'textarea') {
		var element_html = 	'<input type="hidden" required="required" name="data[]" value="static-text" />' +
							'<textarea placeholder="Enter your text content here." onkeyup="textAreaAdjust(this)" required="required" name="data[]" class="input ' + class_modifier + '"></textarea>';
	} else if (buildtype == 'text') {
		var element_html = 	'<input type="hidden" required="required" name="data[]" value="static-title" />' +
							'<input type="' + buildtype + '" placeholder="Enter your default text here." required="required" name="data[]" class="input ' + class_modifier + '" />';
	}

	newdiv.innerHTML =
		'<input type="hidden" required="required" name="data[]" value="@<!" />' +
		'<input type="hidden" required="required" name="data[]" value="' + elementName + '"  class="parent-spec" />' +
		element_html +
		'<div class="form-button option-icon">' +
			'<i class="fa fa-' + icon + '"></i>' +
		'</div>' +
		'<a class = "settings-cog" href="#settings' + addincount + '">' +
			'<i class="fa fa-cog"></i>' +
		'</a>' +
		'<div id="settings' + addincount + '" class="accordion-section-content">' +
			'<h3>Options</h3>' +
			'<p>Various settings will go here.</p>' +
		'</div>';

	document.getElementById(elementName).appendChild(newdiv);

	refresh_sort();

	addincount++;
}

function add_file(elementName){

	var newdiv = document.createElement('div');
	var values = "['@']['textbox']";
	newdiv.className = "upload-container accordion-section";
	newdiv.id = "container" + addincount;
	newdiv.innerHTML =
		'<input type="hidden" required="required" name="data[]" value="@<!" />' +
		'<input type="hidden" required="required" name="data[]" value="' + elementName + '"  class="parent-spec" />' +
		'<input type="hidden" required="required" name="data[]" value="file" />' +
		'<input id="active-dropzone' + addincount + '" class="dropzone customdrop"></div>' +
		'<a class = "settings-cog absolute-button-top-right" href="#settings' + addincount + '">' +
			'<i class="fa fa-cog"></i>' +
		'</a>' +
		'<div id="settings' + addincount + '" class="accordion-section-content">' +
			'<h3>Options</h3>' +
			'<p>Various settings will go here.</p>' +
		'</div>' +
		'<div class="spacer"></div>';

	document.getElementById(elementName).appendChild(newdiv);
	$("input#active-dropzone" + addincount).dropzone({ url: "/upload", dictDefaultMessage: '<span class="dropmessage">Drop images here or click to upload.</span><br><br><span class="demo">images uploaded here will <strong>display in the form.</strong></span>' });

	addincount++;
}

function add_list_base(elementName){

	var newdiv = document.createElement('div');
	var values = "['@']['textbox']";
	var element_identifier = "'container" + addincount + "'";
	newdiv.className = "element-container accordion-section";
	newdiv.id = "container" + addincount;

	newdiv.innerHTML =
		'<input type="hidden" required="required" name="data[]" value="@<!" />' +
		'<input type="hidden" required="required" name="data[]" value="' + elementName + '"  class="parent-spec" />' +
		'<input type="hidden" required="required" name="data[]" value="list" />' +
		'<button id="element-settings' + addincount + '" type="button" onclick="add_list_line(' + element_identifier + ', ' + addincount + ')" class="form-button add-option-button">' +
			'<i class="fa fa-plus" style="margin-right:20px;"> </i>' +
			'Add line to list' +
		'</button>' +
		'<a class = "settings-cog" href="#settings' + addincount + '">' +
			'<i class="fa fa-cog"></i>' +
		'</a>' +
		'<div id="settings' + addincount + '" class="accordion-section-content">' +
			'<h3>Options</h3>' +
			'<p>Various settings will go here.</p>' +
		'</div>';

	document.getElementById(elementName).appendChild(newdiv);

	refresh_sort();

	addincount++;
}

function add_list_line(elementName, datacount){

	var newdiv = document.createElement('div');
	var element_identifier = "'line" + uniqator + "'";
	newdiv.className = "option-line";
	newdiv.id = "line" + uniqator;

	newdiv.innerHTML =
		'<div class="form-button option-icon">' +
		'<i class="fa fa-circle"></i>' +
			'</div>' +
		'<input type="text" placeholder="Enter line content here." required="required" name="data[]" class="input option-element list-content" />' +
		'<button id="element-settings' + datacount + '" type="button" onclick="del_element(' + element_identifier + ')" class="form-button bin-button">' +
		'<i class="fa fa-trash-o"></i>' +
			'</button>' +
		'<div class="clear"></div>';

	document.getElementById(elementName).appendChild(newdiv);

	uniqator++;
}

function add_table(elementName, tablespecs, displaytype, class_modifier, icon, settings_action){

	var newdiv = document.createElement('div');
	var values = "['@']['textbox']";
	newdiv.className = "element-container accordion-section";
	newdiv.id = "container" + addincount;

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
			var indexes = [i, j]
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
				'<input type="hidden" required="required" name="data[]" value="@<!" />' +
				'<input type="hidden" required="required" name="data[]" value="' + elementName + '"  class="parent-spec" />' +
				'<input type="hidden" required="required" name="data[]" value="table" />' +
				'<input type="hidden" required="required" name="data[]" value="' + indexes + '" />' +
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

	refresh_sort();

	addincount++;
}

// ======================================================================================
// 			Adding section functions
// ======================================================================================

function add_section(elementName){
	var newdiv = document.createElement('div');
	newdiv.className = "section accordion";
	newdiv.id = "section-container-" + sectioncount;
	newdiv.innerHTML =
		'<div class="section-header">' +
			'<div class="header-title" > Section ' + (sectioncount + 1) + '</div>' +
			'<a id="section-' + sectioncount + '-heading" class = "section-expand expanded" href="#section-' + sectioncount + '">' +
				'<i class="fa fa-minus expanded"></i>' +
			'</a>' +
			'<a class="settings-cog" href="#settings-' + addincount + '">' +
				'<i class="fa fa-cog"></i>' +
			'</a>' +
		'</div>' +
		'<div id="section-' + sectioncount + '" data-position="data[' + sectioncount + ']" class="section-body">' +
			'<div id="settings-' + addincount + '" class="accordion-section-content">' +
				'<h3>Options</h3>' +
				'<p>Various settings will go here.</p>' +
			'</div>' +
		'</div>';
	document.getElementById(elementName).appendChild(newdiv);

	addincount++;

	sectioncount++;

	refresh_sort();
}

// ======================================================================================
// 			MISC Passive action / styling functions
// ======================================================================================

function toggleVisibility(element){
	var target = document.getElementById(element);
	if (target.style.display === "none"){
		target.style.display = "block";
	} else {
		target.style.display = "none";
	}
}

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

	var trash = elementName;

	document.getElementById(elementline).remove();
}
