<template>
  <div class="login">
    <div class="background-all"></div>
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <div class="password-input">
          <input
            :type="passwordVisible ? 'text' : 'password'"
            id="password"
            v-model="password"
            required
          />
          <span class="password-toggle" @click="togglePasswordVisibility">
            {{ passwordVisible ? "Ocultar" : "Mostrar" }}
          </span>
        </div>
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
    <div v-if="error" class="error">{{ error }}</div>
    <div class="register-link">
      ¿No tienes una cuenta?
      <router-link to="/registro">Regístrate aquí</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      passwordVisible: false,
      error: "",
    };
  },
  methods: {
    login: function () {
      var url = "http://localhost:5023/api/Usuario/SignIn";
      var data = {
        email: this.email,
        contraseña: this.password,
      };
      axios
        .post(url, data)
        .then((response) => {
          console.log("aqui va la respuesta" + JSON.stringify(response));
          localStorage.setItem("userResult", JSON.stringify(response.data));
          alert("Inicio de sesión correcta");
          this.$router.push("/userlog");
        })
        .catch((error) => {
          console.log("Ocurrió un error " + error);
          localStorage.removeItem("userResult");
          alert("Ocurrió un error");
        });
    },
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
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
.login {
  max-width: 800px;
  margin: 80px auto;
  padding: 60px;
  background: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 20px;
}

.login h2 {
  text-align: center;
  margin-bottom: 10px;
}
.h2 {
  font-size: 0px;
  font-family: "Exo";
  position: relative;
  top: 6px;
}

.login form {
  display: flex;
  flex-direction: column;
}

.login .form-group {
  margin-bottom: 10px;
}

.login label {
  font-weight: bold;
}

.login input[type="email"],
.login input[type="password"] {
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
}

.login .password-input {
  position: relative;
}

.login .password-toggle {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 12px;
  color: #555;
}

.login button[type="submit"] {
  padding: 10px 20px;
  background: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 20px;
}

.login .error {
  margin-top: 10px;
  color: #dc3545;
  text-align: center;
  background-color: #fce8e6;
  padding: 10px;
  border-radius: 4px;
}

.login .register-link {
  margin-top: 20px;
  text-align: center;
}

.login .register-link a {
  color: #4caf50;
  text-decoration: none;
}
</style>
