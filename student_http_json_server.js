import http from "http";

const students = [];

const server = http.createServer((req, res) => {
    const { method, url } = req;

    // 1. CREATE (POST /students)
    if (method === "POST" && url === "/students") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const newStudent = JSON.parse(body);
            students.push(newStudent);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(
                JSON.stringify({
                    message: "Students created successfully",
                    data: newStudent
                })
            );
        });
    }
    // 2. READ ALL (GET /students)
    else if (method === "GET" && url === "/students") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                message: "List of students",
                data: students
            })
        );
    }
    // 3. READ SINGLE (GET /students/:id)
    else if (method === "GET" && url.startsWith("/students/")) {
        const studentId = parseInt(url.split("/")[2]);
        const student = students.find((s) => s.id === studentId);
        if (student) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(
                JSON.stringify({
                    message: "Student details",
                    data: student
                })
            );
        } else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(
                JSON.stringify({
                    message: "student not found"
                })
            );
        }
    }
    // 4. UPDATE (PUT /students/:id)
    else if (method === "PUT" && url.startsWith("/students/")) {
        const studentId = parseInt(url.split("/")[2]);
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const updateStudent = JSON.parse(body);
            const indexToUpdate = students.findIndex((s) => s.id === studentId);
            if (indexToUpdate !== -1) {
                students[indexToUpdate] = { id: studentId, ...updateStudent };
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(
                    JSON.stringify({
                        message: "student updated successfully",
                        data: students[indexToUpdate]
                    })
                );
            } else {
                // Added missing else block so the request doesn't hang
                res.writeHead(404, { "Content-Type": "application/json" });
                res.end(
                    JSON.stringify({
                        message: "student not found"
                    })
                );
            }
        });
    }
    // 5. DELETE (DELETE /students/:id)
    else if (method === "DELETE" && url.startsWith("/students/")) {
        const studentId = parseInt(url.split("/")[2]);
        const indexToDelete = students.findIndex((s) => s.id === studentId);
        if (indexToDelete !== -1) {
            const deletedStudent = students.splice(indexToDelete, 1);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(
                JSON.stringify({
                    message: "student deleted successfully",
                    data: deletedStudent[0]
                })
            );
        } else {
            // Added missing else block so the request doesn't hang
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(
                JSON.stringify({
                    message: "student not found"
                })
            );
        }
    }
    // 6. 404 Route Fallback
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                message: "Page not found"
            })
        );
    }
});

server.listen(4000, () => {
    console.log("Server running at http://localhost:4000/");
});
