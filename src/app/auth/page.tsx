import { Nav } from '@/components/Nav';
import { SignIn } from '@/components/pages/SignIn';

export default function Page() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <Nav isRight={true} />
      </div>
      <div className="h-2/3 px-4">
        <SignIn />
      </div>
      <div />
    </div>
  );
}
