<template>
  <div class="container">
    <h1 class="mb-5 text-center">Alternance - Batichiffrage</h1>

    <!-- Présentation & Objectif -->
    <div class="card mb-5">
      <div class="row g-0">
        <div class="col-md-6 d-flex align-items-center justify-content-center p-3">
          <img src="../assets/batichiffrage.png" class="img-fluid rounded" alt="Batichiffrage">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h4 class="card-title mb-3">Présentation & Objectif</h4>
            <p class="card-text">
              Batichiffrage est une solution de chiffrage développée par Batiactu Groupe, destinée aux professionnels du bâtiment. Lors de mon alternance, j’ai été chargé de la refonte complète de l’interface utilisateur, dans le but de moderniser l’application, la rendre responsive, améliorer sa maintenabilité et enrichir l’expérience utilisateur.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Phase 1 : Intégration de librairies externes -->
    <div class="card mb-5">
      <div class="row g-0">
        <div class="col-md-6 d-flex align-items-center justify-content-center p-3">
          <img src="../assets/p1.png" class="img-fluid rounded" alt="Phase 1">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h4 class="card-title mb-3">Phase 1 – Intégration de librairies externes</h4>
            <p class="card-text">
              J’ai analysé plusieurs bibliothèques de composants Vue.js pour moderniser l’interface de Batichiffrage. Après une série de prototypes et une réunion multi-équipes, deux bibliothèques ont été combinées pour tirer le meilleur de chacune. Cela a nécessité un important travail d’intégration, de résolution de conflits CSS, d’organisation des composants dans un dossier « theme », et l’adaptation du tableau de bord.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Phase 2 : Mise en place des vues mobiles -->
    <div class="card mb-5">
      <div class="row g-0 flex-md-row-reverse">
        <div class="col-md-6 d-flex align-items-center justify-content-center p-3">
          <img style="max-height:500px" src="../assets/p2.png" class="img-fluid rounded" alt="Phase 2">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h4 class="card-title mb-3">Phase 2 – Mise en place des vues mobiles</h4>
            <p class="card-text">
              L'application initiale n'était pas utilisable sur mobile. J'ai restructuré les pages clés, notamment les bases de travaux et fournitures, pour qu'elles s’adaptent dynamiquement à la taille de l’écran. Les tableaux deviennent des cartes interactives sur mobile, garantissant accessibilité, clarté et ergonomie.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Phase 3 : Création d’un composant complexe -->
    <div class="card mb-5">
      <div class="row g-0">
        <div class="col-md-6 d-flex align-items-center justify-content-center p-3">
          <img src="../assets/p3.png" class="img-fluid rounded" alt="Phase 3">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h4 class="card-title mb-3">Phase 3 – Création d’un composant complexe</h4>
            <p class="card-text">
              J’ai développé le composant « DatatableFiltre » permettant un filtrage dynamique de tableaux complexes selon le contexte (devis, factures, règlements). Ce composant utilise des événements Vue.js pour interagir avec la vue parente et synchroniser les filtres, avec persistance via local storage. Il a été conçu pour être réutilisable, performant et évolutif.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Phase 4 : Refonte du template d’édition mobile -->
    <div class="card mb-5">
      <div class="row g-0 flex-md-row-reverse">
        <div class="col-md-6 d-flex align-items-center justify-content-center p-3">
          <img src="../assets/p4.png" class="img-fluid rounded" alt="Phase 4">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h4 class="card-title mb-3">Phase 4 – Refonte du template d’édition mobile</h4>
            <p class="card-text">
              Cette dernière phase concerne l’adaptation responsive du module de génération de devis/factures. J’ai préparé des prototypes fonctionnels pour mobile et étudié les solutions techniques nécessaires à la réorganisation des composants, dans le but de permettre une création complète de documents depuis smartphone.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bilan personnel -->
    <div class="card mb-5">
      <div class="row g-0">
        <div class="col-md-6 d-flex align-items-center justify-content-center p-3">
          <img src="../assets/batiactu.png" class="img-fluid rounded" alt="Bilan">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h4 class="card-title mb-3">Bilan de l’alternance</h4>
            <p class="card-text">
              Cette alternance m’a permis de progresser techniquement sur Vue.js, Laravel, la structuration de composants réutilisables, et la gestion d’interfaces complexes. J’ai aussi amélioré mes compétences organisationnelles, en menant un projet de bout en bout, et en travaillant avec plusieurs corps de métier dans une logique produit.
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
<!-- Lien de téléchargement du mémoire -->
<div class="text-center mb-5">
  <a
    :href="memoireUrl"
    download="Memoire_Alternance_Yoann_Goumarre.pdf"
    class="btn btn-outline-primary"
  >
    📄 Télécharger mon mémoire d'alternance
  </a>
</div>

</template>

<script>
import memoire from '../assets/Memoire_Alternance_Yoann_Goumarre.pdf'

export default {
  name: 'Alternance',
  data() {
    return {
      memoireUrl: memoire
    }
  }
}
</script>
