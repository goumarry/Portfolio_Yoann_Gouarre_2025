<template>
  <div class="container mt-5">
    <!-- Présentation -->
    <div class="card mb-5">
      <div class="card-body text-center">
        <h1 class="card-title">Yoann Goumarre</h1>
        <p class="card-text">
          Je suis actuellement étudiant en deuxième année de BUT Informatique à
          l’IUT2.
          <br /><br />
          Passionné par les nouvelles technologies et leur impact sur notre
          société, j’aime expérimenter et apprendre en continu. Je m’intéresse
          particulièrement au développement web, développement d’application, à
          la data science et à l’intelligence artificielle. À travers ces
          domaines, je cherche à créer des solutions innovantes et efficaces
          pour les défis actuels.
          <br /><br />
          Dans ce portfolio, je vais vous partager les projets les plus
          marquants de mes deux premières d’études, ainsi que mes réalisations
          les plus récentes. Ces expériences ont enrichi mes compétences
          techniques et ont renforcé ma passion pour l’informatique.
        </p>
      </div>
    </div>

    <!-- Carrousels -->
    <div class="mb-5">
      <h2 class="mb-3">Projets BUT 1</h2>

      <div
        id="carouselBUT1"
        class="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <router-link
            :to="{ path: '/but1', hash: '#but1-projet-1' }"
            class="carousel-item active text-center p-5"
          >
            Application de gestion d’événements
          </router-link>

          <router-link
            :to="{ path: '/but1', hash: '#but1-projet-2' }"
            class="carousel-item text-center p-5"
          >
            Exploitation d’une base de données
          </router-link>

          <router-link
            :to="{ path: '/but1', hash: '#but1-projet-3' }"
            class="carousel-item text-center p-5"
          >
            Installation de services réseaux
          </router-link>

          <router-link
            :to="{ path: '/but1', hash: '#but1-projet-4' }"
            class="carousel-item text-center p-5"
          >
            Recueil de besoins
          </router-link>

          <router-link
            :to="{ path: '/but1', hash: '#but1-projet-5' }"
            class="carousel-item text-center p-5"
          >
            Base de données Titanic
          </router-link>

          <router-link
            :to="{ path: '/but1', hash: '#but1-projet-6' }"
            class="carousel-item text-center p-5"
          >
            Algorithme de reconnaissance de dépêches
          </router-link>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselBUT1"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselBUT1"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>

      <h2 class="mb-3">Projets BUT 2</h2>

      <div
        id="carouselBUT2"
        class="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <router-link
            :to="{ path: '/but2', hash: '#but2-projet-1' }"
            class="carousel-item active text-center p-5"
          >
            Application de Recherche de Stage
          </router-link>

          <router-link
            :to="{ path: '/but2', hash: '#but2-projet-2' }"
            class="carousel-item text-center p-5"
          >
            Boutique en Ligne Symfony
          </router-link>

          <router-link
            :to="{ path: '/but2', hash: '#but2-projet-3' }"
            class="carousel-item text-center p-5"
          >
            L’école des Loustiques
          </router-link>

          <router-link
            :to="{ path: '/but2', hash: '#but2-projet-4' }"
            class="carousel-item text-center p-5"
          >
            Appli Ludo-Éducative NSI
          </router-link>

          <router-link
            :to="{ path: '/but2', hash: '#but2-projet-5' }"
            class="carousel-item text-center p-5"
          >
            PokeAPI JavaScript
          </router-link>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselBUT2"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselBUT2"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>

      <div class="mb-5">
  <h2 class="mb-3">Projets BUT 3</h2>

  <div id="carouselBUT3" class="carousel slide mb-5" data-bs-ride="carousel">
    <div class="carousel-inner">

      <router-link :to="{ path: '/but3', hash: '#but3-projet-1' }" class="carousel-item active text-center p-5">
        Duel de héros 
      </router-link>

      <router-link :to="{ path: '/but3', hash: '#but3-projet-2' }" class="carousel-item text-center p-5">
        API REST Football 
      </router-link>

      <router-link :to="{ path: '/but3', hash: '#but3-projet-3' }" class="carousel-item text-center p-5">
        Packaging Leed 
      </router-link>

      <router-link :to="{ path: '/but3', hash: '#but3-projet-4' }" class="carousel-item text-center p-5">
        Démineur Flutter
      </router-link>

      <router-link :to="{ path: '/but3', hash: '#but3-projet-5' }" class="carousel-item text-center p-5">
        Maintenance serveur REST
      </router-link>

    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselBUT3" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselBUT3" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
