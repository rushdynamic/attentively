package app.attentively.attentivelyserver.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class StatsController {
    
    @GetMapping("/stats")
    public String stats() {
        return "My stats";
    }
    
}
