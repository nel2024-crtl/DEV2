import Logger from './logger.js';

export default class DetailsManager {
    constructor(logger) {
        this.logger = logger;
        this.filteredLogs = [];

        this.logDisplayParent = document.getElementById('log-display-container');
        this.statsDisplayParent = document.getElementById('stats-container');

        // TODO : Ajouter les attributs nécessaires pour compléter les fonctionnalités du TP

    }

    /**
     * TODO : Initaliser la gestion des événements et charger les messages du journal
     */
    init() {
        this.loadLogs();
    }

    /**
     * TODO : Charger les messages du journal et l'afficher
     */
    loadLogs() { }

    /**
     * TODO : Construire la structure HTML d'un message du journal
     * @param {import('./storageManager.js').Log} log message du journal
     * @returns {HTMLDivElement} parent HTML du message dans la liste
     */
    buildLoggerItem(log) {
        const logItem = document.createElement('div');
        // TODO : Construire le reste de la structure

        this.logDisplayParent.appendChild(logItem);
    }

    /**
     * TODO : Calculer les statistiques des messages du journal en une seule itération
     * Vous ne pouvez pas utiliser des boucles `for`, `while` ou `forEach`
     * @returns { {
     * sessions: string[],
     * size: number,
     * levels : {debug: number, info : number, warn: number, error:number}
     * }} les statistiques
     */
    getCombinedStats() {
        return { sessions: [], size: 0, levels: { debug: 0, info: 0, warn: 0, error: 0 } };
    }

    // TODO : Ajouter les méthodes nécessaires pour compléter les fonctionnalités du TP

}

// TODO : Configurer les objets nécessaires pour initialiser le contrôleur de la page

const logger = new Logger(null);
const detailsManager = new DetailsManager(logger);

detailsManager.init();
