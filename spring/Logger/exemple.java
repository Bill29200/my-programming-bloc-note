package com.tacosmanager.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MonController {

    // ★ Cette ligne est très importante ★
    private static final Logger log = LoggerFactory.getLogger(MonController.class);

    @GetMapping("/hello")
    public String hello() {
        log.trace("Ceci est très détaillé (trace)");     // presque jamais visible
        log.debug("Utile en développement (debug)");      // souvent visible en dev
        log.info("Information normale (info)");           // le plus utilisé
        log.warn("Attention, quelque chose d'étrange");   // warning
        log.error("Erreur grave !", new Exception("oups")); // erreur + stacktrace

        // La forme recommandée (avec des {} ) → plus propre et performante
        String nom = "Nabil";
        int age = 30;
        log.info("Bonjour {}, tu as {} ans !", nom, age);

        return "Salut !";
    }
}