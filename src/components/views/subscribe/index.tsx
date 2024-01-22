'use client';

import Button from '~/components/button';
import Container from '~/components/container';

export type SubscribeProps = {};

const Subscribe = ({}: SubscribeProps) => {
  return (
    <Container>
      <div className="mt-44 flex flex-col items-center text-center">
        <h1 className="text-5xl font-400 -tracking-[2px] text-white">
          Kn
          <span className="mx-1 inline-block h-[26px] w-[78px] rounded-full border-[3px] border-white" />
          w more about
          <br />
          <span className="font-500 italic">White Deer</span>
        </h1>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex w-full max-w-lg overflow-hidden rounded-2xl bg-[#0D0D0D] p-1 focus-within:bg-[#111111]"
        >
          <input
            type="text"
            placeholder="Enter your email"
            className="h-full grow bg-transparent py-5 pl-6 font-500 text-white placeholder:text-[#5B5B5B] focus-visible:outline-0"
          />
          <Button size="lg">Subscribe</Button>
        </form>
      </div>
    </Container>
  );
};

export default Subscribe;