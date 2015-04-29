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
	newdiv.className = "element-container";
	newdiv.innerHTML = '<input type="text" placeholder="Enter your checkbox title here." required="required" name="data[' + addincount + '][0]" class="input checkbox-title" /><input type="hidden" required="required" name="data[' + addincount + '][1]" value="checkbox-title" /><input type="hidden" required="required" name="data[' + addincount + '][2]" value="' + elementName + '" /><button id="element-settings' + addincount + '" type="button" onclick="add_checkbox(checkbox' + addincount + ')" class="form-button add-checkbox-button"><i class="fa fa-plus"> checkbox</i></button><div id="checkbox' + addincount + '"></div>';

	document.getElementById(elementName).appendChild(newdiv);
	addincount++;
}

function add_checkbox(elementName){
	var newdiv = document.createElement('div');
	newdiv.innerHTML = '<div class="form-button checkbox-icon"><i class="fa fa-circle-o"></i></div><input type="text" placeholder="Enter your checkbox title here." required="required" name="data[' + addincount + '][3]" class="input checkbox-title" /><button id="element-settings' + addincount + '" type="button" onclick="#" class="form-button minus-button"><i class="fa fa-minus"></i></button>';
	document.getElementById(elementName).appendChild(newdiv);
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