<template>
  <div class="container">

    <h1 class="mb-5 text-center">Projets BUT 3</h1>

    <!-- Projet 1 -->
    <div class="card mb-4" id="but3-projet-1">
      <div class="card-header">
        Duel de héros - Editeur de personnages Angular
      </div>
      <div class="card-body">
        <p class="mb-1">
          <i class="bi bi-tools me-2"></i>
          <strong>Technologies :</strong> Angular, Firebase
        </p>
        <p class="mb-1">
          <strong>Objectif :</strong> Développer une application web de gestion de héros et d'armes pour un jeu de duel, en respectant de nombreuses contraintes de logique métier.
        </p>
        <p class="mb-1">
          <strong>Compétences :</strong> Développement front-end avec Angular (components, services, routes), utilisation des reactive forms, gestion de la persistance des données avec Firebase, gestion des contraintes métier complexes.
        </p>
        <p class="mb-3">
          <strong>Description :</strong> Réalisation d'une application complète en Angular permettant de créer, modifier, trier et filtrer des héros et des armes. Gestion avancée des caractéristiques avec répartition de points et contraintes de validation. Intégration d'une base de données distante Firebase pour la sauvegarde des données. Ajout de fonctionnalités avancées comme l'association d'armes aux héros, l'affichage des bonus/malus, des filtres dynamiques, ainsi qu'une première approche du jeu de combat entre héros.
        </p>
        <div class="d-flex justify-content-end align-items-center">
          <i class="bi bi-people me-1"></i> <span>1</span>
        </div>
      </div>
    </div>

    <!-- Projet 2 -->
    <div class="card mb-4" id="but3-projet-2">
      <div class="card-header">
        Serveur REST - API Football
      </div>
      <div class="card-body">
        <p class="mb-1">
          <i class="bi bi-tools me-2"></i>
          <strong>Technologies :</strong> Node.js, OpenAPI
        </p>
        <p class="mb-1">
          <strong>Objectif :</strong> Développer un serveur REST complet en Node.js avec documentation OpenAPI pour un système d’information autour du football.
        </p>
        <p class="mb-1">
          <strong>Compétences :</strong> Spécification et modélisation d’API REST, développement backend Node.js, gestion de fichiers JSON pour le stockage, documentation via OpenAPI, HATEOAS, création d’un client REST en bonus.
        </p>
        <p class="mb-3">
          <strong>Description :</strong> Implémentation d’un serveur REST basé sur une API Football, modélisant les joueurs, clubs, entraîneurs, matchs, et pays. Définition des entités et de leurs relations à l’aide de diagrammes de classes métier, réalisation de l’API en Node.js avec manipulation de fichiers JSON pour simuler la base de données. Documentation complète avec OpenAPI et ajout d’un README détaillé expliquant le fonctionnement du serveur, les choix techniques ainsi que la méthodologie employée.
        </p>
        <div class="d-flex justify-content-end align-items-center">
          <i class="bi bi-people me-1"></i> <span>1</span>
        </div>
      </div>
    </div>

    <!-- Projet 3 -->
    <div class="card mb-4" id="but3-projet-3">
      <div class="card-header">
        Packaging de l'application Leed avec Docker
      </div>
      <div class="card-body">
        <p class="mb-1">
          <i class="bi bi-tools me-2"></i>
          <strong>Technologies :</strong> Docker, Docker Compose, Shell Script
        </p>
        <p class="mb-1">
          <strong>Objectif :</strong> Réaliser le packaging complet de l’application Leed en respectant les bonnes pratiques de virtualisation avancée.
        </p>
        <p class="mb-1">
          <strong>Compétences :</strong> Déploiement d’applications multi-tiers avec Docker et Docker Compose, gestion des environnements via fichiers .env, création d’images Docker personnalisées, automatisation du déploiement avec scripts shell, gestion de la persistance des données et configuration centralisée.
        </p>
        <p class="mb-3">
          <strong>Description :</strong> Réalisation du packaging complet de l’application Leed (agrégateur RSS) avec Docker. L’infrastructure a été divisée en plusieurs services, gérés via Docker Compose avec un contrôle total via fichier .env. Un script d’automatisation a été développé pour effectuer l’ensemble des étapes de déploiement dans le bon ordre. Les choix de packaging ont été justifiés dans un rapport complet selon les bonnes pratiques de déploiement et du modèle 12Factor.
        </p>
        <div class="d-flex justify-content-end align-items-center">
          <i class="bi bi-people me-1"></i> <span>1</span>
        </div>
      </div>
    </div>

    <!-- Projet 4 -->
    <div class="card mb-4" id="but3-projet-4">
      <div class="card-header">
        Application Démineur Flutter
      </div>
      <div class="card-body">
        <p class="mb-1">
          <i class="bi bi-tools me-2"></i>
          <strong>Technologies :</strong> Flutter, Dart, RiverPod, Firebase
        </p>
        <p class="mb-1">
          <strong>Objectif :</strong> Développer une application mobile de démineur en Flutter en suivant une progression pédagogique sur 6 séances.
        </p>
        <p class="mb-1">
          <strong>Compétences :</strong> Programmation en Dart, développement d’interfaces mobiles avec Flutter, gestion de l’état avec RiverPod, navigation et gestion des routes avec Navigator, formulaires et listes dynamiques, persistance des données avec Firebase.
        </p>
        <p class="mb-3">
          <strong>Description :</strong> Réalisation progressive d'une application de démineur mobile Flutter. Développement du modèle de données en Dart, création de l’interface avec StatefulWidget, gestion avancée de la navigation et des états avec RiverPod, gestion des formulaires et listes, puis intégration de Firebase pour assurer la persistance des données utilisateurs.
        </p>
        <div class="d-flex justify-content-end align-items-center">
          <i class="bi bi-people me-1"></i> <span>1</span>
        </div>
      </div>
    </div>

    <!-- Projet 5 -->
    <div class="card mb-4" id="but3-projet-5">
      <div class="card-header">
        Maintenance applicative et optimisation d'un serveur REST
      </div>
      <div class="card-body">
        <p class="mb-1">
          <i class="bi bi-tools me-2"></i>
          <strong>Technologies :</strong> Node.js, GitLab, SonarQube, outils de benchmarking
        </p>
        <p class="mb-1">
          <strong>Objectif :</strong> Analyser et réduire la dette technique d’une base de code existante, améliorer ses performances et mettre en place un environnement complet d’analyse et de déploiement.
        </p>
        <p class="mb-1">
          <strong>Compétences :</strong> Analyse statique avec SonarQube, gestion de versions Git avancée, refactoring de code, gestion de versions sémantiques, mise en place de tests de performance et de benchmarks, amélioration des performances serveur.
        </p>
        <p class="mb-3">
          <strong>Description :</strong> Maintenance et optimisation d’un serveur REST réalisé précédemment. Mise en place d’un environnement complet d’analyse qualité (SonarQube), réalisation d’une étude de la dette technique initiale, puis refactoring progressif du code en respectant les règles de versionnage sémantique. Mesures des performances initiales et finales avec des outils de benchmarking afin de démontrer l’impact positif des modifications sur la qualité et la performance de l’application. Documentation complète des procédures et résultats.
        </p>
        <div class="d-flex justify-content-end align-items-center">
          <i class="bi bi-people me-1"></i> <span>1</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'BUT3'
}
</script>
