// CRUD Operations on Array

const students = [
    { id: 1, name: "Surya", age: 20 },
    { id: 2, name: "Tulasi", age: 22 },
    { id: 3, name: "Radha", age: 20 }
];

// CREATE - Add a new student
const newStudent = { id: 4, name: "Nitya", age: 21 };

students.push(newStudent);

console.log("All Students:", students);


// READ - Read a student by ID
const studentReadId = 2;

const student = students.find(
    (stu) => stu.id === studentReadId
);

if (student) {
    console.log(
        `Student with id ${studentReadId}:`,
        student
    );
} else {
    console.log(
        `Student with id ${studentReadId} not found`
    );
}


// UPDATE - Update a student by ID
const updateID = 3;

const updateData = {
    id: 3,
    name: "Santhoshini",
    age: 20
};

const updateIndex = students.findIndex(
    (stu) => stu.id === updateID
);

if (updateIndex !== -1) {
    students[updateIndex] = {
        ...students[updateIndex],
        ...updateData
    };

    console.log(
        "Student updated:",
        students[updateIndex]
    );
} else {
    console.log(
        `Student with id ${updateID} not found`
    );
}


// DELETE - Delete a student by ID
const deleteID = 1;

const deleteIndex = students.findIndex(
    (stu) => stu.id === deleteID
);

if (deleteIndex !== -1) {
    const deletedStudent = students.splice(deleteIndex, 1);

    console.log(
        "Student deleted:",
        deletedStudent[0]
    );
} else {
    console.log(
        `Student with id ${deleteID} not found`
    );
}
console.log("Students after CRUD :",students);