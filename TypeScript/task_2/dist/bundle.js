/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

// Director class implementing DirectorInterface
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
// Teacher class implementing TeacherInterface
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
// createEmployee function that returns Director or Teacher based on salary
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
// Testing examples as specified in the requirements
console.log(createEmployee(200)); // Should return Teacher instance
console.log(createEmployee(1000)); // Should return Director instance
console.log(createEmployee('$500')); // Should return Director instance
// Additional examples to demonstrate the methods
var teacher = createEmployee(200);
console.log(teacher.workFromHome()); // "Cannot work from home"
console.log(teacher.getCoffeeBreak()); // "Cannot have a break"
console.log(teacher.workTeacherTasks()); // "Getting to work"
var director = createEmployee(1000);
console.log(director.workFromHome()); // "Working from home"
console.log(director.getCoffeeBreak()); // "Getting a coffee break"
console.log(director.workDirectorTasks()); // "Getting to director tasks"

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWNBLGdEQUFnRDtBQUNoRDtJQUFBO0lBWUEsQ0FBQztJQVhDLCtCQUFZLEdBQVo7UUFDRSxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0UsT0FBTyx3QkFBd0IsQ0FBQztJQUNsQyxDQUFDO0lBRUQsb0NBQWlCLEdBQWpCO1FBQ0UsT0FBTywyQkFBMkIsQ0FBQztJQUNyQyxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7QUFFRCw4Q0FBOEM7QUFDOUM7SUFBQTtJQVlBLENBQUM7SUFYQyw4QkFBWSxHQUFaO1FBQ0UsT0FBTyx1QkFBdUIsQ0FBQztJQUNqQyxDQUFDO0lBRUQsZ0NBQWMsR0FBZDtRQUNFLE9BQU8scUJBQXFCLENBQUM7SUFDL0IsQ0FBQztJQUVELGtDQUFnQixHQUFoQjtRQUNFLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDO0FBRUQsMkVBQTJFO0FBQzNFLFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQzdDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDOUMsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBQ3RCO0lBQ0QsT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ3hCLENBQUM7QUFFRCxvREFBb0Q7QUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFFLGlDQUFpQztBQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsa0NBQWtDO0FBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQ0FBa0M7QUFFdkUsaURBQWlEO0FBQ2pELElBQU0sT0FBTyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQVksQ0FBQztBQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUssMEJBQTBCO0FBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBRyx3QkFBd0I7QUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsb0JBQW9CO0FBRTdELElBQU0sUUFBUSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQWEsQ0FBQztBQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQU0sc0JBQXNCO0FBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBSSwyQkFBMkI7QUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsOEJBQThCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERpcmVjdG9ySW50ZXJmYWNlIHdpdGggMyBleHBlY3RlZCBtZXRob2RzXG5pbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZztcbn1cblxuLy8gVGVhY2hlckludGVyZmFjZSB3aXRoIDMgZXhwZWN0ZWQgbWV0aG9kc1xuaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nO1xufVxuXG4vLyBEaXJlY3RvciBjbGFzcyBpbXBsZW1lbnRpbmcgRGlyZWN0b3JJbnRlcmZhY2VcbmNsYXNzIERpcmVjdG9yIGltcGxlbWVudHMgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJXb3JraW5nIGZyb20gaG9tZVwiO1xuICB9XG5cbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJHZXR0aW5nIGEgY29mZmVlIGJyZWFrXCI7XG4gIH1cblxuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkdldHRpbmcgdG8gZGlyZWN0b3IgdGFza3NcIjtcbiAgfVxufVxuXG4vLyBUZWFjaGVyIGNsYXNzIGltcGxlbWVudGluZyBUZWFjaGVySW50ZXJmYWNlXG5jbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkNhbm5vdCB3b3JrIGZyb20gaG9tZVwiO1xuICB9XG5cbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJDYW5ub3QgaGF2ZSBhIGJyZWFrXCI7XG4gIH1cblxuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiR2V0dGluZyB0byB3b3JrXCI7XG4gIH1cbn1cblxuLy8gY3JlYXRlRW1wbG95ZWUgZnVuY3Rpb24gdGhhdCByZXR1cm5zIERpcmVjdG9yIG9yIFRlYWNoZXIgYmFzZWQgb24gc2FsYXJ5XG5mdW5jdGlvbiBjcmVhdGVFbXBsb3llZShzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IERpcmVjdG9yIHwgVGVhY2hlciB7XG4gIGlmICh0eXBlb2Ygc2FsYXJ5ID09PSBcIm51bWJlclwiICYmIHNhbGFyeSA8IDUwMCkge1xuICAgIHJldHVybiBuZXcgVGVhY2hlcigpO1xuICB9XG4gIHJldHVybiBuZXcgRGlyZWN0b3IoKTtcbn1cblxuLy8gVGVzdGluZyBleGFtcGxlcyBhcyBzcGVjaWZpZWQgaW4gdGhlIHJlcXVpcmVtZW50c1xuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMjAwKSk7ICAvLyBTaG91bGQgcmV0dXJuIFRlYWNoZXIgaW5zdGFuY2VcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDEwMDApKTsgLy8gU2hvdWxkIHJldHVybiBEaXJlY3RvciBpbnN0YW5jZVxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoJyQ1MDAnKSk7IC8vIFNob3VsZCByZXR1cm4gRGlyZWN0b3IgaW5zdGFuY2VcblxuLy8gQWRkaXRpb25hbCBleGFtcGxlcyB0byBkZW1vbnN0cmF0ZSB0aGUgbWV0aG9kc1xuY29uc3QgdGVhY2hlciA9IGNyZWF0ZUVtcGxveWVlKDIwMCkgYXMgVGVhY2hlcjtcbmNvbnNvbGUubG9nKHRlYWNoZXIud29ya0Zyb21Ib21lKCkpOyAgICAgLy8gXCJDYW5ub3Qgd29yayBmcm9tIGhvbWVcIlxuY29uc29sZS5sb2codGVhY2hlci5nZXRDb2ZmZWVCcmVhaygpKTsgICAvLyBcIkNhbm5vdCBoYXZlIGEgYnJlYWtcIlxuY29uc29sZS5sb2codGVhY2hlci53b3JrVGVhY2hlclRhc2tzKCkpOyAvLyBcIkdldHRpbmcgdG8gd29ya1wiXG5cbmNvbnN0IGRpcmVjdG9yID0gY3JlYXRlRW1wbG95ZWUoMTAwMCkgYXMgRGlyZWN0b3I7XG5jb25zb2xlLmxvZyhkaXJlY3Rvci53b3JrRnJvbUhvbWUoKSk7ICAgICAgLy8gXCJXb3JraW5nIGZyb20gaG9tZVwiXG5jb25zb2xlLmxvZyhkaXJlY3Rvci5nZXRDb2ZmZWVCcmVhaygpKTsgICAgLy8gXCJHZXR0aW5nIGEgY29mZmVlIGJyZWFrXCJcbmNvbnNvbGUubG9nKGRpcmVjdG9yLndvcmtEaXJlY3RvclRhc2tzKCkpOyAvLyBcIkdldHRpbmcgdG8gZGlyZWN0b3IgdGFza3NcIlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9