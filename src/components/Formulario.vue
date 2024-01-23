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
        <label for="direction">Dirección</label>
        <input id="direction" style="margin-left: 10px;" v-model="direction" type="text" name="direction" required>
      </p>

      <p>
        <label for="age">Fecha de nacimiento (menor de 18 años)</label>
        <input id="age" style="margin-left: 10px;" v-model="age" type="date" name="age"  required>
      </p>
      <p>
        <label for="correo">Correo electrónico</label>
        <input id="correo" style="margin-left: 10px;" v-model="correo" type="email" name="correo" required>
      </p>
      
      <p>
        <label for="tel">Número de teléfono</label>
        <input id="tel" style="margin-left: 10px;" v-model="tel" type="tel" name="tel" pattern="[0-9]{10}" required>
      </p>
     
      <p>
        <label for="img">Subir fotografía (menos de 3MB)</label>
        <input id="img" style="margin-left: 10px;" type="file" accept="image/png" @change="handleImageUpload" required>
      </p>

      
        <div style="text-align: center;">
        <input type="submit" style="color: rgb(255, 255, 255); background-color: green; border-color: green; margin: 0 auto;" value="Enviar Formulario">
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
  return today.toISOString().split("T")[0];
};

const checkForm = () => {
  errors.value = [];

  if (!name.value) {
    errors.value.push("Nombre requerido.");
  }
  if (!age.value) {
    errors.value.push("Edad requerida.");
  }
  if (!direction.value) {
    errors.value.push("Dirección requerida");
  }
  if (!correo.value) {
    errors.value.push("Correo requerido");
  }
  if (!tel.value) {
    errors.value.push("Teléfono requerido");
  }
  if (!img.value) {
    errors.value.push("Fotografía requerida");
  }

  if (errors.value.length === 0) {
    console.log("Formulario enviado con éxito");
  }
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  const maxSize = 3 * 1024 * 1024; // 3MB

  if (file && file.size > maxSize) {
    errors.value.push("La fotografía debe ser menor a 3MB");
  } else {
    img.value = file;
  }
};
</script>
