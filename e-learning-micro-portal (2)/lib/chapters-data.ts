export interface Chapter {
  id: number
  slug: string
  title: string
  description: string
  icon: string
  lessons: number
  duration: string
  content: {
    introduction: string
    explanation: string[]
    codeExamples: {
      title: string
      code: string
      explanation: string
    }[]
    diagram?: string
    keyPoints: string[]
  }
  quiz: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
  }[]
}

export const chapters: Chapter[] = [
  {
    id: 1,
    slug: "introduction-to-c",
    title: "Introduction to C",
    description: "Learn about the history, features, and basic structure of C programming language.",
    icon: "BookOpen",
    lessons: 5,
    duration: "30 min",
    content: {
      introduction:
        "C is a powerful general-purpose programming language developed by Dennis Ritchie at Bell Labs in 1972. It is one of the most widely used programming languages and forms the foundation for many modern languages.",
      explanation: [
        "C is a procedural programming language that provides low-level access to memory and system resources.",
        "It is highly portable, meaning programs written in C can run on different platforms with minimal modifications.",
        "C is the foundation for many operating systems including Unix, Linux, and Windows.",
        "Learning C helps you understand how computers work at a fundamental level.",
      ],
      codeExamples: [
        {
          title: "Your First C Program",
          code: `#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}`,
          explanation:
            "This is the classic 'Hello World' program. #include <stdio.h> includes the standard input/output library, main() is the entry point, and printf() displays text on screen.",
        },
        {
          title: "Basic Program Structure",
          code: `#include <stdio.h>  // Header file

// Main function - program starts here
int main() {
    // Your code goes here
    printf("Welcome to C Programming!");
    return 0;  // Return success
}`,
          explanation:
            "Every C program must have a main() function. The #include directive brings in external libraries, and return 0 indicates successful execution.",
        },
      ],
      diagram: `
┌─────────────────────────────────────┐
│         C Program Structure         │
├─────────────────────────────────────┤
│  1. Preprocessor Directives         │
│     (#include, #define)             │
├─────────────────────────────────────┤
│  2. Global Declarations             │
│     (variables, functions)          │
├─────────────────────────────────────┤
│  3. main() Function                 │
│     - Entry point of program        │
├─────────────────────────────────────┤
│  4. User-defined Functions          │
│     (optional)                      │
└─────────────────────────────────────┘`,
      keyPoints: [
        "C was developed by Dennis Ritchie in 1972",
        "C is a compiled language (source code → machine code)",
        "Every C program must have a main() function",
        "C is case-sensitive (Main ≠ main)",
        "Statements end with semicolons (;)",
      ],
    },
    quiz: [
      {
        question: "Who developed the C programming language?",
        options: ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup", "Guido van Rossum"],
        correctAnswer: 1,
        explanation: "Dennis Ritchie developed C at Bell Labs in 1972.",
      },
      {
        question: "What is the entry point of a C program?",
        options: ["start()", "begin()", "main()", "init()"],
        correctAnswer: 2,
        explanation: "The main() function is where program execution begins in C.",
      },
      {
        question: "Which header file is used for input/output operations?",
        options: ["<stdlib.h>", "<string.h>", "<stdio.h>", "<math.h>"],
        correctAnswer: 2,
        explanation: "stdio.h (standard input/output) contains functions like printf() and scanf().",
      },
      {
        question: "What does the return 0 statement indicate?",
        options: ["Program error", "Successful execution", "Loop termination", "Function call"],
        correctAnswer: 1,
        explanation: "return 0 in main() indicates that the program executed successfully without errors.",
      },
    ],
  },
  {
    id: 2,
    slug: "variables-and-data-types",
    title: "Variables & Data Types",
    description: "Understand how to declare variables and use different data types in C.",
    icon: "Database",
    lessons: 6,
    duration: "45 min",
    content: {
      introduction:
        "Variables are containers for storing data values. In C, you must declare a variable with a specific data type before using it.",
      explanation: [
        "A variable is a named memory location that holds a value.",
        "C requires you to declare the type of data a variable will hold.",
        "Common data types include int (integers), float (decimals), char (characters), and double (large decimals).",
        "Variable names must start with a letter or underscore and can contain letters, digits, and underscores.",
      ],
      codeExamples: [
        {
          title: "Basic Variable Declaration",
          code: `#include <stdio.h>

int main() {
    int age = 20;
    float marks = 82.5;
    char grade = 'A';
    double salary = 50000.75;
    
    printf("Age: %d\\n", age);
    printf("Marks: %.1f\\n", marks);
    printf("Grade: %c\\n", grade);
    printf("Salary: %.2lf\\n", salary);
    
    return 0;
}`,
          explanation:
            "This example shows declaration of different data types: int for whole numbers, float for decimals, char for single characters, and double for precise decimals.",
        },
        {
          title: "Data Type Sizes",
          code: `#include <stdio.h>

int main() {
    printf("Size of int: %lu bytes\\n", sizeof(int));
    printf("Size of float: %lu bytes\\n", sizeof(float));
    printf("Size of char: %lu bytes\\n", sizeof(char));
    printf("Size of double: %lu bytes\\n", sizeof(double));
    
    return 0;
}`,
          explanation:
            "The sizeof() operator returns the memory size of a data type in bytes. int is typically 4 bytes, char is 1 byte, float is 4 bytes, and double is 8 bytes.",
        },
      ],
      diagram: `
┌──────────────────────────────────────────┐
│           C Data Types                    │
├──────────────────────────────────────────┤
│  int     →  Whole numbers (4 bytes)      │
│             Example: 10, -5, 1000         │
├──────────────────────────────────────────┤
│  float   →  Decimal numbers (4 bytes)    │
│             Example: 3.14, -2.5           │
├──────────────────────────────────────────┤
│  char    →  Single character (1 byte)    │
│             Example: 'A', 'z', '9'        │
├──────────────────────────────────────────┤
│  double  →  Large decimals (8 bytes)     │
│             Example: 3.14159265359        │
└──────────────────────────────────────────┘`,
      keyPoints: [
        "Variables must be declared before use",
        "int stores whole numbers (-2147483648 to 2147483647)",
        "float stores decimal numbers with 6 decimal precision",
        "char stores a single character (uses single quotes)",
        "double provides more precision than float",
      ],
    },
    quiz: [
      {
        question: "Which data type is used to store decimal numbers?",
        options: ["int", "char", "float", "void"],
        correctAnswer: 2,
        explanation: "float (and double) are used to store decimal/floating-point numbers.",
      },
      {
        question: "What is the size of char in C?",
        options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
        correctAnswer: 0,
        explanation: "char takes 1 byte of memory and can store a single character.",
      },
      {
        question: "Which is a valid variable name in C?",
        options: ["2variable", "my-var", "_myVar", "my var"],
        correctAnswer: 2,
        explanation:
          "Variable names can start with underscore or letter, and contain letters, digits, and underscores. No spaces or hyphens allowed.",
      },
      {
        question: "What format specifier is used for int?",
        options: ["%f", "%c", "%d", "%s"],
        correctAnswer: 2,
        explanation: "%d is the format specifier for integers in printf() and scanf().",
      },
    ],
  },
  {
    id: 3,
    slug: "operators",
    title: "Operators",
    description: "Learn about arithmetic, relational, logical, and other operators in C.",
    icon: "Calculator",
    lessons: 7,
    duration: "40 min",
    content: {
      introduction:
        "Operators are symbols that perform operations on variables and values. C provides a rich set of operators for various computations.",
      explanation: [
        "Arithmetic operators perform mathematical calculations (+, -, *, /, %).",
        "Relational operators compare values and return true (1) or false (0).",
        "Logical operators combine multiple conditions (&&, ||, !).",
        "Assignment operators assign values to variables (=, +=, -=, etc.).",
      ],
      codeExamples: [
        {
          title: "Arithmetic Operators",
          code: `#include <stdio.h>

int main() {
    int a = 10, b = 3;
    
    printf("Addition: %d\\n", a + b);      // 13
    printf("Subtraction: %d\\n", a - b);   // 7
    printf("Multiplication: %d\\n", a * b); // 30
    printf("Division: %d\\n", a / b);      // 3
    printf("Modulus: %d\\n", a % b);       // 1
    
    return 0;
}`,
          explanation:
            "Arithmetic operators perform basic math. Note that integer division (/) truncates decimals, and modulus (%) gives the remainder.",
        },
        {
          title: "Relational & Logical Operators",
          code: `#include <stdio.h>

int main() {
    int x = 5, y = 10;
    
    // Relational operators
    printf("x > y: %d\\n", x > y);   // 0 (false)
    printf("x < y: %d\\n", x < y);   // 1 (true)
    printf("x == y: %d\\n", x == y); // 0 (false)
    
    // Logical operators
    printf("AND: %d\\n", (x > 0) && (y > 0)); // 1
    printf("OR: %d\\n", (x > 10) || (y > 5)); // 1
    printf("NOT: %d\\n", !(x > y));           // 1
    
    return 0;
}`,
          explanation:
            "Relational operators compare values. Logical operators combine conditions: && (AND), || (OR), ! (NOT).",
        },
      ],
      diagram: `
┌─────────────────────────────────────────┐
│           Operator Types                 │
├─────────────────────────────────────────┤
│  Arithmetic:  +  -  *  /  %             │
├─────────────────────────────────────────┤
│  Relational:  <  >  <=  >=  ==  !=      │
├─────────────────────────────────────────┤
│  Logical:     &&  ||  !                 │
├─────────────────────────────────────────┤
│  Assignment:  =  +=  -=  *=  /=  %=     │
├─────────────────────────────────────────┤
│  Increment:   ++  --                    │
└─────────────────────────────────────────┘`,
      keyPoints: [
        "% (modulus) returns remainder of division",
        "== checks equality, = assigns value",
        "&& returns true only if both conditions are true",
        "|| returns true if at least one condition is true",
        "++x increments before use, x++ increments after use",
      ],
    },
    quiz: [
      {
        question: "What is the result of 10 % 3?",
        options: ["3", "1", "0", "3.33"],
        correctAnswer: 1,
        explanation: "The modulus operator (%) returns the remainder. 10 ÷ 3 = 3 remainder 1.",
      },
      {
        question: "Which operator is used for logical AND?",
        options: ["&", "&&", "AND", "||"],
        correctAnswer: 1,
        explanation: "&& is the logical AND operator. & is the bitwise AND operator.",
      },
      {
        question: "What does != mean?",
        options: ["Equal to", "Not equal to", "Assignment", "Negation"],
        correctAnswer: 1,
        explanation: "!= is the 'not equal to' relational operator.",
      },
      {
        question: "What is the value of x after: int x = 5; x += 3;",
        options: ["5", "3", "8", "15"],
        correctAnswer: 2,
        explanation: "x += 3 is equivalent to x = x + 3, so x becomes 5 + 3 = 8.",
      },
    ],
  },
  {
    id: 4,
    slug: "loops",
    title: "Loops",
    description: "Master for, while, and do-while loops to repeat code execution.",
    icon: "RefreshCw",
    lessons: 6,
    duration: "50 min",
    content: {
      introduction:
        "Loops allow you to execute a block of code repeatedly. C provides three types of loops: for, while, and do-while.",
      explanation: [
        "The for loop is used when you know how many times to iterate.",
        "The while loop continues as long as a condition is true.",
        "The do-while loop executes at least once, then checks the condition.",
        "break exits the loop, continue skips to the next iteration.",
      ],
      codeExamples: [
        {
          title: "For Loop",
          code: `#include <stdio.h>

int main() {
    // Print numbers 1 to 5
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);
    }
    // Output: 1 2 3 4 5
    
    return 0;
}`,
          explanation:
            "The for loop has three parts: initialization (int i = 1), condition (i <= 5), and update (i++). It's ideal when you know the number of iterations.",
        },
        {
          title: "While and Do-While Loops",
          code: `#include <stdio.h>

int main() {
    // While loop
    int count = 1;
    while (count <= 3) {
        printf("While: %d\\n", count);
        count++;
    }
    
    // Do-while loop (runs at least once)
    int num = 10;
    do {
        printf("Do-while: %d\\n", num);
        num++;
    } while (num < 10);
    // Prints 10 even though condition is false
    
    return 0;
}`,
          explanation:
            "While checks condition first, do-while checks after executing. The do-while loop always runs at least once, even if the condition is initially false.",
        },
      ],
      diagram: `
┌─────────────────────────────────────────┐
│              For Loop                    │
│  for (init; condition; update) {        │
│      // code                            │
│  }                                      │
├─────────────────────────────────────────┤
│             While Loop                   │
│  while (condition) {                    │
│      // code                            │
│  }                                      │
├─────────────────────────────────────────┤
│           Do-While Loop                  │
│  do {                                   │
│      // code (runs at least once)       │
│  } while (condition);                   │
└─────────────────────────────────────────┘`,
      keyPoints: [
        "for loop: best when iteration count is known",
        "while loop: best when condition-based",
        "do-while: executes at least once",
        "break: exits loop immediately",
        "continue: skips current iteration",
      ],
    },
    quiz: [
      {
        question: "Which loop always executes at least once?",
        options: ["for", "while", "do-while", "foreach"],
        correctAnswer: 2,
        explanation: "do-while checks the condition after execution, so it always runs at least once.",
      },
      {
        question: 'What is the output of: for(int i=0; i<3; i++) printf("%d ", i);',
        options: ["1 2 3", "0 1 2", "0 1 2 3", "1 2"],
        correctAnswer: 1,
        explanation: "Loop starts at i=0 and runs while i<3, printing 0, 1, 2.",
      },
      {
        question: "Which keyword skips to the next iteration?",
        options: ["break", "continue", "skip", "next"],
        correctAnswer: 1,
        explanation: "continue skips the rest of the current iteration and moves to the next one.",
      },
      {
        question: "How many times does this loop run: while(0) { }",
        options: ["Infinite", "Once", "Zero", "Error"],
        correctAnswer: 2,
        explanation: "while(0) is always false, so the loop body never executes.",
      },
    ],
  },
  {
    id: 5,
    slug: "functions",
    title: "Functions",
    description: "Learn to create reusable code blocks with functions.",
    icon: "Code",
    lessons: 8,
    duration: "55 min",
    content: {
      introduction:
        "Functions are reusable blocks of code that perform specific tasks. They help organize code, reduce repetition, and improve readability.",
      explanation: [
        "A function has a return type, name, parameters, and body.",
        "Functions can return a value or be void (no return).",
        "Parameters allow you to pass data into functions.",
        "Functions must be declared before use (or use prototypes).",
      ],
      codeExamples: [
        {
          title: "Basic Function",
          code: `#include <stdio.h>

// Function declaration (prototype)
int add(int a, int b);

int main() {
    int result = add(5, 3);
    printf("Sum: %d\\n", result); // Output: 8
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}`,
          explanation:
            "This function takes two integers and returns their sum. The prototype declares the function before main(), and the definition provides the implementation.",
        },
        {
          title: "Void Function & Multiple Parameters",
          code: `#include <stdio.h>

// Void function - no return value
void greet(char name[], int age) {
    printf("Hello, %s!\\n", name);
    printf("You are %d years old.\\n", age);
}

// Function with multiple calculations
float calculateArea(float length, float width) {
    return length * width;
}

int main() {
    greet("Alice", 20);
    
    float area = calculateArea(5.0, 3.0);
    printf("Area: %.2f\\n", area);
    
    return 0;
}`,
          explanation:
            "Void functions don't return a value. Functions can take multiple parameters of different types and perform various operations.",
        },
      ],
      diagram: `
┌─────────────────────────────────────────┐
│          Function Structure              │
├─────────────────────────────────────────┤
│  return_type function_name(parameters)  │
│  {                                      │
│      // function body                   │
│      return value; (if not void)        │
│  }                                      │
├─────────────────────────────────────────┤
│  Example:                               │
│  int multiply(int x, int y) {           │
│      return x * y;                      │
│  }                                      │
└─────────────────────────────────────────┘`,
      keyPoints: [
        "Functions promote code reusability",
        "Return type specifies what the function returns",
        "void means no return value",
        "Parameters are variables that receive input",
        "Use function prototypes for forward declaration",
      ],
    },
    quiz: [
      {
        question: "What does void mean in a function?",
        options: ["Returns integer", "Returns nothing", "Error", "Empty parameter"],
        correctAnswer: 1,
        explanation: "void indicates the function doesn't return any value.",
      },
      {
        question: "What is a function prototype?",
        options: ["Function body", "Function declaration before main", "Return statement", "Local variable"],
        correctAnswer: 1,
        explanation:
          "A prototype declares the function signature before its full definition, allowing it to be called before it's defined.",
      },
      {
        question: "Which is correct function syntax?",
        options: ["function add(int a, b)", "int add(int a, int b)", "add(a, b) int", "int add(a, b)"],
        correctAnswer: 1,
        explanation: "Correct syntax: return_type name(type param1, type param2)",
      },
      {
        question: "What happens if a non-void function doesn't return a value?",
        options: ["Returns 0", "Undefined behavior", "Compilation error always", "Returns null"],
        correctAnswer: 1,
        explanation: "Not returning a value from a non-void function leads to undefined behavior.",
      },
    ],
  },
  {
    id: 6,
    slug: "arrays",
    title: "Arrays",
    description: "Store and manipulate collections of similar data types.",
    icon: "Grid3X3",
    lessons: 7,
    duration: "50 min",
    content: {
      introduction:
        "An array is a collection of elements of the same data type stored in contiguous memory locations. Arrays allow you to store multiple values under a single name.",
      explanation: [
        "Arrays are declared with a fixed size that cannot change.",
        "Array indices start from 0 (first element is array[0]).",
        "Arrays can be initialized at declaration or element by element.",
        "Multi-dimensional arrays (like 2D arrays) store data in rows and columns.",
      ],
      codeExamples: [
        {
          title: "One-Dimensional Array",
          code: `#include <stdio.h>

int main() {
    // Declaration and initialization
    int numbers[5] = {10, 20, 30, 40, 50};
    
    // Accessing elements
    printf("First element: %d\\n", numbers[0]);  // 10
    printf("Third element: %d\\n", numbers[2]);  // 30
    
    // Modifying an element
    numbers[1] = 25;
    
    // Looping through array
    printf("All elements: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
    }
    // Output: 10 25 30 40 50
    
    return 0;
}`,
          explanation:
            "Arrays store multiple values. Access elements using index (0-based). Use loops to iterate through all elements.",
        },
        {
          title: "Two-Dimensional Array",
          code: `#include <stdio.h>

int main() {
    // 2D array (3 rows, 3 columns)
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    
    // Accessing element at row 1, column 2
    printf("Element [1][2]: %d\\n", matrix[1][2]); // 6
    
    // Print entire matrix
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\\n");
    }
    
    return 0;
}`,
          explanation:
            "2D arrays are like tables with rows and columns. Access elements using two indices: array[row][column].",
        },
      ],
      diagram: `
┌─────────────────────────────────────────┐
│         Array Memory Layout              │
├─────────────────────────────────────────┤
│  int arr[5] = {10, 20, 30, 40, 50};     │
│                                         │
│  Index:   [0]  [1]  [2]  [3]  [4]       │
│  Value:   10   20   30   40   50        │
│  Address: 100  104  108  112  116       │
│           (each int = 4 bytes)          │
└─────────────────────────────────────────┘`,
      keyPoints: [
        "Array indices start at 0",
        "Size must be specified at declaration",
        "Accessing out-of-bounds causes undefined behavior",
        "Arrays are passed to functions by reference",
        "2D arrays: array[rows][columns]",
      ],
    },
    quiz: [
      {
        question: "What is the index of the first element in an array?",
        options: ["1", "0", "-1", "Depends on size"],
        correctAnswer: 1,
        explanation: "In C, array indexing starts from 0. The first element is array[0].",
      },
      {
        question: "How do you declare an array of 10 integers?",
        options: ["int array(10);", "int array[10];", "array int[10];", "int[10] array;"],
        correctAnswer: 1,
        explanation: "Correct syntax is: type name[size]; → int array[10];",
      },
      {
        question: "In a 2D array arr[3][4], how many elements are there?",
        options: ["7", "12", "34", "3"],
        correctAnswer: 1,
        explanation: "A 2D array with 3 rows and 4 columns has 3 × 4 = 12 elements.",
      },
      {
        question: "What happens when you access arr[10] in int arr[5]?",
        options: ["Returns 0", "Undefined behavior", "Compilation error", "Returns -1"],
        correctAnswer: 1,
        explanation:
          "Accessing beyond array bounds causes undefined behavior - the program might crash or return garbage.",
      },
    ],
  },
  {
    id: 7,
    slug: "strings",
    title: "Strings",
    description: "Work with character arrays and string manipulation functions.",
    icon: "Type",
    lessons: 6,
    duration: "45 min",
    content: {
      introduction:
        "In C, strings are arrays of characters terminated by a null character ('\\0'). C provides various functions in <string.h> for string manipulation.",
      explanation: [
        "Strings in C are character arrays ending with '\\0' (null terminator).",
        'String literals are enclosed in double quotes ("Hello").',
        "The <string.h> library provides useful string functions.",
        "Common functions: strlen(), strcpy(), strcat(), strcmp().",
      ],
      codeExamples: [
        {
          title: "String Basics",
          code: `#include <stdio.h>
#include <string.h>

int main() {
    // String declaration methods
    char str1[] = "Hello";           // Compiler adds \\0
    char str2[10] = "World";         // Extra space for \\0
    char str3[6] = {'H', 'i', '\\0'}; // Manual null terminator
    
    printf("str1: %s\\n", str1);
    printf("Length of str1: %lu\\n", strlen(str1)); // 5
    
    // Reading string input
    char name[50];
    printf("Enter name: ");
    scanf("%s", name);  // Reads until space
    printf("Hello, %s!\\n", name);
    
    return 0;
}`,
          explanation:
            "Strings are char arrays with automatic null termination. strlen() returns length excluding '\\0'. scanf %s stops at whitespace.",
        },
        {
          title: "String Functions",
          code: `#include <stdio.h>
#include <string.h>

int main() {
    char src[] = "Hello";
    char dest[20];
    
    // Copy string
    strcpy(dest, src);
    printf("Copied: %s\\n", dest);
    
    // Concatenate strings
    strcat(dest, " World");
    printf("Concatenated: %s\\n", dest);
    
    // Compare strings
    char a[] = "apple";
    char b[] = "banana";
    int result = strcmp(a, b);
    if (result < 0)
        printf("'%s' comes before '%s'\\n", a, b);
    
    return 0;
}`,
          explanation:
            "strcpy copies strings, strcat joins them, strcmp compares them (returns 0 if equal, negative if first < second, positive otherwise).",
        },
      ],
      diagram: `
┌─────────────────────────────────────────┐
│         String in Memory                 │
├─────────────────────────────────────────┤
│  char str[] = "Hello";                  │
│                                         │
│  Index: [0] [1] [2] [3] [4] [5]         │
│  Value:  H   e   l   l   o  \\0          │
│                                         │
│  \\0 = Null terminator (marks end)       │
└─────────────────────────────────────────┘`,
      keyPoints: [
        "Strings are null-terminated character arrays",
        "Always allocate space for '\\0'",
        "Use %s format specifier for strings",
        "strcmp returns 0 when strings are equal",
        "gets() is unsafe - use fgets() instead",
      ],
    },
    quiz: [
      {
        question: "What terminates a string in C?",
        options: ["\\n", "\\t", "\\0", "NULL"],
        correctAnswer: 2,
        explanation: "Strings in C end with the null character '\\0' which marks the string's end.",
      },
      {
        question: 'What does strlen("Hello") return?',
        options: ["6", "5", "4", "Error"],
        correctAnswer: 1,
        explanation: 'strlen returns the length excluding the null terminator. "Hello" has 5 characters.',
      },
      {
        question: "Which function copies one string to another?",
        options: ["strcat()", "strcmp()", "strcpy()", "strlen()"],
        correctAnswer: 2,
        explanation: "strcpy(dest, src) copies the source string to the destination.",
      },
      {
        question: 'What is the minimum size needed for char str[] = "Hi";?',
        options: ["2", "3", "4", "1"],
        correctAnswer: 1,
        explanation: "\"Hi\" needs 3 bytes: 'H', 'i', and '\\0' (null terminator).",
      },
    ],
  },
  {
    id: 8,
    slug: "pointers",
    title: "Pointers",
    description: "Understand memory addresses and pointer operations.",
    icon: "MousePointer",
    lessons: 9,
    duration: "60 min",
    content: {
      introduction:
        "Pointers are variables that store memory addresses. They are one of C's most powerful features, enabling efficient memory manipulation and dynamic data structures.",
      explanation: [
        "A pointer stores the address of another variable.",
        "& (address-of operator) gives the address of a variable.",
        "* (dereference operator) accesses the value at an address.",
        "Pointers must be declared with the type they point to.",
      ],
      codeExamples: [
        {
          title: "Pointer Basics",
          code: `#include <stdio.h>

int main() {
    int num = 10;
    int *ptr;        // Declare pointer to int
    
    ptr = &num;      // Store address of num
    
    printf("Value of num: %d\\n", num);         // 10
    printf("Address of num: %p\\n", &num);      // Memory address
    printf("Value of ptr: %p\\n", ptr);         // Same address
    printf("Value at ptr: %d\\n", *ptr);        // 10 (dereferenced)
    
    // Modify value through pointer
    *ptr = 20;
    printf("New value of num: %d\\n", num);     // 20
    
    return 0;
}`,
          explanation:
            "& gets address, * dereferences (gets value at address). Pointers let you indirectly access and modify variables.",
        },
        {
          title: "Pointers with Arrays",
          code: `#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = arr;  // Array name is a pointer to first element
    
    // Access array elements using pointer
    printf("First element: %d\\n", *ptr);      // 10
    printf("Second element: %d\\n", *(ptr+1)); // 20
    printf("Third element: %d\\n", *(ptr+2));  // 30
    
    // Pointer arithmetic
    for (int i = 0; i < 5; i++) {
        printf("arr[%d] = %d\\n", i, *(ptr + i));
    }
    
    return 0;
}`,
          explanation:
            "Arrays and pointers are closely related. The array name is a pointer to the first element. Pointer arithmetic allows traversing arrays.",
        },
      ],
      diagram: `
┌─────────────────────────────────────────┐
│         Pointer Concept                  │
├─────────────────────────────────────────┤
│  int num = 10;                          │
│  int *ptr = &num;                       │
│                                         │
│  ┌─────────┐      ┌─────────┐          │
│  │   num   │      │   ptr   │          │
│  │   10    │ ←──  │  1000   │          │
│  │ @1000   │      │ @2000   │          │
│  └─────────┘      └─────────┘          │
│                                         │
│  ptr stores 1000 (address of num)       │
│  *ptr gives 10 (value at address 1000)  │
└─────────────────────────────────────────┘`,
      keyPoints: [
        "& returns address of a variable",
        "* dereferences a pointer (gets value)",
        "Pointer type must match variable type",
        "Array name acts as pointer to first element",
        "NULL pointer points to nothing (use for safety)",
      ],
    },
    quiz: [
      {
        question: "What does &x represent?",
        options: ["Value of x", "Address of x", "Pointer to x", "Reference of x"],
        correctAnswer: 1,
        explanation: "& is the address-of operator. &x gives the memory address where x is stored.",
      },
      {
        question: "If int *ptr = &x; what does *ptr give?",
        options: ["Address of x", "Address of ptr", "Value of x", "Size of x"],
        correctAnswer: 2,
        explanation: "* dereferences the pointer, returning the value stored at the address ptr points to.",
      },
      {
        question: "What is a NULL pointer?",
        options: ["Pointer to zero", "Pointer to nothing", "Invalid pointer", "Empty pointer"],
        correctAnswer: 1,
        explanation:
          "NULL is a pointer that doesn't point to any valid memory location. It's used to indicate 'no value'.",
      },
      {
        question: "In int arr[5], what is arr equivalent to?",
        options: ["arr[0]", "&arr[5]", "&arr[0]", "sizeof(arr)"],
        correctAnswer: 2,
        explanation: "The array name arr is equivalent to the address of its first element, &arr[0].",
      },
    ],
  },
  {
    id: 9,
    slug: "structures",
    title: "Structures",
    description: "Create custom data types by grouping related variables.",
    icon: "Layers",
    lessons: 6,
    duration: "45 min",
    content: {
      introduction:
        "Structures (struct) allow you to group variables of different types under a single name. They're used to represent real-world entities with multiple attributes.",
      explanation: [
        "A structure is a user-defined data type.",
        "It groups related variables (members) together.",
        "Members can be of different data types.",
        "Access members using the dot (.) operator.",
      ],
      codeExamples: [
        {
          title: "Basic Structure",
          code: `#include <stdio.h>
#include <string.h>

// Define structure
struct Student {
    int id;
    char name[50];
    float marks;
};

int main() {
    // Declare and initialize structure variable
    struct Student s1;
    
    s1.id = 101;
    strcpy(s1.name, "John");
    s1.marks = 85.5;
    
    // Access and print members
    printf("ID: %d\\n", s1.id);
    printf("Name: %s\\n", s1.name);
    printf("Marks: %.1f\\n", s1.marks);
    
    return 0;
}`,
          explanation:
            "Define a structure with 'struct', create variables of that type, and access members using the dot operator.",
        },
        {
          title: "Array of Structures",
          code: `#include <stdio.h>

struct Book {
    char title[100];
    char author[50];
    int year;
    float price;
};

int main() {
    // Array of structures
    struct Book library[3] = {
        {"C Programming", "Dennis Ritchie", 1978, 29.99},
        {"The C Book", "Mike Banahan", 1991, 24.99},
        {"Learn C", "John Smith", 2020, 19.99}
    };
    
    // Print all books
    printf("Library Catalog:\\n");
    for (int i = 0; i < 3; i++) {
        printf("\\nBook %d:\\n", i + 1);
        printf("  Title: %s\\n", library[i].title);
        printf("  Author: %s\\n", library[i].author);
        printf("  Year: %d\\n", library[i].year);
        printf("  Price: $%.2f\\n", library[i].price);
    }
    
    return 0;
}`,
          explanation:
            "Arrays of structures store multiple records. Access using array index then member name: library[i].title",
        },
      ],
      diagram: `
┌─────────────────────────────────────────┐
│         Structure Layout                 │
├─────────────────────────────────────────┤
│  struct Student {                       │
│      int id;      ─┐                    │
│      char name[]; ─┼─ Members           │
│      float marks; ─┘                    │
│  };                                     │
│                                         │
│  struct Student s1;                     │
│  s1.id = 101;       // Access member    │
│  s1.marks = 85.5;   // using dot (.)    │
└─────────────────────────────────────────┘`,
      keyPoints: [
        "struct groups different data types",
        "Use dot (.) to access members",
        "typedef can create shorter names",
        "Structures can contain other structures",
        "Arrow (->) used with structure pointers",
      ],
    },
    quiz: [
      {
        question: "What operator is used to access structure members?",
        options: ["->", "::", ".", "[]"],
        correctAnswer: 2,
        explanation: "The dot (.) operator accesses members of a structure variable.",
      },
      {
        question: "Can a structure contain members of different data types?",
        options: ["No, only same type", "Yes", "Only primitive types", "Only arrays"],
        correctAnswer: 1,
        explanation: "Structures can contain members of different data types - that's their main purpose.",
      },
      {
        question: "What keyword is used to define a structure?",
        options: ["class", "struct", "type", "define"],
        correctAnswer: 1,
        explanation: "The 'struct' keyword is used to define a structure in C.",
      },
      {
        question: "When do you use -> instead of . with structures?",
        options: ["For arrays", "For pointers to structures", "For nested structures", "Never"],
        correctAnswer: 1,
        explanation:
          "-> (arrow operator) is used when you have a pointer to a structure. ptr->member is equivalent to (*ptr).member",
      },
    ],
  },
  {
    id: 10,
    slug: "file-handling",
    title: "File Handling",
    description: "Read from and write to files for persistent data storage.",
    icon: "FileText",
    lessons: 7,
    duration: "50 min",
    content: {
      introduction:
        "File handling allows programs to store and retrieve data permanently. C provides functions in <stdio.h> for file operations like opening, reading, writing, and closing files.",
      explanation: [
        "Files provide persistent storage beyond program execution.",
        "Use fopen() to open files with specific modes (r, w, a, etc.).",
        "Always close files with fclose() after use.",
        "Functions: fprintf(), fscanf(), fgets(), fputs() for file I/O.",
      ],
      codeExamples: [
        {
          title: "Writing to a File",
          code: `#include <stdio.h>

int main() {
    FILE *fp;
    
    // Open file for writing (creates if doesn't exist)
    fp = fopen("output.txt", "w");
    
    if (fp == NULL) {
        printf("Error opening file!\\n");
        return 1;
    }
    
    // Write to file
    fprintf(fp, "Hello, File!\\n");
    fprintf(fp, "Line 2: Learning C\\n");
    fprintf(fp, "Score: %d\\n", 100);
    
    // Close file
    fclose(fp);
    printf("File written successfully!\\n");
    
    return 0;
}`,
          explanation:
            "fopen() opens/creates a file. 'w' mode writes (overwrites existing). fprintf() writes formatted data. Always fclose() when done.",
        },
        {
          title: "Reading from a File",
          code: `#include <stdio.h>

int main() {
    FILE *fp;
    char line[100];
    
    // Open file for reading
    fp = fopen("output.txt", "r");
    
    if (fp == NULL) {
        printf("File not found!\\n");
        return 1;
    }
    
    // Read and print each line
    printf("File contents:\\n");
    while (fgets(line, sizeof(line), fp) != NULL) {
        printf("%s", line);
    }
    
    fclose(fp);
    return 0;
}`,
          explanation:
            "Open with 'r' mode to read. fgets() reads line by line safely. Check for NULL to detect end of file.",
        },
      ],
      diagram: `
┌─────────────────────────────────────────┐
│           File Modes                     │
├─────────────────────────────────────────┤
│  "r"  - Read (file must exist)          │
│  "w"  - Write (creates/overwrites)      │
│  "a"  - Append (adds to end)            │
│  "r+" - Read & Write                    │
│  "w+" - Read & Write (creates new)      │
│  "a+" - Read & Append                   │
├─────────────────────────────────────────┤
│  Binary modes: "rb", "wb", "ab"         │
└─────────────────────────────────────────┘`,
      keyPoints: [
        "Always check if fopen() returns NULL",
        "Close files with fclose() to save data",
        "'w' mode overwrites existing content",
        "'a' mode appends to existing content",
        "Use binary mode ('rb', 'wb') for non-text files",
      ],
    },
    quiz: [
      {
        question: "Which function is used to open a file?",
        options: ["open()", "fopen()", "fileopen()", "openfile()"],
        correctAnswer: 1,
        explanation: "fopen() opens a file and returns a FILE pointer.",
      },
      {
        question: "What does 'w' mode do if the file exists?",
        options: ["Appends to it", "Returns error", "Overwrites it", "Opens read-only"],
        correctAnswer: 2,
        explanation: "'w' mode creates a new file or overwrites an existing file with the same name.",
      },
      {
        question: "What should you always do after file operations?",
        options: ["Delete the file", "Call fclose()", "Call fflush()", "Nothing"],
        correctAnswer: 1,
        explanation: "Always call fclose() to properly close the file and ensure all data is saved.",
      },
      {
        question: "Which mode opens a file for appending?",
        options: ["r", "w", "a", "x"],
        correctAnswer: 2,
        explanation: "'a' (append) mode opens a file and positions at the end to add new content without overwriting.",
      },
    ],
  },
]

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find((chapter) => chapter.slug === slug)
}

export function getAdjacentChapters(slug: string): { prev: Chapter | null; next: Chapter | null } {
  const index = chapters.findIndex((chapter) => chapter.slug === slug)
  return {
    prev: index > 0 ? chapters[index - 1] : null,
    next: index < chapters.length - 1 ? chapters[index + 1] : null,
  }
}
