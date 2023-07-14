<template>
  <div class="registration-form">
    <div class="background-all"></div>
    <h2>Registro de Usuario</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="name" required />
      </div>

      <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" v-model="email" required />
        <span v-show="!isEmailValid(email)" class="error"
          >Formato de correo inválido</span
        >
      </div>

      <div class="form-group">
        <label for="phone">Teléfono:</label>
        <input
          type="tel"
          id="phone"
          v-model="phone"
          pattern="[0-9]{9}"
          required
        />
        <span v-show="!isPhoneValid(phone)" class="error"
          >Número de teléfono inválido</span
        >
      </div>

      <div class="form-group">
        <label for="birthdate">Fecha de Nacimiento:</label>
        <input type="date" id="birthdate" v-model="birthdate" required />
        <span v-show="!isValidDate(birthdate)" class="error"
          >Fecha de nacimiento inválida</span
        >
      </div>

      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required />
        <span v-show="!isPasswordValid(password)" class="error"
          >La contraseña debe tener al menos 6 caracteres, una mayúscula, una
          minúscula, un número y un carácter especial</span
        >
      </div>

      <button type="submit">Registrarse</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      birthdate: "",
      password: "",
    };
  },
  methods: {
    isEmailValid(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    isPhoneValid(phone) {
      const phoneRegex = /^\d{9}$/;
      return phoneRegex.test(phone);
    },
    isValidDate(date) {
      const inputDate = new Date(date);
      return !isNaN(inputDate.getTime());
    },
    isPasswordValid(password) {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
      return passwordRegex.test(password);
    },
    submitForm() {
      if (
        this.name &&
        this.isEmailValid(this.email) &&
        this.isPhoneValid(this.phone) &&
        this.isValidDate(this.birthdate) &&
        this.isPasswordValid(this.password)
      ) {
        console.log("Formulario válido. Datos enviados:", {
          name: this.name,
          email: this.email,
          phone: this.phone,
          birthdate: this.birthdate,
          password: this.password,
        });
      } else {
        console.log("Formulario inválido");
      }
    },
  },
};
</script>

<style>
.background-all {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-image: url("./src/assets/fondo3.jpeg"); */
  background-image: url("./src/assets/fondo1.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.9;
  z-index: -1;
}
.registration-form {
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  background-color: #f1f1f1;
  padding: 60px;
  border-radius: 5px;
  max-width: 600px;
  margin: 80px auto;
  border-radius: 20px;
  font-size: 18px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
}

.error {
  color: red;
  display: none;
}
</style>
