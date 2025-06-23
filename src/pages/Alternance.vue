<template>
  <div class="container">

    <h1 class="mb-5 text-center">Alternance - Batiactu Groupe</h1>

    <!-- Présentation de l'entreprise -->
    <div class="card mb-5">
      <div class="row g-0">
        <div class="col-md-6 d-flex align-items-center justify-content-center p-3">
          <img src="../assets/batiactu.png" class="img-fluid rounded" alt="Batiactu Groupe">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h4 class="card-title mb-3">Présentation de l'entreprise</h4>
            <p class="card-text">
              Batiactu Groupe est un acteur majeur de l'information dans les secteurs de la construction, de l'architecture et de l'immobilier. Fondée en 2001, l'entreprise propose divers services allant des solutions de devis et facturation, à la publication d'articles spécialisés, jusqu’à l’organisation de salons professionnels.
            </p>
            <p class="card-text">
              Le groupe est implanté à Paris (siège social) et à Valence, où sont développés les outils de chiffrage de la filiale Batichiffrage, au sein de laquelle s’est déroulée mon alternance.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Contexte de l'alternance -->
    <div class="card mb-5">
      <div class="row g-0 flex-md-row-reverse">
        <div class="col-md-6 d-flex align-items-center justify-content-center p-3">
          <img src="../assets/batichiffrage.png" class="img-fluid rounded" alt="Batichiffrage">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h4 class="card-title mb-3">Contexte de la mission</h4>
            <p class="card-text">
              Durant les premiers mois, j'ai travaillé sur des fonctionnalités simples pour découvrir les outils internes : création de filtres sur l’ERP interne, correction de bugs sur les filtres de date, validation de champs par expressions régulières, et adaptation responsive de pages.
            </p>
            <p class="card-text">
              Ensuite, j’ai pris en charge le projet majeur de mon alternance : la refonte complète des interfaces de l’application Batichiffrage, visant à moderniser et simplifier l’expérience utilisateur.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Technologies utilisées -->
    <div class="card mb-5">
      <div class="card-body">
        <h4 class="card-title mb-3 text-center">Technologies utilisées</h4>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card h-100">
              <div class="card-header">Front-End</div>
              <div class="card-body">
                <p>Vue.js (interface utilisateur, routing)</p>
                <p>Intégration de bibliothèques de thèmes personnalisées</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-header">Back-End</div>
              <div class="card-body">
                <p>Laravel (API, gestion des bases de données)</p>
                <p>PHP (logique métier)</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-header">Outils & Méthodologies</div>
              <div class="card-body">
                <p>Pivotal Tracker (gestion agile)</p>
                <p>Bitbucket (gestion de versions Git)</p>
                <p>Environnements de développement local et préproduction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bilan personnel -->
    <div class="card mb-5">
      <div class="row g-0">
        <div class="col-md-6 d-flex align-items-center justify-content-center p-3">
          <img src="../assets/batichiffrage.png" class="img-fluid rounded" alt="Equipe">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h4 class="card-title mb-3">Bilan personnel</h4>
            <p class="card-text">
              Mon intégration au sein de l'équipe s’est déroulée dans un climat de bienveillance et de collaboration. Grâce aux échanges réguliers avec mes collègues et mon maître d’apprentissage, j’ai rapidement monté en compétences.
            </p>
            <p class="card-text">
              L’alternance m’a permis de gagner en autonomie, de développer des compétences en résolution de problèmes et de mieux appréhender le processus de développement professionnel. J’ai progressivement pris en charge des missions de bout en bout, depuis l’analyse des besoins jusqu'à la mise en production.
            </p>
            <p class="card-text">
              Cette expérience a fortement contribué à ma maturité professionnelle, me préparant efficacement au monde du travail.
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Alternance'
}
</script>
