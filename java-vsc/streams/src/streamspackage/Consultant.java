package streamspackage;

import java.util.ArrayList;
import java.util.Optional;
import java.util.stream.Collectors;

public class Consultant {

  private String name;
  private String location;
  private Double salary;
  private Integer id;

  public static Integer count = 0;

  private static ArrayList<Consultant> consultants = new ArrayList<>();

  public static Optional<Consultant> findByName(String name) {
    return consultants
      .stream()
      .filter(c -> c.getName().toLowerCase().equals(name.toLowerCase()))
      .findFirst();
  }

  public static Double totalExpenditure() {
    // return consultants
    //   .stream()
    //   .reduce(0.0, (total, c) -> total + c.getSalary(), Double::sum);
    return consultants.stream().mapToDouble(Consultant::getSalary).sum();
  }

  public static ArrayList<Consultant> getConsultants() {
    return consultants;
  }

  public void increaseSalary(Double amount) {
    this.salary += amount;
  }

  public void increaseSalary() {
    this.salary += 5000.00;
  }

  public Consultant(String name, String location) {
    this.name = name;
    this.location = location;
    this.id = ++count;
    this.salary = 50000.00;
    consultants.add(this);
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getLocation() {
    return location;
  }

  public void setLocation(String location) {
    this.location = location;
  }

  public Double getSalary() {
    return salary;
  }

  public void setSalary(Double salary) {
    this.salary = salary;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public static void setConsultants(ArrayList<Consultant> consultants) {
    Consultant.consultants = consultants;
  }
}
