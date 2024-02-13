package io.nology.intro.greeting;

import jakarta.validation.Valid;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GreetingService {

  @Autowired
  private NameRepository nameRepository;

  public String sayHello() {
    return "Hello from the service";
  }

  public String sayGoodbye() {
    return "Goodbye from the service";
  }

  public String greet(String name) {
    Optional<String> maybeName =
      this.nameRepository.findByName(name.toLowerCase());
    if (maybeName.isPresent()) {
      String foundName = maybeName.get().toUpperCase();
      return String.format("Hello %s", foundName);
    }
    return "Welcome Guest";
    // if (name.toLowerCase().equals("alex")) {
    //   return "Hi alex you're great";
    // }
    // return String.format("Hello %s", name.toUpperCase());
  }

  public String createName(@Valid CreateNameDTO data) {
    String formattedName = data.getName().trim().toLowerCase();
    String savedName = this.nameRepository.saveName(formattedName);
    return String.format("Saved %s to database", savedName);
  }
}
