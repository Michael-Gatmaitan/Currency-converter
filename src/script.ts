const el_num1 = document.getElementById("num1") as HTMLInputElement;
const el_num2 = document.getElementById("num2") as HTMLInputElement;
const addButton = document.getElementById("add-number") as HTMLButtonElement;
const result = document.getElementById("result") as HTMLDivElement;

interface inputValues {
	num1: number,
	num2: number
};

let addNumbers: (a: number, b: number) => number;
addNumbers = (a, b): number => a + b;

let triggerSubmit = (e:any): void => {
	e.preventDefault();

	const val1: number = parseInt(el_num1.value);
	const val2: number = parseInt(el_num2.value);

	const inputValues: inputValues = {
		num1: val1,
		num2: val2
	};

	const { num1, num2 } = inputValues;

	const numResult: number = addNumbers(num1, num2);

	console.log(num1, num2);
	result.innerHTML = numResult.toString();
}

addButton.addEventListener('click', triggerSubmit);