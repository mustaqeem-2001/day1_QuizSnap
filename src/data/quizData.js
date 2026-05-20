const quizData = [
    {
        id: 1,
        question: "What does JSX stand for?",
        options: [
            { id: "A", text: "JavaScript XML" },
            { id: "B", text: "Java Syntax Extension" },
            { id: "C", text: "JSON Exchange" },
            { id: "D", text: "JavaScript Extra" }
        ],
        answer: "A"
    },
    {
        id: 2,
        question: "Which hook manages local component state?",
        options: [
            { id: "A", text: "useEffect" },
            { id: "B", text: "useRef" },
            { id: "C", text: "useContext" },
            { id: "D", text: "useState" }
        ],
        answer: "D"
    },
    {
        id: 3,
        question: "What must every list item have in React?",
        options: [
            { id: "A", text: "an id" },
            { id: "B", text: "a key prop" },
            { id: "C", text: "a className" },
            { id: "D", text: "a ref" }
        ],
        answer: "B"
    },
    {
        id: 4,
        question: "Which array method is used to render a list in JSX?",
        options: [
            { id: "A", text: "forEach" },
            { id: "B", text: "filter" },
            { id: "C", text: "map" },
            { id: "D", text: "reduce" }
        ],
        answer: "C"
    },
    {
        id: 5,
        question: "What does useState return?",
        options: [
            { id: "A", text: "Just the state value" },
            { id: "B", text: "An array with the state value and a setter function" },
            { id: "C", text: "An object" },
            { id: "D", text: "A ref" }
        ],
        answer: "B"
    },
    {
        id: 6,
        question: "What happens when state changes in React?",
        options: [
            { id: "A", text: "The whole page reloads" },
            { id: "B", text: "Only the changed variable updates" },
            { id: "C", text: "The component re-renders" },
            { id: "D", text: "Nothing until you call render()" }
        ],
        answer: "C"
    },
    {
        id: 7,
        question: "How do you pass data from a parent to a child component?",
        options: [
            { id: "A", text: "Through state" },
            { id: "B", text: "Through props" },
            { id: "C", text: "Through useEffect" },
            { id: "D", text: "Through a global variable" }
        ],
        answer: "B"
    },
    {
        id: 8,
        question: "What is the correct way to handle a form submission in React?",
        options: [
            { id: "A", text: 'action="/submit" on the form' },
            { id: "B", text: "onSubmit event handler" },
            { id: "C", text: "onClick on the input" },
            { id: "D", text: "useForm hook" }
        ],
        answer: "B"
    },
    {
        id: 9,
        question: "Which of these is a controlled input?",
        options: [
            { id: "A", text: "An input with a defaultValue" },
            { id: "B", text: "An input with value and onChange tied to state" },
            { id: "C", text: "An input with a ref" },
            { id: "D", text: "An input with a placeholder" }
        ],
        answer: "B"
    },
    {
        id: 10,
        question: "What does useEffect do?",
        options: [
            { id: "A", text: "Updates state" },
            { id: "B", text: "Runs side effects after render" },
            { id: "C", text: "Memoizes a value" },
            { id: "D", text: "Creates a ref" }
        ],
        answer: "B"
    },
    {
        id: 11,
        question: "What is the second argument to useEffect?",
        options: [
            { id: "A", text: "A cleanup function" },
            { id: "B", text: "A callback" },
            { id: "C", text: "The dependency array" },
            { id: "D", text: "A boolean" }
        ],
        answer: "C"
    },
    {
        id: 12,
        question: "When does useEffect with an empty array [] run?",
        options: [
            { id: "A", text: "On every render" },
            { id: "B", text: "Never" },
            { id: "C", text: "Once when the component mounts" },
            { id: "D", text: "Only when state changes" }
        ],
        answer: "C"
    },
    {
        id: 13,
        question: "What is 'lifting state'?",
        options: [
            { id: "A", text: "Moving state into a global store" },
            { id: "B", text: "Moving state up to a common parent so siblings can share it" },
            { id: "C", text: "Deleting state" },
            { id: "D", text: "Copying state between components" }
        ],
        answer: "B"
    },
    {
        id: 14,
        question: "What does the spread operator do in { ...item, isStarred: true }?",
        options: [
            { id: "A", text: "Copies all properties of item then overrides isStarred" },
            { id: "B", text: "Merges two arrays" },
            { id: "C", text: "Deletes a property" },
            { id: "D", text: "Creates a new array" }
        ],
        answer: "A"
    },
    {
        id: 15,
        question: "What is a React fragment?",
        options: [
            { id: "A", text: "A broken component" },
            { id: "B", text: "A wrapper that renders no extra DOM element" },
            { id: "C", text: "A type of hook" },
            { id: "D", text: "A context provider" }
        ],
        answer: "B"
    },
    {
        id: 16,
        question: "What does filter() return?",
        options: [
            { id: "A", text: "The first matching item" },
            { id: "B", text: "A new array with only matching items" },
            { id: "C", text: "A boolean" },
            { id: "D", text: "The index of the matching item" }
        ],
        answer: "B"
    },
    {
        id: 17,
        question: "How do you prevent a form from reloading the page on submit?",
        options: [
            { id: "A", text: "return false" },
            { id: "B", text: "e.preventDefault()" },
            { id: "C", text: "stopPropagation()" },
            { id: "D", text: "useSubmit()" }
        ],
        answer: "B"
    },
    {
        id: 18,
        question: "What is a 'side effect' in React?",
        options: [
            { id: "A", text: "A bug" },
            { id: "B", text: "Something that happens outside of rendering, like fetching data" },
            { id: "C", text: "A prop" },
            { id: "D", text: "A CSS animation" }
        ],
        answer: "B"
    },
    {
        id: 19,
        question: "Which is the correct way to update state based on previous state?",
        options: [
            { id: "A", text: "setState(state + 1)" },
            { id: "B", text: "setState(prev => prev + 1)" },
            { id: "C", text: "state = state + 1" },
            { id: "D", text: "useState(state + 1)" }
        ],
        answer: "B"
    },
    {
        id: 20,
        question: "What does the key prop help React do?",
        options: [
            { id: "A", text: "Style elements" },
            { id: "B", text: "Identify which list items have changed" },
            { id: "C", text: "Pass data to children" },
            { id: "D", text: "Trigger re-renders" }
        ],
        answer: "B"
    },
    {
        id: 21,
        question: "What is a reusable component?",
        options: [
            { id: "A", text: "A component used twice in the same file" },
            { id: "B", text: "A component that accepts props and can be used in multiple places" },
            { id: "C", text: "A component with no state" },
            { id: "D", text: "A component with a key prop" }
        ],
        answer: "B"
    },
    {
        id: 22,
        question: "What is conditional rendering?",
        options: [
            { id: "A", text: "Rendering based on screen size" },
            { id: "B", text: "Showing or hiding elements based on state or props" },
            { id: "C", text: "Rendering in a loop" },
            { id: "D", text: "Using CSS to hide elements" }
        ],
        answer: "B"
    },
    {
        id: 23,
        question: "What does the && operator do in JSX?",
        options: [
            { id: "A", text: "Adds two values" },
            { id: "B", text: "Only renders the right side if the left side is truthy" },
            { id: "C", text: "Joins two strings" },
            { id: "D", text: "Compares two values" }
        ],
        answer: "B"
    },
    {
        id: 24,
        question: "Which is NOT a valid way to conditionally render in React?",
        options: [
            { id: "A", text: "Ternary operator" },
            { id: "B", text: "&& operator" },
            { id: "C", text: "if/else inside JSX directly" },
            { id: "D", text: "if/else above the return" }
        ],
        answer: "C"
    },
    {
        id: 25,
        question: "What does useRef do?",
        options: [
            { id: "A", text: "Triggers a re-render" },
            { id: "B", text: "Stores a mutable value that does not cause re-renders" },
            { id: "C", text: "Fetches data" },
            { id: "D", text: "Creates a state variable" }
        ],
        answer: "B"
    }
];

export default quizData;