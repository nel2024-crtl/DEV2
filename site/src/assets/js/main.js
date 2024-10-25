import Logger from "./logger.js";

export default class MainPageController {
    /**
     * TODO : Configurer le contrôleur avec un gestionnaire de messages
     * @param {Logger} logger gestionnaire de messages
     */
    constructor(logger) {
        this.logger = logger;
    }

    /**
     * TODO : Initialiser le contrôleur de la page
     */
    init() { }

    /**
     * TODO : Ajouter des gestionnaires d'événements pour les boutons et le formulaire de la page
     */
    bindEvents() {
        document.getElementById('log-form').addEventListener('submit', (e) => { });
    }

    /**
     * TODO : construire un élément de la liste de messages selon le format :
     * `[AAAA-MM-JJ HH:MM:SS] - [Niveau] - Texte du message`
     * @param {string} log texte du message
     * @returns {HTMLLIElement} élément de liste de message
     */
    buildLogItem(log) { }

    /**
     * TODO : Charger les messages du journal dans la liste de messages
     */
    loadLogs() { }

    /**
     * TODO : Mettre à jour l'interface utilisateur en fonction de l'état du journal
    */
    updateUI() { }

    /**
     * TODO : Récupérer l'identifiant de session en cours ou en générer un nouveau
     */
    handleSession() { }

}

// TODO : Configurer les objets nécessaires pour initialiser le contrôleur de la page
// TODO : Corriger les problèmes de qualité soulevé par ESLint

const logger = new Logger(null);
var controller = new MainPageController(logger)

controller.init();