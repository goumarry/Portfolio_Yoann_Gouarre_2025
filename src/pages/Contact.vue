<template>
  <div class="container">
    <h1 class="mb-5 text-center">Contact</h1>

    <div class="row g-4">

      <!-- CV affiché -->
      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-header text-center">Mon CV</div>
          <div class="card-body">
            <img src="../assets/yoann-cv.png" type="application/pdf" width="100%" height="850px" />
          </div>
        </div>
      </div>

      <!-- Formulaire de contact -->
      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-header text-center">Formulaire de Contact</div>
          <div class="card-body">
            <form @submit.prevent="sendEmail">

              <div class="mb-3">
                <label for="nom" class="form-label">Nom</label>
                <input type="text" class="form-control" v-model="form.nom" required />
              </div>

              <div class="mb-3">
                <label for="prenom" class="form-label">Prénom</label>
                <input type="text" class="form-control" v-model="form.prenom" required />
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Adresse email</label>
                <input type="email" class="form-control" v-model="form.email" required />
              </div>

              <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" rows="4" v-model="form.message" required></textarea>
              </div>

              <button type="submit" class="btn btn-primary w-100">Envoyer</button>

            </form>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'Contact',
  data() {
    return {
      form: {
        nom: '',
        prenom: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    sendEmail() {
      const serviceID = 'service_w7qaktb';
      const templateID = 'template_x81v1sh';
      const publicKey = 'xn8xsv2fUCwdhqY_h';

      const templateParams = {
        nom: this.form.nom,
        prenom: this.form.prenom,
        email: this.form.email,
        message: this.form.message
      };

      emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then(() => {
          alert("Votre message a bien été envoyé !");
          this.form = { nom: '', prenom: '', email: '', message: '' };
        }, (err) => {
          alert("Erreur lors de l'envoi : " + err);
        });
    }
  }
}
</script>
