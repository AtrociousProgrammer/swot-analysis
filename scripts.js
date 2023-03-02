let debug = false;
function titleCase(title) {
    let n = title.length;
    return title[0].toUpperCase() + title.slice(1, n);
}
function addItem(component_title) {
    if (debug) {
        console.log('Hello from addItem');
        console.log(component_title);
    }
    let item_text = getItem(component_title);
    insertItem(component_title, item_text);
}
function getItem(component_title) {
    if (debug) {
        console.log('Hello from getItem');
        console.log(component_title);
    }

    let elem_id = `${component_title}_input_box`;
    let input_box = document.getElementById(elem_id);
    let input_text = input_box.value;
    input_box.value = "";

    return input_text;
}

function insertItem(component_title, input_text) {
    if (debug) {
        console.log('Hello from insertItem');
    }
    let list_item = document.createElement("li");
    list_item.classList.add("component_list_item");
    list_item.innerHTML = input_text;
    
    let del_button = document.createElement("button");
    del_button.type = "submit";
    del_button.classList.add("item_button");
    del_button.classList.add("item_del_button");
    del_button.innerHTML = "DELETE";

    let edit_button = document.createElement("button");
    edit_button.type = "submit";
    edit_button.classList.add("item_button");
    edit_button.classList.add("item_edit_button");
    edit_button.innerHTML = "EDIT";

    let list = document.getElementById(`${component_title}_list`);
    list_item.append(edit_button);
    list_item.append(del_button);
    list.append(list_item);
}

function createComponent(component_title) {
    let component_title_cased = titleCase(component_title);

	let main = document.getElementById("main-section");
	
    let main_div = document.createElement("div");
	main_div.classList.add("component_div");
	
    let h2 = document.createElement("h2");
    h2.classList.add("component_title");
    h2.innerHTML = `${component_title_cased}`;

    let input_box = document.createElement("input");
	input_box.classList.add("input_box");
	input_box.type = "text";
    input_box.id = `${component_title}_input_box`;
	input_box.placeholder = `What are your ${component_title_cased}?`;
	
    let input_box_submit = document.createElement("button");
	input_box_submit.type = "submit";
	input_box_submit.innerHTML = "ADD";
    input_box_submit.classList.add = "add_button"
    input_box_submit.id = `${component_title}_add_button`;

    let doOnClick = (e) => addItem(component_title);
    input_box_submit.addEventListener("click", doOnClick);
    // this also works
    //input_box_submit.addEventListener("click", (e) => addItem(component_title));

    let input_div = document.createElement("div");
    input_div.classList.add("input_box_div");
    input_div.append(input_box);
    input_div.append(input_box_submit);
    
    let list = document.createElement("ul");
	list.classList.add("component_list");
    list.id = `${component_title}_list`;
	//let list_item = document.createElement("li");

	main.append(main_div);
	//main_div.append(input_box);
    main_div.append(h2);
    main_div.append(input_div);
    main_div.append(list);
}

function createDefaultComponents() {
    createComponent('strengths');
    createComponent('weaknesses');
    createComponent('opportunities');
    createComponent('threats');
}
//document.onload(createComponent("STRENGTHS"));
window.onload = createDefaultComponents();
