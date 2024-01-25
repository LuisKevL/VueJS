<template>
  <div class="card" style="width: 500px;">
    <h1>Formulario</h1>
    <form @submit.prevent="checkForm" action="https://vuejs.org/" method="post">
      <p v-if="errors.length">
        <b>Por favor, soluciona los errores:</b>
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
      </p>

      <p>
        <label for="name">Nombre completo</label>
        <input id="name" style="margin-left: 10px;" v-model="name" type="text" name="name" required>
      </p>
      <p>
        <label for="direction">Dirección (CP, Calle, número, Ciudad)</label>
        <input id="direction" style="margin-left: 10px;" v-model="direction" type="text" name="direction" required>
      </p>

      <p>
        <label for="age">Fecha de nacimiento</label>
        <input id="age" style="margin-left: 10px;" v-model="age" type="date" name="age" :max="maxDate()" required>
      </p>
      <p>
        <label for="correo">Correo electrónico</label>
        <input id="correo" style="margin-left: 10px;" v-model="correo" type="email" name="correo"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" required>
      </p>

      <p>
        <label for="tel">Número telefónico</label>
        <input id="tel" style="margin-left: 10px;" v-model="tel" type="tel" name="tel" pattern="[0-9]{10}" required>
      </p>

      <p>
        <label for="img">Fotografía (PNG)</label>
        <input id="img" style="margin-left: 10px;" type="file" accept="image/png" @change="handleImageUpload" required>
      </p>


      <div style="text-align: center;">
        <input type="submit"
          style="color: rgb(255, 255, 255); background-color: green; border-color: green; margin: 0 auto;"
          value="Enviar Formulario">
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const errors = ref([]);
const name = ref(null);
const age = ref(null);
const direction = ref(null);
const correo = ref(null);
const tel = ref(null);
const img = ref(null);

const maxDate = () => {
  const today = new Date();
  today.setFullYear(today.getFullYear() - 18);
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const checkForm = () => {
  errors.value = [];

  if (!name.value || !/^[a-zA-Z]+ [a-zA-Z]+( [a-zA-Z]+)?$/.test(name.value.trim())) {
    errors.value.push("Nombre mal escrito. Ingrese nombre y al menos un apellido.");
  }
  if (!age.value) {
    errors.value.push("Edad requerida.");
  }
  if (!direction.value || !/^\d{5} [a-zA-ZáéíóúüÁÉÍÓÚÜ\s]+ \d+( [a-zA-ZáéíóúüÁÉÍÓÚÜ\s]+)?$/.test(direction.value.trim())) {
    errors.value.push("Dirección mal escrita. CP, calle, número y ciudad.");
  }
  if (!correo.value) {
    errors.value.push("Correo requerido");
  }
  if (!tel.value) {
    errors.value.push("Teléfono requerido");
  }
  if (!img.value) {
    errors.value.push("Foto requerida");
  }

  if (errors.value.length === 0) {
    window.location.href = "https://vuejs.org/";
  }
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  const maxSize = 3 * 1024 * 1024;

  if (file && file.size > maxSize) {
    errors.value.push("Foto menor a 3MB");
  } else {
    img.value = file;
  }
};
</script>