import "./App.css";
import ControlledForm from "./components/Form/ControlledForm";
import RefExample from "./components/Form/RefExample";
import RefForm from "./components/Form/RefForm";

function App() {
    const formSubmit = (data) => {
        // by backend expects to receive an object

        // const dataFormBacked = {
        //   username: "someUsername",
        //   email: "someEMail@mail.com",
        //   password: "password",
        //   passwordConfirm: "password"
        // }
        console.log(data);
    };
    return (
        <>
            <ControlledForm />
            {/* <RefExample /> */}
            <RefForm formSubmit={formSubmit} />
        </>
    );
}

export default App;
