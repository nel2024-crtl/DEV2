import { LOG_LEVEL } from "./consts.js";

export default class Logger {

    /**
     * TODO : récupérer les messages du journal de la persistance locale et configurer l'objet
     * @param {Object} storageManager gestionnaire de persistance
     */
    constructor(storageManager) {
        this.logs = [];
    }

    /**
     * TODO : Ajouter un message dans le journal avec un texte, un niveau de gravité et un identifiant de session.
     * Faire persister le journal dans le stockage
     *
     * @param {string} text le texte du message
     * @param {string} level le niveau de gravité du message (voir la constante LOG_LEVEL)
     * @param {string} sessionId l'identifiant de session en cours
     * @returns {void}
     */
    add(text, level = LOG_LEVEL.INFO, sessionId = '') { }

    /**
    * TODO : Récupérer les messages du journal de la persistance locale
    */
    loadFromStorage() { }

    get length() {
        return this.logs.length;
    }

    /**
     * TODO : Ajouter d'autres méthodes ou attributs si nécessaire
    */

}