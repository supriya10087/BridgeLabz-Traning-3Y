// Q4: Custom Form Builder (Forms + Classes)

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm(container) {
        const form = document.createElement("form");
        form.id = "generatedForm";

        this.fields.forEach((field, index) => {
            const label = document.createElement("label");
            label.htmlFor = `field${index}`;
            label.textContent = field.label;
            label.style.display = "block";
            label.style.marginTop = "12px";

            const input = document.createElement("input");
            input.id = `field${index}`;
            input.name = field.label;
            input.type = field.type;
            input.required = true;
            input.style.display = "block";
            input.style.padding = "8px";
            input.style.width = "100%";
            input.style.boxSizing = "border-box";

            form.appendChild(label);
            form.appendChild(input);
        });

        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = "Submit";
        submitButton.style.marginTop = "16px";
        form.appendChild(submitButton);

        const result = document.createElement("pre");
        result.id = "formDataResult";
        result.setAttribute("aria-live", "polite");

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const enteredData = this.getFormData(form);
            result.textContent = JSON.stringify(enteredData, null, 2);
        });

        container.replaceChildren(form, result);
    }

    getFormData(form) {
        const enteredData = {};
        this.fields.forEach((field, index) => {
            enteredData[field.label] = form.querySelector(`#field${index}`).value.trim();
        });
        return enteredData;
    }
}

const formFields = [
    { type: "text", label: "Username" },
    { type: "email", label: "Email" },
    { type: "number", label: "Age" }
];

const formBuilder = new FormBuilder(formFields);
formBuilder.createForm(document.getElementById("formContainer"));
