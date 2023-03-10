console.log('PMApp in TS begins...');

class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;

    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;


    constructor() {
        this.templateElement = document.querySelector('#project-input')! as HTMLTemplateElement;
        this.hostElement = document.querySelector('#app')! as HTMLDivElement;

        const importedNode = document.importNode(
            this.templateElement.content,
            true
        );
        this.element = importedNode.firstElementChild as HTMLFormElement;
        
        this.element.id = 'user-input';
        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

        this.attach();
        this.configure();
    }
    private submitHandler(e:Event) {
        e.preventDefault();
        console.log(this.titleInputElement.value);
    }
    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
    private configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }
}

const project_input = new ProjectInput();
