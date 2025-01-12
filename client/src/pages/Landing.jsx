import Button from "../components/Button";

const Landing = () => {
  return (
    <main className="h-content flex flex-col items-center justify-center p-4">
      <h1 className="text-center text-3xl font-bold">
        Welcome to the To-Do List App
      </h1>
      <p className="">Your tasks organized in one place.</p>
      <div className="mt-4 flex gap-4">
        <Button to="/login" styles=" ">
          Login
        </Button>
        <Button to="/signup" styles="">
          Signup
        </Button>
      </div>
    </main>
  );
};

export default Landing;
