'use strict'
//Define la clase Curso y su constructor. El constructor inicializa las propiedades nombre, duracion, descripcion, videos, estudiantes y tareas.
class Curso {
    constructor(nombre, duracion, descripcion) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.descripcion = descripcion;
        this.videos = [];
        this.estudiantes = {};
        this.tareas = {};
    }
//Método que añade un nuevo video al curso. Recibe un titulo y un link y los agrega al array videos.
    agregarVideo(titulo, link) {
        this.videos.push({ titulo, link });
    }
//Método que matricula a un estudiante en el curso. Crea una entrada en el objeto estudiantes con el nombre del estudiante como clave y un array
// vacío como valor, si el estudiante no está matriculado previamente.

    matricular(estudiante) {
        this.estudiantes[estudiante] = [];
    }
// Método que añade una nueva tarea a un estudiante matriculado. Recibe el nombre del estudiante y la tarea, y la añade al array de tareas del estudiante
// en el objeto estudiantes. También crea una entrada en el objeto tareas con la tarea como clave y false como valor, indicando que la tarea no está completada.
    agregarTarea(estudiante, tarea) {
        if (this.estudiantes[estudiante]) {
            this.estudiantes[estudiante].push(tarea);
            this.tareas[tarea] = false;
        } else {
            console.log(`El estudiante ${estudiante} no está matriculado en el curso.`);
        }
    }

// Método que marca una tarea como completada por un estudiante. Recibe el nombre del estudiante y la tarea,
// y actualiza el valor de la tarea a true en el objeto tareas si la tarea existe y el estudiante está matriculado.

    completarTarea(estudiante, tarea) {
        if (this.estudiantes[estudiante]) {
            if (this.tareas[tarea] !== undefined) {
                this.tareas[tarea] = true;
            } else {
                console.log(`La tarea ${tarea} no existe en el curso.`);
            }
        } else {
            console.log(`El estudiante ${estudiante} no está matriculado en el curso.`);
        }
    }
//mostrarInfo: Método que muestra la información del curso, incluyendo nombre, duración, descripción, videos y tareas pendientes de cada estudiante. Utiliza map y join para crear una cadena de texto con la información y la muestra en una ventana con alert.
    mostrarInfo() {
        const videosInfo = this.videos.map(video => `- ${video.titulo}: ${video.link}`).join("\n");
        let info = `Nombre: ${this.nombre}\nDuración: ${this.duracion}\nDescripción: ${this.descripcion}\nVideos:\n${videosInfo}`;

        for (const estudiante in this.estudiantes) {
            info += `\n\nEstudiante: ${estudiante}\nTareas:`;
            this.estudiantes[estudiante].forEach(tarea => {
                const completada = this.tareas[tarea] ? "✔" : "❌";
                info += `\n- ${tarea} (${completada})`;
            });
        }

        alert(info);
    }
}

//Ejemplo de uso: Creación de un objeto Curso, agregando videos, matriculando estudiantes, asignando tareas, marcando tareas como completadas y mostrando la información del curso.
let curso = new Curso("Curso de JavaScript", "4 semanas", "Aprende JavaScript desde cero");
curso.agregarVideo("Introducción a JavaScript", "https://youtu.be/Q9fwkpxr3Dw?si=gj0jEokvPbH38NcI");
curso.agregarVideo("Variables y Tipos de Datos", "https://youtu.be/kZfuJvkdcHU?si=YoQWT1BJ829x-Avp");
curso.agregarVideo("Funciones en JavaScript", "https://youtu.be/aYdvt6myUkc?si=W4Hi5MGInxHbrEgM");

curso.matricular("Mateo");
curso.matricular("Teo");
curso.matricular("Carlos");

curso.agregarTarea("Juan", "Realizar ejercicio 1");
curso.agregarTarea("María", "Realizar ejercicio 1");
curso.agregarTarea("Carlos", "Realizar ejercicio 1");

curso.completarTarea("Juan", "Realizar ejercicio 1");
curso.completarTarea("María", "Realizar ejercicio 1");

curso.mostrarInfo();