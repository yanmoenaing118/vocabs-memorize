"use client";

export default function CoverImage() {



  return (
    <>
      <img
        src="/boahancock2.png"
        alt="Boa hancock"
        className="fixed top-0 left-0 w-full h-[100vh]  object-cover object-right-top -z-10 "
      />
      <img
        src="/boahancock2.png"
        alt="Boa hancock"
        className="fixed top-0 left-0 w-[350vw] md:w-full h-[100vh]  object-cover object-left-top -z-10  animate-slide-horizontal"
      />

      <style jsx>{`
        @keyframes slide-horizontal {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-slide-horizontal {
          animation: slide-horizontal 10s linear infinite alternate;
        }
      `}</style>
    </>
  );
}
