
import LoginForm from './components/Login';

function App() {
  const handleForgotPassword = () => {
    console.log("Forgot Password clicked");
  };

  return (
    <section className='body'>
      <LoginForm onForgotPassword={handleForgotPassword} />
    </section>
  );
}

export default App;

