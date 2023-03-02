function titleCase(title) {
    let n = title.length;
    return title[0].toUpperCase() + title.slice(1, n);
}

function createComponent(component_title) {
    component_title = titleCase(component_title);

	let main = document.getElementById("main-section");
	
    let main_div = document.createElement("div");
	main_div.classList.add("component_div");
	
    let input_box = document.createElement("input");
	input_box.classList.add("input_box");
	input_box.type = "text";
    input_box.id = `${component_title}_input_box`;
	input_box.placeholder = `What are your ${component_title}?`;
	
    let input_box_submit = document.createElement("button");
	input_box_submit.type = "submit";
	input_box_submit.innerHTML = "ADD";
    input_box.classList.add = "add_button"
    input_box_submit.id = `${component_title}_add_button`;
    //input_box_submit.onclick()
	
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
    main_div.append(input_div);
    main_div.append(list);
}

function createDefaultComponents() {
    createComponent('Strengths');
    createComponent('Weaknesses');
    createComponent('Opportunities');
    createComponent('Threats');
}
//document.onload(createComponent("STRENGTHS"));
window.onload = createDefaultComponents();

function getItem() {
    // Get item when user clicks on ADD button
}
function addItem() {}