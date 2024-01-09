import StudentCard from "../../components/StudentCard/StudentCard";
import students from "../../data/data.json";

const StudentList = () => {
  return (
    <div>
      {/* <StudentCard
        name={students[0].name}
        age={students[0].age}
        location={students[0].location}
      />
      <StudentCard
        name={students[1].name}
        age={students[1].age}
        location={students[1].location}
      />
      <StudentCard
        name={students[2].name}
        age={students[2].age}
        location={students[2].location}
      /> */}
      {students.map((student) => {
        return (
          <StudentCard
            key={student.id}
            name={student.name}
            age={student.age}
            location={student.location}
            isLocationVisible={student.isLocationVisible}
          />
        );
      })}
    </div>
  );
};

export default StudentList;
