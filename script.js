const malla = [
  // Año 1
  { nombre: "Introducción a la Clínica Médica I", anio: 1 },
  { nombre: "Autorregulación para el Profesionalismo y Práctica de la Medicina", anio: 1 },
  { nombre: "Salud y Sociedad I", anio: 1 },
  { nombre: "Organismo Humano I", anio: 1 },
  { nombre: "Estructura y Función Celular I", anio: 1 },
  { nombre: "Lengua Materna", anio: 1 },
  { nombre: "Asignatura Electiva 1", anio: 1 },

  // Año 2
  { nombre: "Introducción a la Clínica Médica II", anio: 2, requisitos: ["Introducción a la Clínica Médica I"] },
  { nombre: "Salud y Sociedad II", anio: 2, requisitos: ["Salud y Sociedad I"] },
  { nombre: "Organismo Humano II", anio: 2, requisitos: ["Organismo Humano I"] },
  { nombre: "Patógenos y Defensa", anio: 2 },
  { nombre: "Profesionalismo y Práctica de la Medicina", anio: 2 },
  { nombre: "Asignatura Electiva 2", anio: 2 },

  // Año 3
  { nombre: "Metodología de la Investigación", anio: 3 },
  { nombre: "Integrado: Introducción a la Semiología", anio: 3 },
  { nombre: "Integrado: Sistema Hematología", anio: 3 },
  { nombre: "Integrado: Aparato Locomotor", anio: 3 },
  { nombre: "Integrado: Endocrinología y Diabetes", anio: 3 },
  { nombre: "Integrado: Reproducción Humana", anio: 3 },
  { nombre: "Integrado: Dermatología", anio: 3 },
  { nombre: "Integrado: Introducción a la Cirugía", anio: 3 },
  { nombre: "Inglés", anio: 3 },
  { nombre: "Asignatura Electiva 3", anio: 3 },

  // Año 4
  { nombre: "Medicina Basada en la Evidencia", anio: 4 },
  { nombre: "Integrado: Enfermedades Respiratorias", anio: 4 },
  { nombre: "Integrado: Enfermedades Cardiovasculares", anio: 4 },
  { nombre: "Integrado: Enfermedades Neurológicas", anio: 4 },
  { nombre: "Integrado: Enfermedades Nefrourológicas", anio: 4 },
  { nombre: "Integrado: Enfermedades Otorrinolaringológicas", anio: 4 },
  { nombre: "Integrado: Enfermedades Oftalmológicas", anio: 4 },
  { nombre: "Integrado: Enfermedades del Aparato Digestivo", anio: 4 },

  // Año 5
  { nombre: "TIPE: Clínica Salud Familiar", anio: 5 },
  { nombre: "Clínica de la Mujer", anio: 5 },
  { nombre: "Clínica del Niño y del Adolescente", anio: 5 },
  { nombre: "Clínica del Adulto y Adulto Mayor", anio: 5 },
  { nombre: "Clínica de Salud Mental", anio: 5 },
  { nombre: "Clínica del Soporte Vital Avanzado", anio: 5 },
  { nombre: "Gestión en Salud", anio: 5 },
  { nombre: "Medicina Legal", anio: 5 },

  // Año 6
  { nombre: "Internado de Medicina Interna", anio: 6 },
  { nombre: "Internado de Cirugía General", anio: 6 },
  { nombre: "Internado de Traumatología", anio: 6 },
  { nombre: "Internado Electivo 1", anio: 6 },
  { nombre: "Internado Electivo 2", anio: 6 },

  // Año 7
  { nombre: "Internado Obstetricia y Ginecología", anio: 7 },
  { nombre: "Internado de Pediatría", anio: 7 },
  { nombre: "TIPE: Internado de Atención Primaria", anio: 7 },
  { nombre: "Internado de Salud Mental", anio: 7 },
  { nombre: "Internado Electivo 3", anio: 7 }
];

// Estado de ramos aprobados
const estado = {};

function renderMalla() {
  for (let i = 1; i <= 7; i++) {
    const contenedor = document.getElementById(`anio${i}`);
    if (contenedor) contenedor.innerHTML = "";
  }

  malla.forEach(ramo => {
    const div = document.createElement("div");
    div.textContent = ramo.nombre;
    div.className = "ramo";

    if (!requisitosCumplidos(ramo)) {
      div.classList.add("bloqueado");
    } else if (estado[ramo.nombre]) {
      div.classList.add("aprobado");
    }

    div.onclick = () => {
      if (!requisitosCumplidos(ramo)) return;
      estado[ramo.nombre] = !estado[ramo.nombre];
      renderMalla();
    };

    const contenedor = document.getElementById(`anio${ramo.anio}`);
    if (contenedor) contenedor.appendChild(div);
  });
}

function requisitosCumplidos(ramo) {
  if (!ramo.requisitos) return true;
  return ramo.requisitos.every(req => estado[req]);
}

renderMalla();
