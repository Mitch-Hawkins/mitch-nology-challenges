// import music.Podcast;
// import music.Song;

import people.Person;
import people.Student;
import people.Teacher;

public class Main {

  public static void main(String[] args) throws Exception {
    // ParentClass parent = new ParentClass(3.2562f);
    // parent.parentMethod();
    // ChildClass child = new ChildClass(1.234f, "Bob");
    // child.childMethod();
    // Song s = new Song(6.00f, "mp3", "Bohemian Rhapsody", "Queen", "Rock");
    // s.printTrackInfo();

    // Podcast pod = new Podcast(50.00f, "wav", "The worst Idea of All Time", 1);
    // pod.printTrackInfo();

    Student firstStudent = new Student("Reece", "Wales");
    Student secondStudent = new Student("Mitch", "Wales");
    Student thirdStudent = new Student("Marielle", "Wales");
    Teacher firstTeacher = new Teacher("Alex");
    Teacher secondTeacher = new Teacher("Calum");

    Person[] peopleArray = {
      firstStudent,
      secondStudent,
      thirdStudent,
      firstTeacher,
      secondTeacher,
    };

    for (int i = 0; i < peopleArray.length; i++) {
      peopleArray[i].sayYourName();
    }

    firstTeacher.meeting(secondTeacher);

    firstTeacher.meeting(firstStudent);
    secondTeacher.meeting(secondStudent);
  }
}
