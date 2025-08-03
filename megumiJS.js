LINKING JS FILES

To link web page to a seperate js file, you use the src attribute like so <script src="script.js"><script>

To display output on the console section of a browsers developer tools, use the console.log function. For example
	<script>
	 console.log(723 - 8 * 23) //this will display the output result on the console but not the webpage
	<script>
Some of the most famous javascript libraries and frameworks used in the industry include: reactjs, angular and atomic for web devolpment

VALUES AND VARIABLES
CONVENTIONS AND RULES OF NAMING VARIABLES IN JS
1. Camelcase (if there are multiple words in a variable. The first word starts with lowercase and the rest start with uppercase) e.g firstName or you can use under scores e.g. first_name but camelcase is highly recommended
2. Variable numbers cannot start with numbers will bring the error: "Uncaught syntaxError; Invalid or unexpected token"
3. Variable names can only contain numbers, dolar sign and underscore
4. Variable names cannot be that of a reserved keyword e.g new, function
5. Variable names should not start with an uppercase letter
6. All variable names are reserved for constants.
7. Make sure your variable names are descriptive

DATA TYPES
A value in javascript can be either an object or a primitive value("a value that is not an object").

PRIMITIVE DATA TYPES
There are 7 data types:

1. Number : Floating point numbers. They are not written in quotation.
2. String: Sequence of characters. Are writtern either in single or double quotes.
3. Boolean: Logical type that can only be true or false and is used for making decisions
4. Undefined: Value taken by a variable that is not yet defined also termed as an empty value
5. Null: Also an empty value
6. Symbol: Value that is unique and cannot be changed.
7. BigInt: Larger integers that cannot be stored as number type

Javascript supports DYNAMIC TYPING. I.E, We do not have to manually define the data type of the value when creating a variable. Just like php

N.B - To automatically create/remove a comment using editor press ctrl + /

To know the data type of a value, the typeof operator is used. E.g, console.log(typeof true) // will output boolean in the console window

BASIC BOOLEAN LOGIC
Boolean values can be either true or false. The boolean operators are AND(&&), OR(||), NOT(!).

For AND (Dark side of the force)                      For OR(True ways of the force)                   NOT inverts a boolean value to its polar opposite

TRUE && TRUE = TRUE                                    TRUE || TRUE = TRUE
TRUE && FALSE = FALSE                                   TRUE || FALSE = TRUE
FALSE && FALSE = FALSE		          FALSE || FALSE = FALSE	
FALSE && TRUE = FALSE		          FALSE || TRUE = TRUE

FOR EXAMPLE:  A = FALSE B = TRUE
!A = TRUE
A && B = FALSE
A || B = TRUE
!A && B = TRUE
A || !B = FALSE

DECLARING VARIABLES IN JS
When declaring a constant use the const keyword and make sure you initialize it when declaring to avoid errors; 
LET is a means of declaring variables created in newer versions. The main difference between let and var keywords is that let is block based and var is function based.

BASIC OPERATORS IN JAVASCRIPT
You can add variables to be outputed in the console.log function by seperating them with a comma. LIKE SO: console.log(x, y, z);
The + operator can be used to contenate strings and join them. e.g

const firstName = 'Jonas';
const secondName = 'Mutinda';
console.log(firstName + ' ' + secondName);

- The TYPEOF is also an operator that can be used to state the data type of a specified variable.

OPERATOR PRECEDENCE
To see the operator precedence of calculations visit: https://developer.mozilla.org/en-/docs/Web/JavaScript/Reference/Operators/Operator_Precedence which shows the order of operators starting with 1 - 15. (18 being of the highest precedence i.e. grouping/parenthesis) '

STRINGS AND TEMPLATE LITERALS
While adding strings using concatenation it becomes hard to manage spaces. But with the help of TEMPLATE LITERALS it becomes easier. A template literal can combine multiple pieces to a final string. The syntax is as follows:

console.log(`The code will not work without back ticks ${string_variable}`); 

Template literals can also be used to create multi-line strings. Instead of using the \n\ escape character, you can just use the return key and it will create a new line. So long as the string is encosed within back ticks. For example:

console.log(`String with 
multiple
 lines`);

TYPE CONVERSION AND TYPE COERCION
Type conversion is when we manually convert from one data type to another while type coercion is when javascript automatically converts data behind the scenes.

TYPE CONVERSION
To convert a string into a number data type use the Number(`String to be converted`) function;
To convert a number or any other data type into a string use the String(`Number to be converted`) function;

N/B Make sure the N and S at the begining of the number and string function are capitalized to avoid errors

At the console tab in developer options, when the output in console is white while in dark mode or black in light mode, it is of a string data type and red/pink of integer data type

Javascript can only convert data into three types:
1. String String()
2. Integer Number()
3. Boolean Boolean()
and cannot convert something to null or undefined

