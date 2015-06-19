// ======================================================================================
//         Global variables
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
//          Global important functions
// ======================================================================================

Element.prototype.remove = function () {
	this.parentElement.removeChild(this);
};

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
	for (var i = 0, len = this.length; i < len; i++) {
		if(this[i] && this[i].parentElement) {
			this[i].parentElement.removeChild(this[i]);
		}
	}
};

// =========================================
//				onSort function
// =========================================

function refresh_sort(){
	var sectionnames = '#section-0';

	for (i = 1; i < (sectioncount + 1); i++) {
		sectionnames += ', #section-' + i;
	}

	$(sectionnames).sortable({
		connectWith: '.connected' ,
		items: ':not(.accordion-section-content, #submit-button)'
	}).bind('sortupdate', function(e, ui) {

		// https://github.com/voidberg/html5sortable/commits/master#sortupdate
		var newcontainer = ui.parent.children('.accordion-section');

		for (elements = 0; elements < newcontainer.length; elements += 1 ){
 		// ^^^^^
		}

		var parent = ui.endparent.attr('data-position');
		var elements = ui.endparent.children('.accordion-section');
		var inputnum = ui.item.children('input').length;

		for (j=0; j < (elements.length); j++) {
			var inputs = ui.endparent.children('.accordion-section')[j].getElementsByTagName('input');
			console.log('outer loop');
			console.log(inputs);
			for (i=0; i < (inputs.length); i++) {
				console.log('inner loop');
				inputs[i].setAttribute("name", parent + '[' + j + ']');
			}
		}

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

// ======================================================================================
// 			Input generator functions
// ======================================================================================

function add_input(elementNum, buildtype, containerClass) {
		var newdiv = document.createElement('div');
		var values = "[@][" + buildtype + "]";
		if (buildtype == 'textbox') {

			var buildprimary = '<input type="text" name="data[0][' + addincount + ']" class="input text-input" required="required" placeholder="Enter your default text here." />';

		} else if (buildtype == 'textarea') {

			var buildprimary = '<textarea name="data[0][' + addincount + ']" class="input text-input" required="required" placeholder="Enter your default text here."></textarea>';

		} else if (buildtype == 'checkbox') {

			var escape = ["'checkbox'", "'input-container-" + addincount + "'"];
			var buildprimary =
				'<button id="element-settings' + addincount + '" type="button" onclick="add_line(' + escape[0] + ', ' + escape[1] + ', [' + elementNum + ', ' + addincount + '])" class="form-button add-option-button">' +
					'<i class="fa fa-plus"></i>' +
					'  checkbox option' +
				'</button>';
			var buildsecondary = '<div id="input-container-' + addincount + '" class="option-container"></div>';

		} else if (buildtype == 'radio') {
			// SPAWN RADIO

			var escape = ["'radio'", "'input-container-" + addincount + "'"];
			var buildprimary =
				'<button id="element-settings' + addincount + '" type="button" onclick="add_line(' + escape[0] + ', ' + escape[1] + ', [' + elementNum + ', ' + addincount + '])" class="form-button add-option-button">' +
					'<i class="fa fa-plus"></i>' +
					'  checkbox option' +
				'</button>';
			var buildsecondary = '<div id="input-container-' + addincount + '" class="option-container"></div>';

		} else if (buildtype == 'dropdown') {
			// SPAWN DROPDOWN

			var escape = ["'dropdown'", "'input-container-" + addincount + "'"];
			var buildprimary =
				'<button id="element-settings' + addincount + '" type="button" onclick="add_line(' + escape[0] + ', ' + escape[1] + ', [' + elementNum + ', ' + addincount + '])" class="form-button add-option-button">' +
					'<i class="fa fa-plus"></i>' +
					' checkbox option' +
				'</button>';
			var buildsecondary = '<div id="input-container-' + addincount + '" class="option-container"></div>';

		} else if (buildtype == 'list') {
			// SPAWN DROPDOWN

			var escape = ["'list'", "'input-container-" + addincount + "'"];
			var buildprimary =
				'<button id="element-settings' + addincount + '" type="button" onclick="add_line(' + escape[0] + ', ' + escape[1] + ', [' + elementNum + ', ' + addincount + '])" class="form-button add-option-button">' +
					'<i class="fa fa-plus"></i>' +
					' checkbox option' +
				'</button>';
			var buildsecondary = '<div id="input-container-' + addincount + '" class="option-container"></div>';

		}	else if (buildtype == 'upload') {
			// SPAWN UPLOADER

			var buildprimary = '<div id="mockup-dropzone" class="dropzone customdrop"></div>';

		} else if (buildtype == 'download') {
			// SPAWN UPLOADER

			var buildprimary = '<div id="active-dropzone' + addincount + '" class="dropzone customdrop"></div>';

		} else if (buildtype == 'static-text') {

			var buildprimary =
				'<div class="form-button option-icon">' +
					'<i class="fa fa-info"></i>' +
				'</div>' +
				'<textarea name="data[0][' + addincount + ']" class="input text-content" onkeyup="textAreaAdjust(this)" required="required" placeholder="Enter your text content here." ></textarea>';

		} else if (buildtype == 'static-title') {

			var buildprimary =
				'<div class="form-button option-icon">' +
					'<i class="fa fa-header"></i>' +
				'</div>' +
				'<input type="text" name="data[0][' + addincount + ']" class="input text-title" required="required" placeholder="Enter your static title here." />';

		}

		newdiv.id = "container" + addincount;
		newdiv.className = "accordion-section " + containerClass;

		if (buildsecondary) {

			newdiv.innerHTML =
				'<input type="hidden" name="data[0][' + addincount + ']" class="parent-spec" required="required" value="' + values + '" />' +
				buildprimary +
				'<a class = "settings-cog" href="#settings' + addincount + '">' +
					'<i class="fa fa-cog"></i>' +
				'</a>' +
				'<div id="settings' + addincount + '" class="accordion-section-content">' +
					'<h3>Options</h3>' +
					'<p>Various settings will go here.</p>' +
				'</div>' +
				buildsecondary + '';

		} else {

			newdiv.innerHTML =
				'<input type="hidden" name="data[0][' + addincount + ']" class="parent-spec" required="required" value="' + values + '" />' +
				buildprimary +
				'<a class = "settings-cog" href="#settings' + addincount + '">' +
					'<i class="fa fa-cog"></i>' +
				'</a>' +
				'<div id="settings' + addincount + '" class="accordion-section-content">' +
					'<h3>Options</h3>' +
					'<p>Various settings will go here.</p>' +
				'</div>';
		}

		document.getElementById('section-' + elementNum).appendChild(newdiv);

		if (buildtype == 'upload') {

      $("div#mockup-dropzone").dropzone({ url: "/upload", dictDefaultMessage: '<span class="dropmessage">Drop files here or click to upload.</span><br><br><span class="demo">(This is just a demo. Selected files are <strong>not</strong> actually uploaded.)</span>' });

		} else if (buildtype == 'download') {

			$("div#active-dropzone" + addincount).dropzone({ url: "/upload", dictDefaultMessage: '<span class="dropmessage">Drop images here or click to upload.</span><br><br><span class="demo">images uploaded here will <strong>display in the form.</strong></span>' });

		}

		refresh_sort();

		addincount++;

}

function add_line(type, elementName, datacount) {
	var newdiv = document.createElement('div');
	newdiv.className = "option-line";
	newdiv.id = "line" + uniqator;

	if (type == 'checkbox') {
		var buildprimary =
		'<div class="form-button option-icon">' +
			'<i class="fa fa-square"></i>' +
		'</div>';
	} else if (type == 'radio') {
		var buildprimary =
		'<div class="form-button option-icon">' +
			'<i class="fa fa-dot-circle-o"></i>' +
		'</div>';
	} else if (type == 'dropdown') {
		var buildprimary =
		'<div class="form-button option-icon">' +
			'<i class="fa fa-bars"></i>' +
		'</div>';
	} else if (type == 'list') {
		var buildprimary =
		'<div class="form-button option-icon">' +
			'<i class="fa fa-circle"></i>' +
		'</div>';
	}

	newdiv.innerHTML =
		buildprimary +
		'<input id="' + uniqator + '" type="text" placeholder="' + type + ' content." required="required" name="data[' + datacount[0] + '][' + datacount[1] + ']" class="input option-element list-content" />' +
		'<button id="element-settings' + datacount + '" type="button" onclick="#" class="form-button bin-button">' +
			'<i class="fa fa-trash-o"></i>' +
		'</button>';

	uniqator++;

	document.getElementById(elementName).appendChild(newdiv);
}

// ======================================================================================
// 			Static element functions || **END INPUT GENERATOR FUNCTIONS
// ======================================================================================

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
