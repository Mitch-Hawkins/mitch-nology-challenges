package io.nology.intro.greeting;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/greetings")
public class GreetingController {

  @Autowired
  private GreetingService greetingService;

  // GreetingController(GreetingService service) {
  //     this.greetingService = service;
  // }

  @GetMapping
  public String sayHello() {
    return this.greetingService.sayHello();
  }

  @GetMapping("/goodbye")
  public String sayGoodbye() {
    return this.greetingService.sayGoodbye();
  }

  @GetMapping("/{name}")
  public String greet(@PathVariable String name) {
    return this.greetingService.greet(name);
  }

  @PostMapping
  public String createUser(@Valid @RequestBody CreateNameDTO data) {
    return this.greetingService.createName(data);
  }
}