TYPE COERSION
Type coersion normally happens whenever an operator is dealing with two values that belong to different data types and occurs in the background without showing anything. 
For example:
The line: console.log('I'm ' + 23 + 'years old'); converts the 23 to a string. Whenever a string and integer are associated in an operation such as concatenation the integers are converted to stings.
The (-), (*) and ('/')   though triggers the conversion of strings to numbers. E.g,
The line: console.log('23' - '10' - 3); will output 10 for it converts strings 23 and 10 to numbers and performs the calculation

"TRUTHY AND FALSY VALUES"
Falsy values are values that are not exactly false but will become false when we try to convert them into boolean. In JS there are only 5 falsy values:
1. 0
2. empty string
3. Undefined
4. Null
5. NaN
everything else are truthy values. Values that will be converted to true. Any number that is not a zero or string that is not an empty string will be converted to true. 

The type coercion of type boolean occurs in two scenerios:
1. When using logical operators
2. When a logical value is required for an operation such as an if else control structure

EQUALITY OPERATORS
Equality operators in js include:
1. === strict equality operator. It does not perform type coersion and only returns true if the values are exactly the same. This is the best equality operator recommended to use in code
2. ==  loose equality operator. This operator may perform type coersion if necessary

But for the NOT operator:

!== is a strict version and != is the lesser strict version

PROMPT FUNCTION
The prompt() is used to get values/user input from a webpage. For example: prompt("Enter your age"); But the value will be regarded as a string. So if you wanted an integer value,  it will be best to use the number function on per with the prompt. Like so

Number(prompt("Enter your Age"));

BOOLEAN LOGIC
Boolean logic is a branch in computer science which uses true and false values to solve complex logical problems. And uses logical operators to combine true and false values.

The operators of boolean calculations are AND, OR, NOT. When using AND the result will be true only if two or all the values in the calculation are true. Otherwise it will result to false. 

FOR the OR operator, the result will always be true as long as one of the values in the calculation is true and false if both or all values are true. 

The NOT operator on the other hand inverts a boolean value. TRUE becomes FALSE and FALSE becomes TRUE

SWITCH STATEMENT
This is an alternative for a complicated if else statement that is used to compare variables across multiple conditions.

The syntax of the switch statement is:

let variable;
switch (variable) {
            case value:
                   code statement(s);
                   break;			//lack of the break keyword would cause the switch statement execution to cover more than one code statement              case value1;                                   till it meets a break            
                   code statement(s); 
                   break;
           case value2:
                   code statement(s);
                   break;
           case value3:
                   code statement(s);
                   break;
           default:
                   code statement(s);
}

STATEMENTS AND EXPRESSIONS
An expression is a piece of code that produces a value. A statement is a bigger piece of code which when executed does not produce a value on itself such as the if and switch statements.

THE CONDITIONAL (TERNARY) OPERATOR
The ternary operator is a shorthand of writing an if-else statements. It accepts 3 operands and the syntax is:

condition ? code to be executed if true/truthy : code to be executed if false/falsy;

Example:

let age = 18;

let drink = age>=18 ? "Wine" : "Water";
console.log(drink); // will print out wine and if false water

The ternary operator can be used in a template literal, since its an operator and not a statement. For example:

console.log('I would like to drink ${`age>=18 ? 'wine🍷' : 'water💧' `}'); If age is > 18 the output would be: "I would like to drink wine". 
In a template literal the part that carries values and varaibles which is enclosed in ${ } is known as a placeholder

The ternary operator is perfect if a quick decision is being made and is opted out over the if else statement

JAVASCRIPT RELEASES
To ensure that javascipt code runs on all browsers, use Babel to convert js back to ES5 ensuring browser compatibility for all users. The process is known as transpiling and polyfilling


JS FUNDAMENTALS ----- PART 2🥳🙌🎉
ACTIVATING STRICT MODE
This is a mode in javascript that enables developers to write secure js code. To activate this mode  you have to write ('use strict';) at the begining of the script. By using strict mode, errors are much easier to be spotted and assists in writing more robust javascript code
Some of the features of strict mode include:

1. Variables must be declared: in this mode variables must be declared b4 being used to prevent accidental creation on global variables
2. Strict mode prevents deleting varaibles and functions
3. Functions cannot have duplicate parameter names which could be ignored in a non-strict mode
4. Reserved keywords such as if, this and public cannot be used as variable or function names

FUNCTIONS IN JAVASCRIPT
A function is a piece of code that can be reused over and over in our code. Parameters are like variables that are only specific to a particular function and will be defined during calling.

f_u_n_c_t_i_o_n  r_e_t_u_r_n
A function can return a value using the `return` keyword. This allows you to get a result/value from a function and use it in other parts of your program.

The programming motto of writing code is that WE SHOULD KEEP OUR CODE `DRY` I.e; Don't Repeat Yourself thus the need for using functions.

FUNCTION DECLARATIONS VS EXPRESSIONS
There are two types of functions in js, function declarations and function expressions.
Function declarations are normal functions which are created using the `function` keyword. For example:

function ageCalc(birthyear) {
       return 2037 - birthyear;		
}

let age = ageCalc(2001);

Function expressions also known as anonymous functions, are functions which are not given a name and whose value is assigned to a variable during definition.
Syntax:

const variableName = function (parameters) { // the variable name shall be refferenced as the function name during function calling
	statements;
}

For Example: 

let age = function (birthyear) {
	return 2037 - birthyear;
}        

N/B: In JS, functions are regarded as values hence can be stored in variables like the example above. To even further atest to this i tried: console.log(ageCalc(2001)); and got an output of 37.

The major difference between function declaration and expressions is that for normal functions you can call the function earlier in the code before defining it but for expression an error will occur. 

ARROW / FAT ARROW FUNCTIONS
They are a shorthand syntax for defining functions in js. Arrow functions are always anonymous as they do not have a name and can be assigned to a variable or passed as an argument to another function.

The syntax of arrow functions is:

(parameters) => { statements }

Here's an example of an arrow function that takes two parameters and returns their sum:

let ageCalc = birthYear/*parameter*/ => 2037 - birthYear//return value;

//this is equivalent of stating

let ageCalc = birthYear => {
	return 2037 - birthyear;
}

//or

const sum = (a, b) => { 
return a + b;
}

N/B: The return statement in a function body terminates execution. Therefore any code that is written after the return statement is ignored.

If the function only has one statement in the body, the curly braces and the return keyword can be omited. To call the function use the name of the variable assigned to the function. As so:

ageCalc(birthYear: 2001);

The demerit of using arrow functions is that you do not get to use the `this` keyword in OOP.

FUNCTIONS CALLING OTHER FUNCTIONS
A function can be called from within another function by simply writing the name of the function followed by parentheses and any arguments the function takes. For example:

function mutliply (a, b) {
	return a * b;
}
function square(a){
	multiply(a, a);
}
console.log(square(5)); //will output 25

INTRODUCTION TO ARRAYS
An array is a data structure that allows you to store and manipulate a collection of values of any type e.g, numbers, strings, objects or even other arrays.
In a sense it's like a container in which we throw variables and later reference them.

The two most important data structures in js are arrays and objects.

The syntax for defining arrays is: 

const array_name = [element1, element2, element3,....]; // most recommended also known as literal syntax
		or
const array_name = new Array [element0, element1, element2]; // arrays are zero based therefore counting positioning of elements begin with 0

To find the total number of elements in an array use the length property. Like so: console.log(array_name.length); // the result is not zero based hence it will begin counting from 1.
The .length property can also be used to find the last element of an array. E.g, console.log(array_name[array_name.length - 1]);

BASIC ARRAY OPERATIONS(METHODS)
1. Push method
The push method adds elements to the end of an array. 

Syntax: arrayName.push('element');

The method also returns the length of the array when prompted. e.g, console.log(variable associated with push method) // will return the number of elements in the array

2. Unshift method
Add elements at the beginning of an array. Syntax:

arrayName.unshift('element');

3. Pop method
Removes the last element from an array and returns it. Syntax:

arrayName.pop(); // no need to add arguments since it will automatically remove the last element in an array

4. Shift method
Removes the first element from an array and returns it. Syntax:

arrayName.shift();

5. indexOf 
- Used to find the position of an element in an array.

e.g, console.log(arrayName.indexOf('element_name'));   

6. includes
- Checks if an element is present in an array and return a boolean value either true or false

e.g, console.log(arrayName.includes('element_name')); //will return true if present and false if not

The includes does not perform type coersion therefore specify do not confuse with string 

INTRODUCTION TO OBJECTS (another data structure)
Apperently in javascript there is no way to reference elements in an array via names. i.e. associative arrays like in PHP
Objects are data structures used to store and organize data. They are a collection of key-value pairs, where each key is  a string and each value can be of any data type, including strings, numbers, boooleans, arrays, other objects and even functions which are referred to as 'methods'. Objects are defined using curly braces with each key-value pair separated by a coma. Eg,

let person = {
	name: "Job",	
	age: 30;
	isMarried: false,
	hobbies: ['reading', 'playing music', 'travelling'], //ARRAY
	address: {                   //object property
  	     street: '123 main st',
	     city: "Regular town",
	     state: 'CA'
	}	
};
The properties in the above code is: name, age, isMarried, hobbies, address each with their respective values

DOTS AND BRACKET NOTATION
Dots and brackets are used to retrieve and change data in objects.

Object to use for demonstration:

const job = {
    firstName: 'Job',
    lastName: 'Mutinda',
    age: 2037 - 2001,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

1. Dot notation
The dot(.) is an operator that will retrieve the property from the object specified.

console.log(job.lastname); // will output Mutinda i.e, the lastName property

2. Bracket notation
Also retrieves property value of an object

console.log(job['lastName']); //

Though the brackets notation allows one to compute the property e.g

const nameKey = 'Name';
console.log(job['first' + nameKey]);

Therefore, if you need to compute the property name first use the bracket notation and in other any case use the dot notation which is much more cleaner and easier to use.

We get undefined values when we try to access properties from an object that does not exist.

OBJECT METHODS
In javascript, an object method is a function that is a property of an object. Object methods access the object's properties and other methods using the this  keyword. Example:

const person = {
	name: 'John',
	age: 30,
	greet: function() {
		console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
	}
};

person.greet();

In the code above 'person' is an object that has three properties: name, age and greet. The greet property is a function that can be called as a method of the person object. When the greet method is called on the person object, it will log a message that includes the name and age properties of the person object.	

THIS KEYWORD
The this keywod refers to the current object that is executing the current function. It's a reference to the object that "owns" the current code being executed. The 'this' keyword is commonly used in oop to access and manipulate the properties and methods of an object. When a method is called on an object, the `this` keyword is used to refer to that object inside the method.	

const Jonas = {
	firstName: 'Jonas',
	secondName: 'Schwindler',
	birthYear: 1991,
	job: 'teacher',
	friends: ['Micheal', 'Peter', 'Steven'],
	hasDriversLicense: true,
	CalcAge: function (){
		return 2037 - this.birthYear;
	}
}
console.log(Jonas.calcAge());

There are two ways of creating a property in js:
1. objectName.newPropertyName = expression/value;  

This line should be written after object definition 
example mark.bmi = mark.calcBMI();

2. Using the this keyword

this.newPropertyName = expression / value

This way of creating a property should only be written inside a method that will be called later on after object definition. Try to perform it during object definition and should be in a method e.g 

this.bmi = this.age - this.height will result in an error

CONTROL STRUCTURES
These are constructs/statements in a programming language that allow the programmer to control the flow of program execution. They enable the programmer to specify the order in which program statements are executed based on certain conditions or criteria.

The main types of programming control structures are:
1. SEQUENCE: These are statements that are executed one after the other, in the order they are written
2. SELECTION: These statements allow the program to make decisions based on certain conditions. They include if statements, switch statements and conditional expressions
3. ITERATION: These are statements that allow the program to repeat a sequence of statements as many times as necessary based on certain conditions.

LOOPS: FOR LOOP

Syntax:

for (let counterVariable = 0; condition; counterVariable++) {

	//statements to be looped;

}

LOOPING ARRAYS, BREAKING AND CONTINUING
N/B: Arrays in javascript are treated as objects even when you run: console.log(typeof arrayName); the output will be 'object'

The code below adds new elements in an array using the for loop:

const jonas = ['Jonas', 'Scmack', 'teacher', true, 2037 - 1991, friends['Mary', 'Simon', 'Amiani']];
const types = [];
for (let i = 0; i <= job.length; i++){
	
	types[i] = jonas[i];
                types.push[(jonas[i]); // this will have the same result as the line above
}

CONTINUE AND BREAK  IN LOOPS
Continue is exiting the current iteration of the loop and continuing to the next one (when the loop meets the continue statement it will not perform any operation during the current sequence and skip) and break is used to completely terminate the whole loop.

LOOPING BACKWARDS AND LOOPS IN LOOPS
To loop backwards through an array especially, you can use the following code:

const person = [	
	'job',
	'mutinda',
	2037 - 2001,
	'programmer',
	['Micheal', 'Peter', 'Steven'],
	true
];

for (let i = person.length - 1; i >= 0; i--){ //keep in mind the logic of for loops: as long as the condition is true the loop will run'
	console.log(person);
}

LOOPS IN LOOPS/NESTED LOOPS
They are used to perform repetitive tasks that involve multiple iterations. It is mainly used to iterate through a set of data in a hierachial/structured manner. E.g looping through each row and column in an array. The outer looop would loop through each row, while the inner loop would iterate through each column in that row. Generally, nested loops are used to break down a complex problem into smaller more manageable parts and to systematically iterate through each part to perform a specific task.

Example:

for(let exercise = 0; exercise <= 3, exercise++){
	console.log(`---------------Exercise ${exercise}`);
	
	for(let reps = 1; reps <= 5, reps++){
		console.log(`Lifting weight repetition ${reps} 🏋️‍♂️🏋️‍♂️); 
	}
} 

This will output:

----------starting exercise 1

Lifting weight repetition 1 🏋️‍🏋️
Lifting weight repetition 2 🏋️‍🏋️
Lifting weight repetition 3 🏋️‍🏋️
Lifting weight repetition 4 🏋️‍🏋️
Lifting weight repetition 5 🏋️‍🏋️

----------starting exercise 2

Lifting weight repetition 1 🏋️🏋️
Lifting weight repetition 2 🏋️‍🏋️
Lifting weight repetition 3 🏋️‍🏋️
Lifting weight repetition 4 🏋️‍🏋️
Lifting weight repetition 5 🏋️‍🏋️

----------starting exercise 3

Lifting weight repetition 1 🏋️‍🏋️
Lifting weight repetition 2 🏋️‍🏋️
Lifting weight repetition 3 🏋️‍🏋️
Lifting weight repetition 4 🏋️‍🏋️
Lifting weight repetition 5 🏋️🏋️

The code below shows how to loop through a 2 dimensional array using nested loops

const twoDimArray = [
	//0: [1, 2, 3],
	//1: [4, 5, 6],
	//2: [7, 8, 9],
	//3: [10, 11, 12]
];

//looping through the array

for(let i = 0; i < twoDimArray.length;/*the length is 4*/ i++){
	for(let j = 0; j < twoDimArray[i].length;/*The length for this will be 3 i.e, each row has 3 columns*/ j++){
		console.log(twoDimArray[i][j]);
	)
};
 
WHILE LOOP
The while loop loops through a block of code as long as a specified condition is true.
The syntax for using the while loop is as follows:

while(condition){
	statements to be executed;
	increment/decrement;
}

A while loop can be used when you don't know exactly how many times you need to iterate through a block of code. The loop will continue as long as the condition statement is true. The for loop on the other hand, is best used when the number of iterations required is known. 

N/B: To get a random number in js b2n 1 and 6 use:
		Math.trunc(Math.random() * 6) + 1; // The specifics of the properties are yet to be explained. Don't know why we are adding one🤔⁉️


SECTION 3: DEVELOPER SKILLS AND EDITOR SETUP 🥳🎇🎉 #keep_up_the_grind_mofo
SETTING UP PRETTIER IN EDITOR
Go to settings/plugins and search for prettier or in the terminal enter the following commands:

1.  npm install --save-dev --save-exact prettier
2. npm install --global prettier

Then go to settings/languages & Frameworks/JavaScript/Prettier and tick on 'Reformat code' and 'on Save' and make sure to select Prettier package at the top of the section.

To ensure that single quotes are not turned to double quotes do the following:
1. create a file and rename it as: .prettierrc
2. in the file write the following code:		
		{
		        "singleQuote": true // avoids turning double quotes into single
		        "arrowParens": "avoid"	// enforces consistent use of parenthesis in arrow functions		
		}
3. To see the options that can be edited in the configuration file, visit: https://prettier.io/docs/en/options.html

CODE SNIPPETS/LIVE TEMPLATES
These allow a developer to reuse often used code fragments. For instance you can write abbreviations and the editor will autocomplete the code being reffered to. E.g cl will bring forth console.log.

To access the live templates in PHPSTORM go to: settings/editor/livetemplates/selectLanguage 
There you will see a list of abbreviations and their meaning which can be edited to personal familiarity

INSTALLING NODE.JS
After installing node.js software, go to phpstorm terminal and enter 'node -v' which will show the version number of the installed nodejs
Then enter "npm install live-server -g" npm stands for Node Package Manager which is a program to download tools. In our case the tool were downloading is 'live-server' and the g implies it should be installed globally making it available everywhere in the computer

on the terminal of editor enter "live-server" if you receive the error: live-server.ps1 cannot be loaded because running scripts is disabled on this system go to powershell as admin and enter: "Set-ExecutionPolicy Unrestricted"


PROBLEM SOLVING IN PROGRAMMING
Stay calm and slow down, don't just jump at a problem without a plan 
Take a very logical and rational approach to the problem

JONAS' 4 STEP FRAMEWORK OF SOLVING ANY PROBLEM
1. Make sure you 100% understand the problem. 'Ask the right questions' to get a clear picture of the problem(Adamat). Step back and try to find a higher level look of the big picture
2. Divide and conquer strategy. Break a big problem into as much smaller sub-problems since smaller problems are much easier to solve
3. Do as much research as necessary: google, mdn, stackoverflow
4. For bigger problems, write pseudo-code b4 writing the actual code which is simply an informal description of the actual code that will be written

USING GOOGLE, STACKOVERFLOW AND MDN
MDN contains an official documentation of javascript which contains descriptive information on how certain methods and functions work.

N/B: The code below takes two temparature arrays with errors, joins them and finds the amplitude.

const temperature[4, 34,76, 23, 'error', 98, -2];
const calcAmplitude = function (temp1, temp2) {
	const temp = temp1.concant(temp2);	
	let min = temp[0];
	let max = temp[0];
		
	for (let i = 0; i < temp.length; i++){
		let curTemp = temp[i];
		if(typeof temp !== 'number') continue;
		
		if(curTemp > max) curTemp = max;
		if(curTemp < min) curTemp = min; 
	}
	console.log(min, max);
	return max - min;
}
const amplitude = calcAmplitude(temperature, [10,43,128,-9,12]);
console.log(amplitude);

DEBUGGING FIXING ERRORS
A bug is a defect or problem in a computer program caused by unexpected or unintended behaviour
Bugs are countered through the process of debugging which is the process of finding, fixing and preventing errors

PROCESS OF DEBUGGING
1. Identifying the bug during development, testing and through user reports
2. Isolating where exactly the bug is happening in the code by using developer console for simple code or debugging software in complex code
3. Fixing by replacing wrong solution with correct piece of code
4. Preventing the code from occurring again

DEBUGGING WITH THE CONSOLE AND BREAKPOINTS
The console tab in developers window has the following output formats

console.warn() - output is displayed as a warning
console.error() - output is displayed as an error
console.table() - output is displayed in tabular format

To see browser debugging window in browser go to inspect element > sources. The debugger can stop the flow of execution of the program by using the break which enables going through line by line to trace bugs and errors.

SECTION 6: HTML & CSS ~ Tips from jonas
- The main difference between classes and ids is that classes can be used multiple times in a page(same name that is) while id name can only be used once.
- If the margin property of an element is not specified the browser automatically places a value which explains the white space that is visible in the browser.

MAJOR TIP: As common practice among developers, the auto padding and margins set by the browser for all elements should be reset 
Code for that: 	

		
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			   }
	
BOX - SIZING PROPERTY
This property in CSS allows you to contol how the total width and height of an element is calculated, including its padding and border. The default value is `content-box` which means that the width and height of an element only includes its content and does not include the padding or border

When the property value is set to `border-box`, the padding and border is included in the total width and height of the element. Useful when you want to set the width and height of the element and have its padding and border be included within those dimensions

When sizing images remember that changing the width also changes the height slightly to maintain the aspect ratio. Therefore, it's highly recommended to only adjust the width of the image to maintain a proper facade 

NTS: When progressing forward in js, met some css and html that were really way out of our current level. Therefore, we are just going to learn everything new regarding the concept and anything notable shall be inscribed here for digestion 

THE POSITION PROPERTY
The position property specifies how an element should be positioned in the document relative to its containing parent element or the view port i.e the web page blank canvas/working space. There are five possible values for the position property:

1. `static`: This is the default value and it means that the element is positioned in its normal position in the document flow
2. `relative`: This allows you to position an element relative to its normal position in the document flow without affecting the position of other elements
3. `absolute`: This allows you to position an element relative to its nearest positioned ancestor element, or the initial containing block if no ancestor element is positioned which at times may be the view port
4. `fixed`: allows you to position an element relative to the viewport, so that it remains in the same position even if the page is scrolled
5. `sticky`: Allows an element to be positioned like `relative` until it reaches a certain point and then it 'sticks' to that position like `fixed`.

UNITS TO USE IN WIDTH AND HEIGHT
1. Pixels (px): Specifies length in pixels
Will use this unit in circumstances where only a small area of the viewport is required e.g, when specifying the x & y axis affect area of box shadow 
2. Percentage; Specifies a length in percentage and is commonly used for creating responsive designs that adapt to different screen sizes

	Percentage values are used to specify sizes and positions relative to the parent element.

-Will be using this unit to specify proportional dimensions of child elements	
 
3. Viewport Units (Viewport Width `vw` and Viewport height `vh`): specifies a length as a percentage of viewport and is commonly used in responsive design to make elements scale proportionally with the viewport size. To understand the viewport dimension think of it this way:
	1 `vw` is equivalent to 1% of the viewport width same for the height. Therefore if the viewport width is 1000 px and height 500 px, 1`vw` would be equal to 10px (1000 * 0.01) and 5px(500 * 0.01). 

- will be using this unit to specify the width of height of elements

4. EMs(em): Specifies a length relative to the font size of the element they are commonly used for creating scalable designs that adapt to different font sizes and screen sizes e.g icons attached to links

-Will be using this unit to specify dimensions of images attached to text which are intented to be icons

5. REMs(`rem`): Specifies a length relative to the root element's font size. Are similar to ems but are not affected by the font size of the containing element, making them more predictable and easier to use in complex designs

-Will be using to specify padding, margins and border-radius dimensions

CSS DISPLAY PROPERTY
It is used to specify how a html element should be dispalyed on the web page. It holds values such as the block and inline, which we are already familiar with and:

`inline-block`: This creates an element that is similar to an inline element, but can have width, height and padding just like a block-level element.
`none`: hides the element completely and removes it from the flow of the document
`flex`: Creates a flex container, which is used for flexible layouts. They can contain a mix of block-level and inline-level elements and they allow you to      easily control the size and position of their child elements.	use flex to create a flexible layout that can adapt to different screen sizes and device types. 
`grid`: Creates a grid container for grid-based layouts. The containers can contain both block-level and inline-level elements and enable simplicity while creating complex multi-column layouts

CSS ALIGN-ITEMS PROPERTY
Used to control the vertical alignment of items within a flex container. It's therefore used in conjuction with the `display: flex`
It takes the following values:

1. `stretch`: default value. It stretches the items to fill the container vertically
2. `flex-start`: aligns items to the top of the container
3. `flex-end`: aligns items to the bottom of the container
4. `center`: aligns items to the center of the container
5. `baseline`: aligns items to the bottom of letter in the text i.e. baselines

For the property to work initiate the block as flex:

.container {
	display: flex;
	align-items: center;
}

There is also the align-self property that allows you to align a single element(child) in a container. Here's an example:

.container {
	display: flex;
	align-items: center;
}
.item {
	align-self: flex-start;
}

CSS JUSTIFY CONTENT PROPERTY {justify-content:     ;}
Is used to control the horizontal alignment of items within a flex container. It takes the following values:
1. `flex-start`: default value, aligns items to the left of the container
2. `flex-end`: aligns items to the right of the container
3. `center`: centers the items horizontally within the container
4. `space-between`: distributes the items evenly horizontaly with the first item aligned to the left and the last item aligned to the right
5. `space-around`: distributes the items evenly along the main axis, with equal space between each item. The space will include that of the start of the container and first item likewise for the end
6. `space-evenly`: distributes the items evenly along the main axis, with equal space between each item and at the beginning and end of the container

CSS BACKGROUND PROPERTY
Used to set all the background properties of an element at once, including the background COLOR, IMAGE, POSITION, REPEAT and SIZE. The syntax is:

			background: color image position/repeat size attachment;

N/B: The background-image property can be complemented by `background-attachment` in order to change the behavior of the image. Can have one of the following options: scroll - the background image scrolls with the rest of the page while, fixed - the image remains in place as the user scrolls.

for example;

.container {
	background: #fffff url(path/to/image.jpg) scroll norepreat cover bottom left;
}

CSS LINEAR GRADIENT FUNCTION
Is used to create a linear gradient background image, which is a gradual transition between two or more colors along a straight line. The syntax is:

		background: linear-gradient(direction, color-stop1, color-stop2.......);

direction specifies the movement of the gradient. Key words such as to top, to right, to bottom or to left can be used or degree unit `deg`. a `90`deg creates a gradient that goes from top to bottom

CSS TRANSFORM PROPERTY
The transform property in CSS is used to apply transformations i.e., changes in position, size or orientation to elements in 2D or 3D space. It is used to translate, rotate, scale, skew or any combination of these transformations to an element

The following values can be implemented with the transform property:
i) `translate`: changes the position of an element horizontally and vertically e.g:

	transform: translate(50px, 100px); 

ii) `rotate`: rotates an element to certain degrees from its original orientation. e.g,

	tranform: rotate(45deg);

iii) `scale`: scales and element twice its original size. e.g,

	transform: scale(2);

Make a mental note of this. May come handy when reducing or enhancing the size of images especially icons

iv) `skew`: makes an element not to be straight or exact. Twisting or distorting. The example below skews and element 30 degrees along the x axis and 10 degrees along the y axis:

	transform: skew(30deg, 10deg);

CSS BOX-SHADOW PROPERTY
The `box-shadow` property allows you to add a shadow effect to an element's box. It takes a list of values separated by commas, that specify the properties of the shadow effect. 
The property can accept upto five values, which specify the horizontal & vertical area of effect, blur radius, spread radius and the color of the shadow effect respectively. The third value specifies the blur radius of the shadow, which controls the amount of blur applied to the edges of the shadow. The fourth value specifies the spread radius of the shadow, which controls the size of the shadow

To enable the box-shadow on all edges set the horizontal and vertical offset to zero and set the blur radius and spread radius to a non-zero value.

CSS BACKDROP-FILTER PROPERTY
This property applies a visual effect to the area behind an element. It creates a temporary surface behind the element and applying the specified visual effect to it. The property takes a single value, which is a filter function. The most commonly used filter functions are `blur`, `brightness`, `contrast`, `grayscale`, `hue-rotate`, `invert`, `opacity`, `saturate` and `sepia` 

CSS Z-INDEX
This property determines the stacking order of elements on a web page. It only applies to elements that have been positioned using either absolute, relative, fixed or sticky. An element with a higher z index will appear infront of an element with a lower z index value. If two elements have the same z-index, the element that appears later in the html document will appear on top

JAVASCRIPT IN THE BROWSER: DOM and EVENTS FUNDAMENTALS 🎇🥳🙌 :What lies behind effort??💪🏿💪🏿
To select a HTML element to manipulate in js use the querySelector method:

document.querySelector('class/id selector'); To select text content within the element add 

console.log(document.querySelector('.message').textContent)); // for value: document.querySelector('class/id selector')value


DOM MANIPULATION(Document Object Model)
DOM is a programming interface for web documents that represents the structure of a HTML document as a tree-like model. The DOM is an object oriented representation of the web page and provides a way for js to access and manipulate the elements and content of the page.

When a web page is loaded in the browser, the browser creates a DOM tree of the HTML document. Each HTML element is represented as a node in the tree. The DOM provides a set of properties and methods for each element that allow js to access and modify the content, structure and styling of the web page. 

Through DOM, js can modify the content of a web page, change the style and appearance of elements, add or remove elements from the page and respond to user events such as clicks, keystrokes and mouse events. 

An API is a way for different software applications to communicate and share information, allowing developers to create complex, integrated systems. Other examples of APIs other than DOM are Timers and Fetch

document.querySelector('.classname').textContent = 'altered text';

document: main object i.e, the html document
querySelector: method created by dom for selecting an element within the html document 
('.classname'): html element 
.textContent: Changes text of text based elements

The value attribute can also be manipulated using DOM. E.g,

	document.querySelector('.input').value = 23;

The value of the input field will now be 23

HANDLING CLICK EVENTS
An event is something that happens in a page e.g mouse click, mouse moving, key press e.t.c then with an event listener we wait for a certain event to happen then we react to it.

There are various types of event listeners in js but the addEventListener() method is the most used 


Example of a click event: The code below logs the value of an input field to console when clicked

	document.querySelector(button).addEventListener('click', function (){
		console.log(document.querySelector(input).value);
	});

The syntax for the addEventListener method is:
	
	document.querySelector('element class/id').addEventListener('event', /*eventHandler majorly in the form of a function*/ );

The function will not be called but the js engine will immediately execute it when the event happens. For example the code bellow handles a button click 
	const secretNumber = Math.trunc((Math.random() * 20) + 1);

	document.querySelector(button).addEventListener('click', function(){
		console.log(document.querySelector(input).value, typeof document.querySelector(input).value);
		const value = document.querySelector(input).value;
		let score = 20;

		if(!value){ //if there is no value that has been inputed
			document.querySelector('.message').textContent = '🚫No number';
		}else if(value > secretNumber){
			document.querySelector('.message').textContent = '📈Too high';
			score--;
			document.querySelector('.score').textContent = score;			
		}else if(value < secretNumber){
			document.querySelector('.message').textContent = '📉Too low';
			score--;
			document.querySelector('.score').textContent = score;
		}
	});

EXPLICATION OF CODE FOR RANDOM NOs

	Math.trunc(Math.random() * 20) + 1;

Math is an object that js gives us therefore there is a range of methods for manipulating it. The random method provides a random number between 0 and 1 including decimal figures. Therefore we truncate to provide random numbers and add 1 to make sure that it reaches to end rage figure since truncating only removes the decimal and may not reach desired end rage.

It is highly recommended to use state variables in our code to hold our data rather relying on DOM such as document.querySelector().textContent. State variables are majorly used in user interfaces to respond to user input and update their state accordingly. E.g, storing the current score in a game
They are called state variables because they store data that is relevant to the application

MANIPULATING CSS STYLES USING DOM
To access the styles in a webpage for manipulation in js, you use the following syntax:

	document.querySelector('htmlElement').style.styleProperty = 'value'; // N/B: any value that is being defined in dom should be stated as a string

Conditions for the code to work:
	Any value that is being defined in dom should be stated as a string
	The css property if it consists of two words should be written in camel case notation. E.g background-color is written as backgroundColor

HOW TO APPLY THE DRY PRINCIPLE TO CODE: Don't Repeat Yourself
A technique called refactoring is used which restructures the code but still retains program functionality. Code refactoring can be accomplished through the use of functions and using the best and simplest logic to solve problems

For example the code:

The function will not be called but the js engine will immediately execute it when the event happens. For example the code below handles a button click 
	let secretNumber = Math.trunc((Math.random() * 20) + 1);
	
	document.querySelector(button).addEventListener('click', function(){
		console.log(document.querySelector(input).value, typeof document.querySelector(input).value);
		const value = document.querySelector(input).value;
		let score = 20;

		if(!value){ //if there is no value that has been inputed
			document.querySelector('.message').textContent = '🚫No number';
		}else if(value > secretNumber){
			if(value > 0){
				document.querySelector('.message').textContent = '📈Too high';
				score--;
				document.querySelector('.score').textContent = score;
			} else {
				document.querySelector('.message').textContent = '🛑you have failed the game';
			}					
		}else if(value < secretNumber){
			if(value > 0){
				document.querySelector('.message').textContent = '📉Too low';
				score--;
				document.querySelector('.score').textContent = score;	
			} else {
				document.querySelector('.message').textContent = '⛔ you have failed the game';
			}				
		}
	});

can be shortened down to avoid repition:

	let secretNumber = Math.trunc((Math.random() * 20) + 1);
	
	document.querySelector(button).addEventListener('click', function(){
		console.log(document.querySelector(input).value, typeof document.querySelector(input).value);
		const value = document.querySelector(input).value;
		let score = 20;

		if(!value){ //if there is no value that has been inputed
			document.querySelector('.message').textContent = '🚫No number';
		if(value !== secretNumber){
			document.querySelector('.message').textContent = value > secretNumber ?  '📈Too high' : '📉Too low';
			score--;
		}


		}else if(value > secretNumber){
			if(value > 0){
				document.querySelector('.message').textContent = '📈Too high';
				score--;
				document.querySelector('.score').textContent = score;
			} else {
				document.querySelector('.message').textContent = '🛑you have failed the game';
			}					
		}else if(value < secretNumber){
			if(value > 0){
				document.querySelector('.message').textContent = '📉Too low';
				score--;
				document.querySelector('.score').textContent = score;	
			} else {
				document.querySelector('.message').textContent = '⛔ you have failed the game';
			}				
		}
	});

MODAL WINDOW PROJECT
JONAS TIP: At the beginning of every project create variables that will be reffering to selectors that will be used through out the project	
- The underhand of using the query selector is that if there are multiple elements with the same class/id name that you want to select, it will only select the first one. Therefore a selector called `document.querySelectorAll('')` is used. For example for our modal project which requires us to select three buttons we shall use:  

	document.querySelectorAll('show-modal');

If we log it to console, it will show a node list of all the selected elements which are treated as elements of an array

WORKING AND MANIPULATION OF CLASSES IN JS
Apparently an element in html can have more than one class applied to it😲🤯 This is done by adding class names in the `class` attribute of the element in html. E.g:
	
	<div class="button primary">Click me!</div>

The `classList` property of this element would return a `DOMTokenList` (Tokens refer to individual class names that are part of the set of classes applied to an element) object with two items in it: button and primary. This in turn brings us to the classList property.
It is a read-only property of an element's DOM object that allows you to access the set of classes applied to that element. It returns a DOMTokenList object, which represents a set of space-separated tokens. The property provides the following methods to manipulate the classes of an element:

1) add(className) - Adds the specified class(es) to the element. If there are several I presume they are separated by a coma
2) remove(className) - Removes the specified class from the element
3) toggle(className) - Toggles the specified class on or off the element, depending on whether they are currently applied or not i.e., if present will be removed, if absent will be added
4) contains(className) - Returns a boolean indicating whether the element has the specified class applied to it
5) replace(oldClass, newClass) - replaces the specified class with a new one

N/B: make sure to not add `.` when specifying the className like so: element.classList.remove(`className`); NOT element.classList.remove(`.className`); Remember the `.` is only for the selector

The first class associated with the element is what Will be used to recognize it while using the classlist
		
KEYBOARD EVENTS
Keyboard events are also called global events because they do not happen on one specific element and is listened on the whole document. Therefore the  event listener is added to the whole document. Like so:

	document.addEventListener('keydown', function(){/*function code*/});

There are three types of events on the keyboard: keydown, keypress or key up
1. keyup: happens when you lift your finger of a key
2. keypress: happens continuously when you keep your finger on a certain key
3. keydown: occurs as soon as you press down a key //regularly used

Every time an event occurs an object is created with details pertaining the event. The event object is a built-in object that is passed to an event listener function when an event is fired. The `event` object contains various properties and methods that provide information about the event that was fired, as well as methods for preventing the default behavior of the event.

Some of the properties that can be associated with the object include:
	`event.key`: retrieves the physical key that was pressed
	`event.keyCode`: retrieves the keycode of the pressed key
	`event.pageX` & `event.pageY`: retrieves the coordinates of the mouse pointer
	`event.button`: determines which mouse button was clicked
	`event.type`: returns the type of the event that was fired
	`event.currentTarget`: returns a reference to the DOM element that the event listener was attached to
	`event.Target`: returns a reference to the DOM element that the event listener was attached to
	`event.preventDefault()`: prevents the default behavior associated with the event
	`event.stopPropagation()`: stops the event from propagating further up the DOM tree. i.e., prevents the event from triggering any other event listeners attached to parent elements 
To access the object you add a parameter to the event handler function like so:

		document.addEventListener('keydown', function(eventObject){
			console.log(eventObject.key);
		});
		
The code for closing a modal window using an escape key is as follows: 

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function(e){
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
const closeModal = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function(e){
  //console.log(e.type);
  if(e.key === 'Escape' && !modal.classList.contains('hidden')){
      closeModal();
    }
})		

STATUS AS OF 03/09/2024: TOOK A YEAR BREAK FROM JS BACK STRONGER THAN EVER. LETS DO THIS!!
PIG GAME PROJECT
JONAS TIP: Flow charts help us to visualize the logic of a program to sketch up such diagrams go to diagrams.net or drawio.com

When selecting elements we normally use:

document.querySelector('.className')
document.querySelector('#idName')

But if you are just selecting an id, just use:

document.getElementById('idname')

In the following code, there is a '+ 1' because when we say '* 6' we are basically stating (0-5) therefore we add 1 to ensure the range is 1 - 6 and there is no 0

const dice = Math.trunc(Math.random() * 6) + 1;

To access an attribute of a html element in javascript, we access it like an object property. Example: 
document.querySelector('.imageClass').src=`${some-dynamic content}`

Which means we can consider making dynamic content by also considering other factors than code. e.g., file names

P2N: You will only specify whether an element is a class or id when using: `querySelector()`. for `.classList.method()` & `.getElementById()` just enter name without . or #

P2N: During function calling, ask if its javascript that will be calling the function or explicit calling from code. If its javascript leave out the `()`

SECTION 8: HOW JAVASCRIPT WORKS BEHIND THE SCENES

JS IS A:
1. High-level ~ in the sense that javascipt automatically manages resources required i.e., memory, cpu time
2. Prototype-based Object-oriented ~ Everything is an object except for primitive values
3. Multi-paradigm - in the sense that it supports the use of procedural, oop & functional progamming styles
4. Interpreted / Just-in-time compiled
5. Single-threaded & Event loop concurrency model:

- Single-threaded - js only does one task at a time

- Concurrency model - This is how js engine handles multiple tasks at the same time. Even though it runs on a single thread. 

- Non blocking behaviour - Long running tasks are not blocked to release resources
- Event loop - long running tasks are executed in the background and put in the main thread once finished

6. Garbage-collected - Ensures that there is no memory wasted and optimized use of resources
7. First-class functions Functions are treated just like variables. Example is like passing a function as a parameter of another function

JAVASCRIPT ENGINE AND RUNTIME
JS ENGINE - Program that executes javascript code

A JS ENGINE CONTAINS THE FOLLOWING: 
1. Call stack - Where js code is executed using execution context
2. Heap - Unstructured memory pool which stores all the objects that our application needs

PROCESS OF RUNNING JS CODE:
1. PARSING - js code is parsed to a data structure (Abstract Syntax Tree) and is checked for syntax errors
2. COMPILATION - Takes the generated AST and compiles into machine code
3. EXECUTION - Since js uses Just-in-Time compilation, the machine code is executed right away which happens in the call stack

JAVAscript RUNTIME
JS runtime consists of the js engine which has the heap and call stack, WEB APIs which are functionalities provided to the engine e.g., DOM, TIMERS, FETCH API and callback queue which is a data structure that contains all the callback functions that are ready to be executed

EXECUTION CONTEXT 
- Environment in which a piece of js is executed. Stores all the necessary information for some code to be executed e.g., function

BARD: An execution context is a fundamental concept that defines the environment in which JavaScript code is executed. It provides the necessary context for variables, functions, and the current code execution.

WHAT IS INSIDE AN EXECUTION CONTEXT
1. Variable environment ~ Contains all the variable and constant declarations, functions and arguments object
2. Scope chain ~ Contains references to variables that are located outside of the current function and is stored in each execution context
3. this keyword

Arrow functions however do not get the this keyword and the arguments object

The call stack is basically a place where execution contexts get stacked on top of each other, in order to keep track of where we are in the programs execution. The execution context that is at the top of the call stack is the one that is currently running and when finished is removed from the call stack

CONTENTS OF AN EXECUTION CONTEXT
1. SCOPE CHAIN
- SCOPING: How program variables are organized and accessed
- Lexical scoping: The way variables are organized and accessed is entirely controlled by the placement of functions and of blocks in the programs code
- Scope - is the space or environment in which a certain variable is declared. There is global scope, function scope and block scope

BLOCK SCOPE:

- variables declared inside a block such as an if block are not accessible outside that block. Those are variables declared using `let` & `const` not `var`. Functions are also treated as block scope in `strict mode`

- Which means all functions declared in that block are only accessible in that block. This is only true for strict mode

- Scope of a variable - region of code where a certain variable can be accessed
P2N: a function called inside another function has access to variables called by the parent function
P2N: When a variable is called, js looks for it in the current scope before looking further up in the scope chain. They are actually treated as different variables because they are in different scopes

HOISTING ~ This is making some types of variables accessible in code b4 they are declared

Temporal Dead Zone - Point from which the scope of a variable begins to the point where the variable is actually defined. 

JTIP: To avoid unnecessary errors do not use var to declare variables, use let or const
      Declare your variables at the top of each scope
      Declare your functions first and then use them after declaration
      
The WINDOW object in JavaScript is a global object that represents the browser window. It provides access to a variety of properties and methods related to the browser's environment and behaviour.

And variables declared using var are added as properties to the window object

THE THIS KEYWORD
It is a special variable that is created for every execution context(every function)

P2N: value of `this` depends on how the function is called and its value is only assigned when the function is actually called. For example, when used in a method, the this keyword points to the object on which the method is called

The this keyword cannot be used on an arrow function. When used it will be referencing the this keyword of parent function

When called in the global scope its points to the window object

If used this way in a function: 

const calcAge = function(birthYear){
  console.log(2037 - birthYear);
  console.log(this);
}
calcAge(2001);

The cl returns `undefined` and this is because we are using strict mode. If not it will point to the window object

P2N: Method borrowing is taking the value of an object's method and assigning to another object property

P2N: The this keywords always points to the object that is calling the method


REGULAR FUNCTIONS VS ARROW FUNCTIONS
P2N: The var keyword actually creates a property in the window object
JTIP: Never use an arrow function as a method

If you use the this keyword inside in a nested function you will get undefined bcse the this keyword is only bound to the method that was called along side an object. To counter this we use an arrow function bcse it always looks for the this of parent scope. 

ARGUMENTS KEYWORD ~ When called upon will list all arguments of an object which are placed in an array

TYPES OF FUNCTIONS 
1. FUNCTION EXPRESSION (`Cannot by hoisted`)
2. ARROW FUNCTION(`cannot be hoisted. 'arguments' keyword`. Uses)
3. FUNCTION DECLARATIONS(`can be hoisted`)

PRIMITIVES VS OBJECTS
THE PRIMITIVE data types of js are: 
Number, string, boolean, undefined, null, symbol, bigInt. Any thing other that these are deemed as objects(`REFERENCE TYPES`). i.e.,

1. Object literal
2. Arrays
3. Functions

For reference on how primitive and object references work in memory, take a look at image in `~/Documents/megumi/slides`.
From the image you will note that you cannot have two copies of the same object by simply using the assign operator. There can be more than one variable names referencing the same object.

To have two copies of the same object use the `Object.assign()` method. Example:

onst jessica = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = 'Mutinda';
console.log('B4 marriage: ', jessica);
console.log('After marriage: ', jessicaCopy);

If there is a nested object in the object that you want to clone, Object.assign() will not copy the nested object, there will be two references to the same object still. For that to happen, you will need to use an external library e.g., Lo-Dash for `DEEP CLONING`

< ---------------------------------------SECTION 9: DATA STRUCTURES, MODERN OPERATORS AND STRINGS------------------------------------------ >

DESTRUCTING ARRAYS

Destructing is a feature that allows us to unpack values from an array/object into separate variables

Example

const arr = [1,2,3];

const [x, y, z] = arr; //the operator for destructing is `[]` on the left side of an assignment operator

P2N: If you want variables for let's say the first and third elements of an array. You can leave it out between the destructing operator. 

const arr = [1, 2, 3];

const [x, , z] = arr;

Swapping can also be done using destructing. For example: 

[secondary, main] = [main, secondary]; 
- [secondary, main] creates a new array containing the current values of secondary and main in that order.
-  The syntax [main, secondary] is used to destruct the array on the right-hand side. This means that the values in the new array are assigned to the variables main and secondary respectively.

DESTRUCTING OBJECTS
To destruct objects we use `{}` because its how we create objects. Example: 
	 
	const {name, openingHours, categories} = restaurant; //the names in between `{}` refer to property names of `restaurant` object
	console.log(name, openingHours, categories);
	
If you want the variable names to be different from the property names use `:`. Example:

	const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
	
Which is necessary when dealing with third party data. Its proper practice to define our variables with starter value just incase the property doesn't exist. E.g., 

	const {name = [], openingHours: hours = []} = restaurant;
	
If you want to destruct to already existing variables use ({} = obj); Example:

let a = 2;
let b = 3;

const obj = {a:23, b:22, c:25};
({a, b} = obj);

NESTED OBJECTS
Assuming we have the following object:

const restaurant = {

	openingHours: {
		thur: {
			open: 11,
			close: 12,
		}
		fri: {
			open: 13,
			close: 20,
		}
	}

}

to create open & close variables,

const{openingHours: {thur: {open, close}}} = restaurant;

Destructing can be dynamically used in function calling. Like so: 

const restaurant = {

	orderDelivery: function({starterIndex, mainIndex, time, address}){
    		console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} hrs`)
  	}
}

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

P2N: You can also add default values to parameters to avoid getting `undefined error`

SPREAD OPERATOR(...)
This operator expands an array into individual elements allowing you to perform various operations more concisely

Example:
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr]; //will output: 1,2,7,8,9,

The spread operator is majorly used to: 
1. Create shallow copies of an array
2. Merge two arrays together
3. Pass in multiple arguments to a function. Example: 

//method inside an object

orderPasta: function(ingredient1, ingredient2, ingredient3){
	console.log(`Your pasta was prepared using: ${ingredient1}, ${ingredient2} and ${ingredient3}}`);
},
};

const ingredients = ['Mahindi', 'minji', 'managu'];

//calling of method
obj.orderPasta(...ingredients);


4. Duplicating an object
~ instead of using `.assign()` to duplicate an object, we can use the spread operator. Example:

const objCopy = { ...obj };

//if you want to add new values: 

const objCopy = { name: 'objCopy', ...obj, date: 1998 };

ITERABLES - These are objects that can be iterated over using a loop. Things like:
 1. Arrays
 2. Characters in a string
 3. Maps
 4. Sets
 5. Arguments object
 6. NodeLists: `.classList`
 
 REST PATTERN AND PARAMETERS
 The rest operator collects multiple elements and condenses them into an array. To use the rest operator use `...` but on the left side of the `=` operator. For example:
 
const arr = [1, 2, 3, 4, 5];
const [a, b, c, ...others] = arr;//in this case its used along side destructing and `others` will be an array of elements `3,4,5`

The rest operator must be used as the last one while destructing or you will get an error

can be used in the following scenarios: 

1. Destructing
2. In functions. especially calling

SHORT CIRCUITING
&& and ||

PROPERTIES OF LOGICAL OPERATORS IN JAVASCRIPT
1. They use any data type not just boolean values from expressions
2. They return any data type
3. They do short-circuiting/short circuit evaluation i.e., if the first value is a `truthy` value, the other operand will not even be evaluated and will return the first operand

CAN BE USED IN THE FOLLOWING WAYS FOR SHORT CIRCUITING PRACTICALLY
&& is perfect to use if you want to check if a certain method exists. For example 

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); //will check if method exists and if it doesn't will automatically skip line of code and if it does will evaluate second operand and for us that means method calling

