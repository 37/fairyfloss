var addincount = 0;

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

function add_checkbox_base(elementName){
	var newdiv = document.createElement('div');
	var checkquot = "'checkbox" + addincount + "'";
	newdiv.className = "element-container";
	newdiv.innerHTML = '<input type="text" placeholder="Enter your checkbox title here." required="required" name="data[' + addincount + '][0]" class="input checkbox-element checkbox-title" /><input type="hidden" required="required" name="data[' + addincount + '][1]" value="checkbox-title" /><input type="hidden" required="required" name="data[' + addincount + '][2]" value="' + elementName + '" /><button id="element-settings' + addincount + '" type="button" onclick="add_checkbox(' + checkquot + ')" class="form-button add-checkbox-button"><i class="fa fa-plus"> checkbox</i></button><div id="checkbox' + addincount + '" class="checkbox-container"></div>';
	document.getElementById(elementName).appendChild(newdiv);
	addincount++;
}

function add_checkbox(elementName){
	var linecount = 0;
	var newdiv = document.createElement('div');
	newdiv.className = "checkbox-line";
	newdiv.innerHTML = '<div class="form-button checkbox-icon"><i class="fa fa-circle-o"></i></div><input type="text" placeholder="Label content." required="required" name="data[' + addincount + '][3][' + linecount + ']" class="input checkbox-element checkbox-content" /><input type="text" placeholder="Checkbox value" required="required" name="data[' + addincount + '][3][' + linecount + ']" class="input checkbox-element checkbox-content" /><button id="element-settings' + addincount + '" type="button" onclick="#" class="form-button minus-button"><i class="fa fa-minus"></i></button>';
	document.getElementById(elementName).appendChild(newdiv);
	linecount++;
}

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