</div>

    </div>

    <!-- Compétences techniques -->
<h2 class="mb-3">Compétences Techniques</h2>
<div class="row row-cols-1 row-cols-md-3 g-4 mb-5">

  <div class="col">
    <div class="card h-100">
      <div class="card-header">Développement Web Front-End</div>
      <div class="card-body">
        <p>HTML, CSS, JavaScript</p>
        <p>Frameworks : Vue.js, React, Angular, Flutter (Web)</p>
        <p>CMS : WordPress avec Divi</p>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <div class="card-header">Développement Web Back-End</div>
      <div class="card-body">
        <p>Node.js (REST API, Football, Maintenance)</p>
        <p>PHP / Symfony (Recherche de Stage, E-Commerce)</p>
        <p>OpenAPI / Swagger (Documentation API REST)</p>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <div class="card-header">Développement Mobile</div>
      <div class="card-body">
        <p>Flutter & Dart (Démineur)</p>
        <p>Android Studio (Java - L’école des Loustiques)</p>
        <p>Firebase (Persistance de données)</p>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <div class="card-header">Gestion de Serveur & DevOps</div>
      <div class="card-body">
        <p>Docker & Docker Compose (Leed)</p>
        <p>Shell scripting (Automatisation de déploiement)</p>
        <p>Gestion des environnements via fichiers .env</p>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <div class="card-header">Bases de Données</div>
      <div class="card-body">
        <p>PostgreSQL, MySQL</p>
        <p>Gestion des fichiers JSON (API REST Football)</p>
        <p>phpMyAdmin, Firebase (BaaS)</p>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <div class="card-header">Outils de Qualité et Performance</div>
      <div class="card-body">
        <p>SonarQube (Analyse de dette technique)</p>
        <p>Benchmarking et mesure de performances</p>
        <p>Refactoring et versioning sémantique</p>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <div class="card-header">Intégration de Services Externes</div>
      <div class="card-body">
        <p>PokeAPI (projet JS)</p>
        <p>Gestion d’API REST et consommation de données JSON</p>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <div class="card-header">Outils de Développement</div>
      <div class="card-body">
        <p>Git (GitLab universitaire, versioning propre)</p>
        <p>VS Code, Intellij, Android Studio</p>
        <p>Utilisation de FileZilla et outils serveur</p>
      </div>
    </div>
  </div>

</div>

<!-- Compétences transversales -->
<h2 class="mb-3">Compétences Transversales</h2>
<div class="row row-cols-1 row-cols-md-2 g-4 mb-5">

  <div class="col">
    <div class="card h-100">
      <div class="card-header">Travail en Équipe</div>
      <div class="card-body">
        <p>Collaboration en équipe pluridisciplinaire (développeurs, réseaux, data)</p>
        <p>Gestion de projets en binôme et groupe (jusqu'à 7 personnes)</p>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <div class="card-header">Gestion de Projet</div>
      <div class="card-body">
        <p>Planification et exécution de projets progressifs</p>
        <p>Documentation technique (README, CHANGELOG, rapports qualité)</p>
        <p>Utilisation des principes Agile / itératif</p>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <div class="card-header">Résolution de Problèmes</div>
      <div class="card-body">
        <p>Refactoring progressif du code existant</p>
        <p>Analyse et réduction de la dette technique</p>
        <p>Optimisation des performances serveur</p>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <div class="card-header">Adaptabilité & Polyvalence</div>
      <div class="card-body">
        <p>Apprentissage rapide de nouveaux frameworks et technologies</p>
        <p>Expérience sur de multiples langages (Dart, Java, JS, PHP...)</p>
        <p>Capacité à intégrer des projets complexes et diversifiés</p>
      </div>
    </div>
  </div>

</div>

  </div>
</template>

<script>
export default {
  name: "Accueil",
};
</script>
