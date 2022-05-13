// Array de objetos e laços

const todos = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true,
    },

    {
        id: 2,
        text: "Meeting with boss",
        isCompleted: true,
    },

    {
        id: 3,
        text: "Dentist appt",
        isCompleted: false,
    },
];

// For overloop
for (let t of todos) {
    console.log(t);
    console.log(t.text);
    console.log(t.id);
}
