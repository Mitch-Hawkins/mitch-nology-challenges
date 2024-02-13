package io.nology.intro.greeting;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Optional;
import org.springframework.stereotype.Service;

// This is playing with the ideaof a repsository but this is NOT the correct syntax for a "real" repository
@Service
public class NameRepository {

  private ArrayList<String> names;

  public NameRepository() {
    names = new ArrayList<>(Arrays.asList("alice", "bob", "charlie"));
  }

  public Optional<String> findByName(String name) {
    return names
      .stream()
      .map(n -> n.toLowerCase())
      .filter(n -> n.equals(name))
      .findFirst();
  }

  public String saveName(String formattedName) {
    if (!names.contains(formattedName)) {
      names.add(formattedName);
    }
    return formattedName;
  }
}