|| can be used to assign a default value to a method. Example: 

const numGuests = restaurant.numguests || 20; //will check if numguests exists and if false will go to second operand

NULLISH COALESCING OPERATOR(??)
Works with the concept of null or undefined. Example:

const guestCorrect = restaurant.numGuests ?? 10; //if restaurant.numGuests is not defined the value will be 10. If defined, short circuits
console.log(guestCorrect);

LOGICAL ASSIGNMENT OPERATORS

This is a shorthand for short circuiting expressions. E.g.,

restaurant.numGuests = restaurant.numGuests || 10; //checks if a property exists

//can be shortened to

restaurant.numGuests ||= 10;

The advantage of using logical assignments is that it short circuits without setting any value to undefined

THE FOR...OF LOOP
Enables us to access a single item of a data structure. e.g., array. Example: 

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) {
		
		console.log(item);
		
	}	
	
Since we cannot access the index of individual elements when we use `for of`, we can use the entries method that returns an iterable object. Each entry in the Iterator is a two-element array, where the first element is the index (or key) of the entry, and the second element is the corresponding value.

Example:

for(const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

But after applying destructing we can shorten it down to:

for(const [i, o] of menu.entries()) {
	cl(`${i}: ${o}`);
}

ENHANCED OBJECT LITERALS
If you have an object that you would like to have inside another object, just specify its name as part of its properties. E.g.,

const hours = {
	opening: 22,
	close: 12,
}

const workplace = {
	name: myworkplace,
	hours,
	profit: $30,
};

In newer versions there is no need of using `: function` when defining methods. Example: 

//from
orderpasta: function() {}

//to
orderPasta(){

}

OPTIONAL CHAINING
- This is a javascript syntax that provides a safer way to access deeply nested properties of an object when there is a possibility that one or more of the intermediate objects might be null or undefined. Basically it checks if the value on the left exists

P2N: If you want to use a variableName as a property notation, you have to use square brackets. E.g., restaurant.openingHours[day] //day is a variable name in this case


EXAMPLE OF OPTIONAL CHAINING IN USE:

const days = ['thur', 'fri', 'sat'];

for(const day of days){
  const open = restaurant.openingHours[day]?.open ?? 'closed'; //if openingHours[day] doesn't exist the value is replaced to 'closed'
  console.log(`on ${day} we open at ${open}`);
}

EXAMPLE 2:

if(currentAccount?.pin === Number(inputLoginPin.value)){ //the pin property will only be read if it exists
    console.log('login');
}
	
Optional chaining can also be done on methods. Example: 

P2N: cl stands for console.log and it is what i would be using from now on

cl(object.methodName.?() ?? 'method not defined'); //checks if methodName exists and if it does, calls it. If not message of 'not defined' is sent to console

PROPER EXPLICATION 'BARD'

const person = {
  address: {
    street: '123 Main St'
  }
};

const streetName = person?.address?.street;

EXPLANATION

~ The ?. operator is placed before a property access.
~ If the left-hand side of the operator is null or undefined, the entire expression evaluates to undefined without throwing an error.
~ If the left-hand side is not null or undefined, the expression proceeds to access the property.


LOOPING OBJECTS: OBJECT KEYS, VALUES AND ENTRIES
The `Object.keys()` method returns an object containing the properties of an object we specify during calling and keys of an array if it's an associative array. If not, probably index value

Example.,
const properties = Object.keys(openingHours);
console.log(properties); //will output the properties of the openingHours object

If you want to access the values, use `Object.values()`. Example:

const values = Object.values(openingHours);
console.log(values);

To access both key and value, use `Object.entries()`. Example

const entries = Object.entries(openingHours);
for([day, {open, close}] of entries){{
	cl(`on ${day} we open on ${open} and close at ${close}`);
}

CURRENT SECTION CODING CHALLENGE 2 REQ

Q2. DON'T DESTRUCT the object into variables to find the avg
characters that make up the string. Example: 

const ordersSet = new Set([
P2N: If you want to access key value pairs of an array use .entries e.g., const keyValue = myArray.entries(); But to get property value pairs of an object you have to use `Object.entries(ourObject)`
	

SET DATA STRUCTURE
Collection of unique data values. There are no duplicates in a set. It accepts iterables example it accepts Strings and will output characters that make up the string. Example: 

const ordersSet = new Set([

	'Pasta', 
	'Risotto',
	'pizza',

]);

cl(ordersSet);

P2N: Sets do not have indexes

The main use of sets is to remove duplicates from our arrays

If you want to have an array of unique values instead of a set. Use the spread operator. Example: 

myArray = [2,2,3,3,45.9];
const arraySet = [...new Set[myArray]]; //this will make arraySet to be an array

If you want to know the number of unique values you can also do it during initialisation. Example:

cl([new Set('Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter').size);

//to find number of unique characters in a string


PROPERTIES AND METHODS OF WORKING WITH SETS
1. size - returns the number of elements in the set
2. add() - adds a new element to the set
3. has() - checks if set has specified element
4. clear() - removes all elements from the set
5. forEach(callbackFunction): calls a function for each element in the set
6. values(): returns a new iterator object containing the values of the set
7. entries() - returns a new iterator object containing pairs of [key, value] for each element in the set

MAPS
Data structures that allows to map values to keys. The keys can be of any data type not just string like in objects.

The `set() method allows us to add key value pairs to a `map`

Since the set() method returns a map object we can chain the `.set()`. Example: 

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'we are closed');


To access an element we use the get() method where we specify the `key` and return the value.

map can also be used to save DOM elements. Example: 

rest.set(document.querySelector('h1'), 'heading')

PROPERTIES AND METHODS WORKING WITH MAP 
1. size - returns the number of key value pairs in the map
2. set(key, value) - adds a new key value pair to the map
3. has(key) checks if map contains specified key
4. delete(key) - removes the key-value pairs from the map
5. keys() - returns a list of keys in map
6. values() - returns a list of values in map
7. entries() - returns an object containing pairs of [key, value]
8. get(key) - retrieves the value associated with specified key


We can convert an already existing object into a map using Object.entries(). Example:

const hoursMap = new Map(Object.entries(openingHours));

If you want to convert a map to an array. You can do this using the spread operator. E.g.,

const question = new Map([
    ['question', 'What is the best programming language in the world'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again!'],
]);

const questionArr = [...question];

WHERE TO USE WHICH DATA STRUCTURE

There are 4 data structures in js: array, sets, objects, maps, weakMap, weakSet

If you need a simple list, use either an array or set
If you need key/value pairs, use either Objects or maps

Data from a web API uses the format of `json (JavaScript Object Notation)`. It is a text-based format that uses key-value pairs to represent data. Is comparable to javascipt objects

WORKING WITH STRINGS
The following attributes and methods can be used alongside the strings:

1. length
2. slice() ~ used to extract a portion of a string based on specified index. Example:  
3. lastIndexOf() ~ returns the index value of the last occurence of a specified value in an array or string
4. indexOf() ~ returns the index value of a specified value in an array or string
5. toLowerCase() - converts string to lowercase
6. toUpperCase() - converts string to uppercase .e.g., 'string'.toUpperCase() // will be converted to STRING
7. replace() - replaces the value being search for with a new specified value
8. replaceAll() - replaces all occurences of the value being search for with a new value
9. startWith() - determines whether a string starts with specified value //returns a boolean value
10. endsWith() - determines whether a string ends with a specified value // returns a boolean value
11. includes() - checks if a value has specified value //returns a boolean value
12. trim() - removes leading and trailing whitespaces in a string. There exists `trimEnd()` for removing whitespaces at the end && `trimStart()`
13. split() - divides a string into an array of substrings based on a specified separator. Example:
                
                console.log('a+very+nice+string'.split('+'));
                console.log('Job Mutinda'.split(' '));
                
14. join() - Is used to create a new string by joining all elements of an array, separated by a specified separator
15. padStart() - Used to add characters(often spaces or 0s) to the beginning of a string to achieve a desired length or format. When a character to be added is not specified, the default will be set to space
16. padEnd() - Used to add characters(often spaces or 0s) to the end of a string to achieve a desired length or format
17. repeat() - repeats a string by the specified number of times

const airline = 'TAP Air Portugal';
airline.slice(4, 7); //gets a substring starting from the beginning index to last index. From our string that would mean 'Air'

We are able to use methods on strings even though its not an object because of `boxing`. Js takes the string and converts it into an object using `new String()`

P2N: If you provide an index as -ve in slice(), counting starts at the end of array/string

P2N: Regular expressions were used as a work around of selecting more than one word when using `replace()`. Example:

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace(/door/g, 'gate'));

STRING PADDING ~ Technique used to add characters(often spaces or 0s) to the beginning or end of a string to achieve a desired length or format

Example: message.padStart(20, '+').padEnd(30, '+'); //will output: +++++++++++++++++Cat++++++++++


SECTION 10: A CLOSER LOOK AT FUNCTIONS
1. DEFAULT PARAMETERS
This is assigning a defualt value for methods that will be called. Example

const bookingHours = function(time = 1400, numpassengers = 1){

    cl(time, numPassengers);

}

bookingHours(1800, 4);

if you want to leave out an argument during calling in order to use default parameter, use `undefined`. Example:

bookingHours(undefined, numPassengers);

PASSING ARGUMENTS
When we pass primitive values as arguments, we are basically creating copies of the arguments to the function. But when we pass in an object, any changes made to a property is permanent.

HIGHER ORDER FUNCTIONS && FIRST-CLASS FUNCTIONS

Higher order ~ function that receives another function as an argument, that returns a new function or both example: addEventListener

FIRST CLASS FUNCTIONS ~ Just a concept of functions being treated as values

FUNCTIONS USING CALLBACK FUNCTIONS
A function can have another function as an argument. And to use it, you must not add `()` as if calling. Just the name of the function.

EXAMPLE OF HIGHER FUNCTION:

const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

//higher order function
const transformer = function(str, fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);

- name() ~ when called returns the name of a function 

In this line: transformer('JavaScript is the best!', upperFirstWord);

`transformer()` is the higher order function && `upperFirstWord` is the callback function

Abstraction - done by hiding pieces of our code. This is done through the use of callback functions which we can term as `low level functions`

FUNCTIONS RETURNING FUNCTIONS
When a function has the value return as a function, you can call the functions either by: 

const functionName = outerFunctionName();

or

outerFunctionName(parameters)('parameters for inner function') //this is a technique used especially in functional programming paradigm

P2N: Just a reminder, this is the syntax of an arrow function in js:

const `or` let functionName = parameter `or` (parameters) => expression `or` {

                    expressions
                    
}

CALL && APPLY METHODS 
The this keyword returns undefined when called in a regular function, in the global context('if we are in strict mode') or when used inside a global function. But we can reffer to a specific method using: `call, apply or bind`

Example, assuming we have the following object which has `book()` method.

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],

    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name}); //creates elements in the array bookings with properties flight and name. Even though we haven't explicitly told js the property name it will proceed regardless
    }

};

const kq = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// MENU FADE ANIMATION
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));
    }

};

If we want to use `book()` in another method, it is not recommended to copy paste. There we use can use call like so: 

const booking = lufthansa.book(); //booking becomes a function

Functions are objects. Therefore we can call methods upon them. 

booking.call(kq, 2489, 'Jet San'); //The book method will be used in the context of the kq object

The call method basically manipulates the this keyword to point to an object of our liking. or manually set the this keyword

APPLY METHOD
Takes in two arguments: the thisKeyword argument and an array containing the arguments. This method is depreciated though and its recommended to use the call method. 

P2N: We can use the call method with spread to simplify code. Example:

const flightData = [583, 'George Cooper'];
book.call(swiss, ...flightData);


BIND METHOD
Does not call the method but returns a new method where the this keyword is bound. Example

swissBook = book.bind(swiss);

By using the bind method, it is possible to set the value of a single argument. E.g.,

const bookEW23 = book.bind(eurowings, 23); //here we are presetting the value for the flightNum parameter
bookEW23('Jonas Schmedtman'); //will use the flightNum variable as 23
bookEW23('MarthaCooper');

P2N: PARTIAL APPLICATION ~ specifying parts of the arguments beforehand making parts arguments in original function already applied. 'PRESETTING PARAMETERS'
P2N: The this keyword always points to the element on which that handler/method is attached to. Example when a method with a this keyword is used in an eventListener, the this keyword will point to the element that will make use of the event handler. E.g.,

//with Event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

CHALLENGE 1: 
P2N: Do not overthink solutions. Use the best and most efficient way to solve problems and that means minimal code. Programmers are lazy. REVIEW STARTER CODE

IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
These are functions that are defined and called immediately upon declaration. Example:

(function(){
    cl('some text');
})();

Example of an arrow function IIFE:

(() => cl('some text'))();

GENERAL SYNTAX: 

(function parameters && function body)(/*calling*/);

Is not a feature of javascript but rather a pattern created by programmers to enable immediate function calling. Is majorly used to make use of scoping of variables.

CLOSURES
A function has access to the variable environment of the execution context in which it was created.

A closure gives a function access to all the variables of its parent function, even after the parent function has returned and removed from call stack. The function keeps a reference to its outer scope, which preserves the scope chain throughout time

                                                            OR

A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone

                                                            OR

A closure makes sure that a function does not loose connection to variables that existed at the function''s birth place.

Closures are given top priority than even the scope chain. The whole process happens automatically in the js engine though if you want to view the closures of a function use: 

console.dir(function_name)//will output all information of a function including closures used. 

P2N: object details shown in a console that are enclosed in `[[]]` means they cannot be manipulated

P2N: The clusore also changes value whenever its resassigned

SECTION 11: WORKING WITH ARRAYS 💪💪('Almost there😁 a day at a time')

SIMPLE ARRAY METHODS
1. slice(start, end'optional') - creates a new array that contains a portion of the original array specified in the arguments. When no arguments are specified, it will return a copy of the array

2. splice(start, deleteCount) - modifies an existing array by removing elements starting from `start` index and the number of elements to be removed are specified by `deleteCount`. Also creates a new array containing a portion of the original array. When used without arguments, it creates a shallow copy of the entire array.



3. reverse() - mutates original array by changing the array to be in reverse order
4. concat() - combines two arrays to a single array. Does not mutate specified array. Example: 

            const narr = ['a', 'b', 'c', 'd', 'e'];
            const arr2 = ['j', 'i', 'h', 'g', 'f'];
            const letters = narr.concat(arr2);
            
5. join(separator) - combines the elements of an array into a string separated by the argument provided

P2N: If you are ever stuck use the MDN documentation to see how various array methods function

6, at() - returns the value specified by index. Example: //can also be used on strings
 
//getting the first element of an array
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

7. forEach() ~ contains a callback function that accepts the current element of loop as an argument. Takes in three arguments: 

  i)  element
 ii)  index of element
iii)  the arrayitself 

Consider the following example:

const arr = [23, 11, 64];

arr.forEach(el, i, arr){
    cl(`Element of order ${i + 1} is ${el}`);
}


P2N: The `continue & break` statements do not work in a forEach() loop

8. map() ~ similar to forEach only that it creates a new array based on the original array
9. filter() ~ returns a new array containing the array elements that passed a specified condition. Eg., (element > 2)
10. reduce() ~ works on all elements('reduces') of an array to return a single value
11. find() ~ searches an array for the first element that satisfies a provided testing function.
12. findIndex() ~ similar to find but only returns the index of the found element not the element itself
13. some() - determines if at least one element in an array meets a specified condition. If there is any value for which this condition is true, then the some method will return true
14. every() - returns true if every element in the array satisfies the condition

FOR EACH ON MAPS AND SETS
documentation at MDN to see the positions to insert

P2N: innerHTML(); ~ just like the (.text()) method that returns text of a html element, innerHTML returns actual HTML and can be utilised like

const displayMovements = function(movements){
  containerMovements.innerHTML = ''; //clears all html code of container to pave way for elements
  movements.forEach(function(mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">z
          <div class="movements__type movements__type--${type}">${i + 1} </div>
          <div class="movements__value">${mov}</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);

  })
}
P2N: Sets do not have keys or indexes. Also in js, variables that are not necessary are denoted by an underscore e.g., `_`.

USING ARRAYS OF PROJECT

P2N: The `insertAdjascentHTML()` method is used to insert HTML code at a specific position relative to an existing element in the DOM. Takes in two arguments, the position to place the value and the value to inserted. 

E.G., 

Look at documentation at MDN to see the positions to insert

P2N: innerHTML(); ~ just like the (.text()) method that returns text of a html element, innerHTML returns actual HTML and can be utilised like so: 

const displayMovements = function(movements){
  containerMovements.innerHTML = ''; //clears all html code of container to pave way for elements
  movements.forEach(function(mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} </div>
          <div class="movements__value">${mov}</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);

  })
}

-------------- DOM FUNCTIONS ----------------

1. innerHTML() - used to set or get the HTML content of an element.
2. insertAdjacentHTML() - method is used to insert HTML code at a specific position relative to an existing element in the DOM. Takes in two arguments, the position to place the value and the value to inserted.
3. preventDefault() - prevents the page from reloading
4. blur() -  removes focus from an element. i.e., blinking of an input field
5. querySelector()
6. addEventListener()
7. createElement()

-------------- DOM PROPERTIES ----------------
1. textContent - gets or sets the text content of an element.
2. children

MAP METHOD
The map method returns a new array. E.g.,

const movementsUSD = movements.map(function(mov){
  return mov * eurToUsd;
});

Can be further converted to an arrow function to be: 

const movementsUSD = movements.map(mov => mov * eurToUsd);

Without the map method, we would have to do it like so:

const movementsUSDfor = [];
for(const mov of movements){
  movementsUSDfor.push(mov * eurToUsd);
  console.log(movementsUSDfor);
}

Unlike the map method, the for each creates `side effects`(basically mutating the array attached to the method) at each iteration. But for map, it simply creates new elements of an array

COMPUTING USERNAMES:

In this exercise, we wanted to transform the following username: 'Steven Thomas Williams' into a string of initials only 'stw'. For me it was complicated literally had no idea. But we can do it with some simple methods. 

const name = 'Steven Thomas Williams';

const username = name.toLowerCase().split(' ').map(word => word[0]).join('');

the above can be taken to a function to make it more reusable like so: 

const createUsername = function(accs){
    accs.forEach(acc){
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(word => word[0])
            .join('');
    }
}

createUsername('Steven Thomas Williams');

FILTER METHOD
Used to return values that pass a certain criteria. Example:

const deposits = movements.filter(mov => mov > 0); 

//or in a function expression

const deposits = movements.filter(function(mov){
    return mov > 0; //elements in the array that are greater than 0 are the ones that will be returned
})

REDUCE METHOD
Iterates over an array and accumulating a single value. ('snowball effect')
The callback function takes in four arguments. i.e., `The accumulator`, `element being looped`, 'index value', 'array itself'. 
The reduce function itself takes in two arguments. The callback function and the start value of the accumulator
Example: 

const balance = movements.reduce(function(acc, curr, i, arr){
    return acc + curr;
}, 0); //start value is set to 0 for accumulator

The reduce method can also be used to get the maximum value in an array. Example:

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const max = movements.reduce((acc, movement) => {

    if(acc > movement)
        return acc; //this value will also be the next accumulator
    else
        return movement; //if accumalator is not bigger than current element being looped, it will be the current accumulator

}, movements[0]);

CHAINING METHODS
We can only chain methods if the previous one returns an array. E.g.,

const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map(mov => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0);
    
Avoid overusing chaining because it can cause performance issues when working with large arrays
avoid chaining on original arrays

FIND METHOD ~ searches an array for the first element that satisfies a provided testing function. Unlike the filter method, it returns a single value. Best used in circumstances where an array contains multiple objects and we want to find a specific one. Example: 

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

'therefore to find a specific object property we can use the find method()'

const acc1 = accounts.find(acc => acc.owner === 'Sarah Smith');


PROJECT 'IMPLEMENTING LOGIN'

P2N: pressing enter whenever in a form is the same as trigerring the click event on a form button

P2N: assignment works from right to left e.g., let example = example1 = ''; //example will end up being empty

SOME AND EVERY METHODS
~ some() - determines if at least one element in an array meets a specified condition. If there is any value for which this condition is true, then the some method will return true

Example: 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits); // will return a boolean value

~ every() - returns true if every element in the array satisfies the condition

FLAT AND FLAT MAP METHODS
flat() - removes nested arrays and creates a new array with all the elements from the original array and the nested arrays

e.g.,
const arr = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
console.log(arr.flat()); // will output 1,2,3,4,5,6,7,8,9

Though the flat method only goes one level deep by default. Which means it cannot flatten this:

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8, 9]; 

But it accepts an argument which accepts the level of layers in the array to specify e.g., cl(arr.flat(2))

flatMap() - does the operations that would be done in a map method but in turn flattens the array. Though it only goes one level deep

Example:

const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov, i, arr) => acc + mov, 0);
console.log(overallBalance);

//can be shortened down to
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov, i, arr) => acc + mov, 0);
  
  
SORTING ARRAYS
The `sort()` method can be used though it mutates the original array. 
When `sort()` is used without any callback function, it treats the array being sorted as a string even if it contains number elements. To sort number elements use:

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.sort((a, b) => a - b); //this is ascending order

HOW IT WORKS:

a,b represent array values as pairs if (a-b) returns a positive number, the order is shuffled to be b, a and if -ve it remains unchanged. 

movements.sort((a, b) => a - b); //this is descending order

For more on sorting and how to make things more dynamic while working on sorting in the sense of (by recent(how elements were originally in array), ascending / descending), look at starter files 'script.js' of 'Arrays-Bankist'

MORE WAYS OF CREATING AND FILLING ARRAYS
To create an array we can use the Array constructor. Example:

const x = new Array(7); //empty array of length 7

x.fill(1, 3, 5);

syntax of fill (value to be filled, start index, end index);

P2N: The end index is not filled

Resulting array is: [empty, empty, empty, 1, 1, empty, empty]

To perform `fill()` and `new Array()` at the same line use Array.from()

Example to create an array of length 7, using Array.from() do:

Array.from({length: 7}, (_, i) => i + 1);

It can also be used to convert other iterables into arrays. e.g., nodeLists

const UI = Array.from(document.querySelectorAll('.movements'), el => Number(el.textContent.replace('$', '')));

cl(UI);//should print an integer array

P2N: The spread operator can also be used to convert any iterable into an array. e.g., const movementsUI2 = [...document.querySelectorAll('.movements__value')];

WHEN TO USE A METHOD:

- Considering the many methods that work on arrays, consider the following scenarios and choose appropriatley ('Jonas framework'):

'YOU WANT:'

1. MUTATE ORIGINAL ARRAY
    - add an element
    - remove an element
    - reverse
    - sort
    - fill
    
2. CREATE A NEW ARRAY
    - Compute from original
    - filter
    - get a piece from original
    - combine two arrays
    - flatenning
    
3. GET AN ARRAY INDEX
    - based on value
    - based on test condition
    
4. GET AN ARRAY ELEMENT    
    - based on test condition
    
5. KNOW IF ARRAY INCLUDES AN ELEMENT
    - based on value
    - based on test condition
    
6. CREATE A NEW STRING
    - join
    
7. TRANSFORM AN ARRAY TO A SINGLE VALUE
    - reduce
    
8. JUST TO LOOP OVER AN ARRAY
    - forEach call back function
    
To know specific methods that do which job, look for slide on functions in `slide` directory

P2N: in js the '++' operator returns the old value and as a solution should be placed before our values e.g., ++a not a++

JTIP: Whenever our methods consist of a body in '{}' do not forget to add the return statement. e.g.,

const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 },
  );

console.log(sums);

SECTION 12: NUMBERS, DATES, INTL AND TIMERS

CONVERTING AND CHECKING NUMBERS

In js all numbers are represented as floating point numbers by default
Numbers are stored in a '64 base 2' numbers i.e., binaries

To convert a string to a number you can use: 'Number()' or '+' operator that does type coersion to all operands to numbers.

e.g., cl(+'23') // 23 becomes a number

To convert a string to a number we can also use: 'Number.parseInt('23string')'; extracts the number portion of the string only and converts it. The number must be at the begining or an error will unfold


The function accepts a second argument that specifies the base of the number 'regex' Number.parseInt('23string', 10);

To check if a value is a Number, there are 3 ways

1. isNan() ~ checks is a value is not a number and will return true if it is not a number
2. isInteger() ~ checks if a value is an integer data type
3. isFinite() ~ checks if a value is not an infinite value e.g., 23 / 0

SUMMARY use: Number.isFinite() to check if a value is a number and use Number.parseInt() if you want to extract numbers/decimals 'Number.parseFloat()' out of strings

MATH & ROUNDING

To do square root use Math.sqrt() or (25 ** (1/2))
To do cubic root use (25 ** (1/3)) //only way in js


use Math.max() - to get maximum value in a list of numbers
use Math.min() - to get minimum value in a list of numbers

Math.PI() returns the constant 3.14. e.g., console.log(Math.PI * Number.parseFloat('10px') ** 2);


Math.random() ~ generates a random decimal number b2n 0 & 1
Math.trunc() ~ removes the decimal part of a number

The following function generates random numbers between the first and second argument

const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + min);

console.log(randomInt(10, 20));

Math.round() ~ rounds a decimal to the nearest interger
Math.ceil() ~ rounds up a decimal e.g., Math.ceil(23.3) //will output 24
Math.floor() ~ rounds down a decimal e.g., Math.floor(23.9) //will output 23

Math.floor() allows to even round down negative numbers something that trunc cannot therefore it is recommended to use it instead from hence forth

To round off floating point numbers use the to fixed method. E.g., console.log(+(2.723).toFixed(2));

The method returns a string therefore type coersion must be performed

REMAINDER OPERATOR

This would have to be the modulus operator: '%' returns the reminder of a division operation

Example: 

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // every 2nd row is turned to orangeRed
    if (i % 2 === 0) row.style.backgroundColor = 'orangeRed';

    // every 3rd row is turned to blue
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

BIGINT
The maximum value that we can use in js is represented as (2 ^ 53 - 1) which is the same as the constant Number.MAX_SAFE_INTEGER
Therefore if we want to use large integers we must use bigInt primitive which is denoted with an n after the value or any value inside the BigInt() constructor e.g., console.log(1564231650123156456451320314561021321n) or BigInt(1564231650123156456451320314561021321)

P2N: bigInt and int values cannot be used in operations. Type casting must be performed first

P2N: javascript does not do type coersion why the '===' operator is used

P2N: Math() operations cannot work on bigInt data types

P2N: division of bigInt values only returns the closest bigInt value. Kinda like rounding off


DATES & TIME
To get the current date and time, you can use new Date();

You can also pass in a date as an argument for it to be represented in date formart

Example: new Date(2037, 10, 19, 15, 23);

P2N: months are 0 based in js i.e., 0 = January

METHODS TO USE WITH DATES
1. getFullYear() ~ returns only the year of a date
2. getMonth() ~ returns the month of a date
3. getDate() ~ returns the day of a date
4. getDay() ~ returns the day of the week of the date
5. getHours() ~ returns the hour of the date
6. getMinutes() ~ returns the minute of the date
7. getSeconds() ~ returns the second of the date
8. toISOString() ~ returns date in ISO standards. The z represents universal format date
9. getTime() ~ returns the time stamp of the date
10. dateNow() ~ returns the current time stamp from 1970 in seconds

P2N: You can loop over two arrays in a forEach(). By looping over the original array and the second by using the index of the forEach()

OPERATION WITH DATES
- In js we can find the difference between two dates that returns a timestamp value. And from that value we can convert it into days, hours or even weeks. E.g., 

const future = new Date(2037, 10, 19, 15, 23);

//syntax of new Date()

This creates a Date object with the specified date and time components: const future = new Date(2037, 10, 19, 15, 23); //equivalent to 2037/10/19 15:23

year: The year (four digits)
monthIndex: The month (0-11, where 0 is January)
day: The day of the month (1-31)
hours: The hours (0-23)
minutes: The minutes (0-59)
seconds: The seconds (0-59)
milliseconds: The milliseconds (0-999)

console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));

console.log(days1); //returns 10 days

JTIP: If you want to perform more precise date calculations, we can use the 'moment.js' date library

INTERNALIZATION
Allows to format strings and numbers according to different languages and regions. To achieve that use the following syntax

new Intl.DateTimeFormat(locale, options/*optional*/).format(date);

Example:
const now = new Date();
labelDate.textContent = new Intl.DateTimeFormat('en-KE').format(now);

The function below is used to find the difference between dates and output either, 'today', 'yesterday', days passed or date of transaction

const formatMovementDates = function (date, locale) {
    const calcDaysPassed = (date1, date2) =>
      Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

    const daysPassed = calcDaysPassed(new Date(), date);
    console.log(daysPassed);

    if (daysPassed === 0) return 'Today';
    if (daysPassed === 1) return 'Yesterday';
    if (daysPassed <= 7) return `${daysPassed} days ago`;
    else {
      const day = `${date.getDate()}`.padStart(2, 0);
      const month = `${date.getMonth() + 1}`.padStart(2, 0);
      const year = date.getFullYear();
      return `${day}/${month}/${year}`
    }
  };

The else part can be further simplified to:

return Intl.DateTimeFormat(locale).format(date);

The Intl.DateTimeFormat() method accepts two arguments, the locale and options which can be used to modify output to also include time. 

Example of options:

const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
};

for day, month & year, we can change from numeric to long to make the date to in string format. 

for day and month we can use narrow, short to make string shorter e.g., from Thursday to Thur


P2N: If you want to use the default locale that is set in browsers of users, use 'navigator.locale'


INTERNALIZATION NUMBERS
Numbers can also be formatted based on region:

const num = 12234.20;
cl(new Intl.NumberFormat('en-US').format(num));


options can also be added for numbers. The options are: 'BASED ON MDN'

style: decimal || currency || percent || unit

For more info on usage go to: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#style_options

Examples: 

const options = {
    style: 'unit',
    unit: 'kilometer-per-hour',
};

const options = {
  style: 'currency',
  unit: 'kilometer-per-hour',//will be ignored
  currency: 'EUR',
  useGrouping: false, // use this if you do not want to have commas in (38,329,892) will be turned to 38329892
};

// a general currency function that doesn't depend on application data
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};


TIMERS
Are of 2 types:

1. setTimeout timer - runs once after a defined time. We can use it to run code at some time in the future
2. setInterval timer - runs repeatedly until we stop it


'setTimeout()' - is a higher function that accepts two arguments, a callback function and the number of seconds for the function to execute after

If you want to use arguments in your callback function, you can specify them after the second argument. Example:

setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  'spinach',
  'lettuce',
);

//can be simplified to

const ingredients = ['spinach', 'lettuce'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients,
);
console.log('waiting...');

If you want to change and remove the timer you can use the method 'clearTimeout()' example:

clearTimeout(pizzaTimer);



SETINTERVAL TIMER
- Takes a callback function and time delay in seconds as arguments
- It starts a timer that counts down to the specified time delay
- Once the timer reaches 0, the callback function is executed
- The timer resets and the process repeats

OR

setInterval() is a method that repeatedly calls a function or executes a code snippet at specified time intervals. It continues to call the function until clearInterval() is explicitly called, or the window is closed.

P2N: If you want to convert data into string, you can either use:

String() or ''

In setInterval, the function is not called immediately. It’s first called only after the specified delay, and then it repeats at that interval.

If you want the function to run immediately and then continue on an interval, you can either:

Call the function right before setInterval.
Use setTimeout to make the initial call, then use setInterval to repeat.

Example:
const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.floor(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    time--;
  };

  let time = 30;

  tick(); //first all function. This will set the textContent to an initial value
  const timer = setInterval(tick, 1000);

  return timer;
};


SECTION 13: ADVANCE DOM AND EVENTS 🥳💪('NOT EASY TO REACH HERE!! TRUST THE PROCESS')

P2N: Whenever you click a link whose href is '#' it takes the viewport to the very top and to disable this behaiour use: event.preventDefault()


DOM FUNCTIONALITY (DOMAIN OBJECT MODEL)
DOM allows JS to interact with the browser

A node from the DOM can be of an element type, text type, comment type or document type

P2N: The querySelector method is present in document and element nodes

Other than the node type, there is the window type which are children of the eventTarget and sibling to document

SELECTING, CREATING AND DELETING ELEMENTS
The following methods will proove helpful in the near future:

// SELECTING
1. document.documentElement ~ Selects the document element
2. document.getElementByID ~ does not require a selector to to select an element just the name e.g., 'buttonIDName'
3. document.getElementsByTagName ~ returns a HTMLCollection which is always updated whenever any changes regarding the selected element happens unlike nodeLists of 'querySelectorAll()'
4. document.getElementsByClassName() ~ retuns a html collection of all selected elements with the specified selector


JTIP - IF you are just selecting elements for use, the querySelector() or querySelectorAll() are perfect. Use the others if you want to perform programming logic

// CREATING AND INSERTING
1. insertAdjascentHTML(position, HTML) - Adds html element at said position
2. document.createElement() - Creates an element but is not visible on the DOM
3. element.prepend(element) - adds an element as the first child. Example:

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie"> Got it? </button>';

header.prepend(message); // element will be added as first child of header

4. element.append(element) - adds an element as the last child

JTIP: When the append and prepend methods are used one after the other. The DOM element is moved since they are unique and cannot exist in more than one location.

If you may want to have two copies of a node existing in the DOM, you can clone it. Example: 

header.prepend(message);
header.append(message.cloneNode(true));

This will have the element at the begining and at the end of header element

5. element.before(element) - The element will be placed as a sibling with a 'before' position 
6. element.after(element) - The element will be placed as a sibling with an 'after' position

DELETING
1. element.remove() - removes specified element from DOM 

STYLES, ATTRIBUTES AND CLASSES

P2N: Styles set using the 'style' property become inline styles i.e., styles inside html code e.g., <button style='background-color: blue'>

P2N: We can read styles of an element using the style property but if they were set as inline not with a class or ID

e.g., cl(message.style.backgroundColor) //will return color value on console

To get css style from an element we can use 'getComputedStyle'. E.g.,

cl(getComputedStyle('element').property)

P2N: CSS variables also known as custom properties, are a powerful tool in CSS that allow you to define and reuse values throughout your stylesheet. They are declared with a double-dash prefix (--) followed by the variable name, and their values are assigned using the colon (:).

Example:

:root { //root is similar to the document element in js
  --primary-color: blue;
  --secondary-color: red;
}

body {
  background-color: var(--primary-color);
  color: var(--secondary-color);
}

And if you want to change the custom properties i.e., css variable you have to use 'setProperty()'. Example

document.documentElement.style.setProperty('--primary-color', 'orangered');

SYNTAX:
document.documentElement.style.setProperty('customProperty', 'value');

// ATTRIBUTES
Attributes can be accessed by specifiying the attribute name after a selected html element. 

Example: 
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);

Non-standard attributes - attributes that provide meta data to html elements. Cannot be accessed like regular attributes since it will return 'undefined'. 

getAttribute('non-standard attribute name') //returns the value of a non standard attribute
setAttribute('attribute name', 'value') ~ set an attribute to a html element and its value

When you use element.src will return an absolute path but when u use getAttribute('src'), it will return a relative attribute same to href links

'Data Attributes' - tool in html that allows you to store custom data directly on HTML elements. Are prefixed with 'data-' followed by a custom name of choice. They are useful for displaying data in the UI

Example: data-version-number="3.0"

These data attributes are stored in the 'dataSet' object and can be accessed like so: 

const logo = document.querySelector('.nav__logo');
console.log(logo.dataset.versionNumber); //name begins after data and hyphens replaced with camel-case

P2N: CLASSLIST METHODS
add(), remove(), toggle(), contains()

IMPLEMENTING SMOOTH SCROLLING

1. USING 'window.scrollTo(x, y)'

The x and y are positions at which you want the scroll to end. We get the cordinates from getBoundingClientRect() Example:

P2N: The getBoundingClientRect() method provides information about the size and position of an element relative to the viewport

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  // Scrolling
  window.scrollTo(s1coords.left, s1coords.top);
});

The above code is flawed though. It only takes the position from top of view port. Therefore, does not consider whether the web page is scrolled. 

window.pageXOffset - returns the value of scroll on the x axis
window.pageYOffset - returns the value of scoll on the Y axis

window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset); //will consider scrolling value

The above code is deprecated and can be implemented using a single method:

element.scrollIntoView({behavior: smooth});

TYPES OF EVENTS AND EVENT HANDLERS
An event is a signal generated by a node to signify that something has happened on the browser

P2N: when using querySelector(), if you just want to select an html element, just state element type in quotation. No prefix: document.querySelector('h1')

'mouseenter' event - Similar to the css 'hover', and is triggered when the mouse pointer enters an element

Every event has an onEvent i.e., a property associated to an event e.g., onmouseenter, onclick e.t.c

h1.onmouseenter = function (e) {
  //deprecated
  alert('addEventListener: great! you are reading the heading :D');
};

Though it is not recommended and we should stick to 'addEventListener()'

An event can also be removed from an element. For example if you want an eventHandler to only occur once. The removeEventHandler('eventName', eventHandlerFunctionName) method is used

Example: 

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: great! you are reading the heading :D');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); // the alert cannot come again on mouse hover

An event can also be handled using html attributes. E.g.,

<h1 onclick="alert('not recommended code')"> //alert code will run onclick event
            When
            <!-- Green highlight effect -->
            <span class="highlight">banking</span>
            meets<br/>
            <span class="highlight">minimalist</span>
</h1>

EVENT PROPAGATION: BUBBLING AND CAPTURING
When an event occurs on an element in a DOM, it triggers a sequence of events known as 'Event propagation' and it involves the following phases:

1. CAPTURING PHASE ~ The event travels down from the root of the DOM tree i.e., 'document' to the target element. Rarely used
2. TARGET PHASE ~ The event reaches the target element where it originated. Event handlers attached directly to the target element are executed
3. BUBBLING PHASE ~ The event travels back up from the target element to the root of the DOM tree. Event handlers attached to parent elements in bubble mode are executed

P2N: Bubbling and capturing does not happen on all events just a select few.

EVENT PROPAGATION IN PRACTICE

P2N: When the 'this' keyword is used in an event handler, it will always refer to the element to which the handler its attached to.

P2N: event.target returns where an event originated

P2N: event.currentTarget returns the element in which an event handler is attached to. Therefore, event.currentTarget = this

P2N: It is possible to stop the propagation using the method:

stopPropagation()

P2N: The default event propagation phase is bubbling

EVENT DELAGATION THROUGH EVENT PROPAGATION

P2N: When you have a <a> with a href and want to prevent it from working, use 'event.preventDefault()'

For page navigation, instead of using a 'forEach' method to navigate through a webpage, bubbling phase of propagation can come into play and can be implemented as follows:

document.querySelector('.nav__links').addEventListener('click', function (e) { 
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

P2N: The code above was a little tricky to understand. The key to understanding this is that: 'bubbling happens automatically and through propagation we are just manipulating the event fired from children elements on the parent element'

DOM TRAVERSING
Selecting an element based on another element in the DOM. Could be parent, siblings or children. 

SELECTING CHILDREN
This can be done by selecting a parent element, and on the parent use another selector that will select the children. It does not matter how deep the children are in the structure, they will still be selected.
- If you only want to select direct children, you can use: 

element.childrenNodes ~ returns a nodeList of all children inluding, text, comments etc
element.children ~ returns a htmlCollection of all direct children

P2N: an 'HTMLCollection' is a dynamic collection of HTML elements that are related to each other in some way

SELECTING PARENTS
To select the direct parent of an element use: 'element.parentNode' or 'element.parentElement'

'closest()' can also be used as it allows you to traverse the DOM tree upwards starting from a specific element to find the first ancestor element that matches a specified css selector

SELECTING SIBLINGS
Only direct siblings can be selected. i.e., the previous and next. Using: 'element.previousElementSibling' & 'element.nextElementSibling' respectively

JTIP if you want to find all the siblings of an element, you can find the parent of an element and find its children

EXAMPLE:

[...h1.parentElement.children].forEach((el) => { //changes all siblings to a scale of 50%
    if(el !== h1) h1.style.transform = 'scale(0.5)';
})

BUILDING A TABBED COMPONENT

A guard clause is an if statement that returns a function early if some condition is matched. Example:

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); //we used closest element because there are other child elements within the tab buttons such as the span and text
  clicked.classList.add('.operations__tab--active');
  console.log(clicked);

  // GUARD CLAUSE
  if (!clicked) return; // guard clause will activate if clicked is a falsy value and no code after this statement will get executed
});

FULL CODE:

//btn active
btnCont.addEventListener('click', function(e){
    e.preventDefault();

    const clicked = e.target.closest('.btn'); //use variables for proper error handling

    if(!clicked) return;

    //btn movement
    btns.forEach(btn => btn.classList.remove('btn-active'));
    clicked.classList.add('btn-active');

    //changing content
    content.forEach(content => {
        content.classList.add('hidden');
    });
    document.querySelector(`.content${clicked.dataset.tab}`).classList.remove('hidden');
})

MENU FADE ANIMATION

P2N: `mouseenter` event is similar to 'mouseover' only that mouseenter does not bubble and cannot be handled by parent element

The above events have opposites that enable undoing the effects of hovering. They are
'mouseenter' | 'mouseleave'
'mouseover' | 'mouseout'

Since we are relying on event bubbling to handle the event, we made use of mouseover. Here is the code: 


const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// MENU FADE ANIMATION
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

P2N: 
~ You cannot pass more than one argument in the handler function. Either use a single value, array or iterable.
~ We used 'bind' because it returns a function and we are able to manipulate the this keyword to be equal to what we pass in as an argument


P2N: RESUMING CODING AFTER ROUGHLY 30 DAYS. WILL NOT BE EASY BUT WE MUST SHAPE TOMORROW IN THE PRESENT 💪💪💪


✅ IMPLEMENTING STICKY NAVIGATION
There are 2 ways to implement this. 


1. Using the scroll event

This event is chained to 'window' and the following properties can be used:

- window.scrollY ~ returns the number of pixels by which the document is currently scrolled vertically. i.e., from the top of the view port to current position

- getBoundingClientRect() - which is a method that provides information about the size and position of an element relative to the viewport.

Both of them can be utilised into making a sticky navigation like so: 

const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function (e) { //make sure to add an event listener to the 'window'
  console.log(window.scrollY);
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

2. Intersection Observer API

The IntesectionObserver API provides a way to monitor when elements enter or leave the viewport of the user.

Makes use of the 'IntersectionObserver' object. 

const obsCallback = function (entries, observer){

}

const obsOptions = {
    root: null, //element that our target element will be intersecting. i.e., section1. setting it to null means the view port
    threshold: 0.1, //percentage of intersection at which the observer callback will be called. in our case 10%
}

const observer = new IntersectionObserver(); //takes in two arguments: a callback function and an options object
observer.observe(section1); //this line tells the observer to start watching the element section one whether it's intersecting with the viewport

BARD:

- The callback fires when the target visibility exceeds that specific percentage of the threshold
- Setting the threshold to 0, means the callback function will be triggered as soon as any part of the target element becomes visible within the viewport or root element specified.  is like saying, "Alert me the instant even a single pixel of this element peeks into the view." 
- The threshold will occur when scrolling into view and out of view

The code below adds a sticky navigation dynamically based on the position of the 1st element: 

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries; //destructing

  if (!entry.isIntersecting) nav.classList.add('sticky'); //if intersection is false means that we are exiting the header. Therefore the sticky class is added
  else nav.classList.remove('sticky'); // if intersection is true means we are now inside the header element and the sticky class is remove
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, //only accepts values that are in the form of 'px' therefore had to use a string literal
});
headerObserver.observe(header);












































































    
    
    
    
console.log('current Scroll (x/y)', window.pageXOffset, window.pageYoffset);
