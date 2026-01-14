package io.d4rkr0n1n.stellar.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("title", "Project Stellar");
        model.addAttribute("content", "Focus on what matters.");
        return "index";
    }
}