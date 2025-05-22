import LoginHeader from "@/components/login/LoginHeader";
import LoginForm from "@/components/login/LoginForm";
import LoginFooter from "@/components/login/LoginFooter";

export default function LoginPage() {
  return (
    <>
      <main
        className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center pt-16"
        style={{
          backgroundImage: `url('/login/background-login.png')`, // Aquí pones la ruta de tu imagen
        }}
      >
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg bg-opacity-80 backdrop-blur-sm">
        <LoginHeader />
          <LoginForm />
          <LoginFooter />
        </div>
      </main>
    </>
  );
}
