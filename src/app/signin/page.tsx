import { auth, signIn } from "@/auth";

async function SignIn() {
  const session = await auth();

  console.log(session);

  if (!session?.user) return null;

  return (
    <form
      action={async (formData) => {
        "use server";
        try {
          await signIn("credentials", formData);
        } catch (error) {
          console.log(error);
        }
      }}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign In</button>
    </form>
  );
}

export default SignIn;
