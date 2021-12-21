"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disciplina = void 0;
class Disciplina {
    constructor() {
        this.clean();
    }
    criar(name, teacher, hours, capacity) {
        this.name = name;
        this.teacher = teacher;
        this.hours = hours;
        this.capacity = capacity;
    }
    clean() {
        this.name = "";
        this.teacher = "";
        this.hours = "";
        this.capacity = 0;
    }
}
exports.Disciplina = Disciplina;
//# sourceMappingURL=disciplina.js.map