package streamspackage;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Main {

  public static void main(String[] args) throws Exception {
    //Double numbers in an array
    Integer[] numbers = { 1, 2, 3, 4, 5 };
    // Integer[] doubled = new Integer[numbers.length];

    // for (int i = 0; i < numbers.length; i++) {
    //   doubled[i] = numbers[i] * 2;
    // }

    // System.out.println(Arrays.toString(doubled));

    // convert array to a stream - however keep in mind streams can't use primitives

    Stream<Integer> numberStream = Stream.of(numbers);
    // streams have more methods available on them

    //passing a method by reference

    //Java uses lambda expressions, they use skinny arrow not fat arrow

    Stream<Integer> doubledStream = numberStream.map(MathHelpers::doubleNum);
    // to look at this data we need to turn it back into an array/collection
    Integer[] doubledNumbers = doubledStream.toArray(Integer[]::new);

    System.out.println(Arrays.toString(doubledNumbers));

    //unlike array iterators, they aggregate
    Integer[] largeDoubles = Stream
      .of(numbers)
      .map(n -> n * 2)
      .filter(n -> n > 5)
      .toArray(Integer[]::new);

    ArrayList<String> names = new ArrayList<String>(
      Arrays.asList("Alex", "Andrew", "Bob", "Charlie")
    );

    //turn array list into stream, use the stream iterators, turn stream into array list .collect()
    ArrayList<String> namesStartingWithA = names
      .stream()
      .filter(name -> name.toLowerCase().charAt(0) == 'a')
      .collect(Collectors.toCollection(ArrayList::new));

    //collect and toArray are **terminal** operations - they stop the stream
    //forEach is another terminal operation
    //peek is like debugging into your stream, because it doesnt terminate the stream.
    //findFirst is a terminal operation

    Optional<String> maybeName = names
      .stream()
      .filter(name -> name.toLowerCase().charAt(0) == 'a')
      .peek(name -> System.out.println("Hi " + name))
      .filter(name -> name.length() > 4)
      .findFirst(); //makes it a string not an array

    if (maybeName.isPresent()) {
      System.out.println(maybeName.get());
    } else {
      System.out.println("Sorry Could Not Find Name");
    }

    Integer sum = Stream.of(numbers).reduce(0, (total, next) -> total + next); //reduce iterator in Java

    Consultant alice = new Consultant("Alice", "Adelaide");
    Consultant bob = new Consultant("Bob", "Brisbane");
    Consultant charlie = new Consultant("Charlie", "Canberra");

    System.out.println(Consultant.count);
    System.out.println(alice.getId() + bob.getId() + charlie.getId());

    Optional<Consultant> maybeConsultant = Consultant.findByName("alice");
    if (maybeConsultant.isPresent()) {
      System.out.println(maybeConsultant.get());
    }

    System.out.println(
      String.format("Total expenditure is %f", Consultant.totalExpenditure())
    );

    Consultant
      .getConsultants()
      .stream()
      .peek(Consultant::increaseSalary)
      .filter(c -> c.getLocation() == "Adelaide")
      .forEach(c -> c.increaseSalary(500.0));
  }
}
